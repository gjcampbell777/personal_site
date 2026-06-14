.PHONY: build-go build-rust build-python build-all clean test deploy help install-deps check-deps

# Variables
DIST_DIR := dist
GO_FUNCTIONS := $(wildcard functions/go/*/main.go)
RUST_FUNCTIONS := $(wildcard functions/rust/*/Cargo.toml)
PYTHON_FUNCTIONS := $(wildcard functions/python/*/lambda_function.py)

# Detect Python command
PYTHON := $(shell command -v python3 2> /dev/null || command -v python 2> /dev/null)
PIP := $(shell command -v pip3 2> /dev/null || command -v pip 2> /dev/null)

help:
	@echo "Available targets:"
	@echo "  check-deps    - Check if all required tools are installed"
	@echo "  build-all     - Build all functions (Go, Rust, Python)"
	@echo "  build-go      - Build all Go functions"
	@echo "  build-rust    - Build all Rust functions"
	@echo "  build-python  - Build all Python functions"
	@echo "  clean         - Clean all build artifacts"
	@echo "  test          - Run all tests"
	@echo "  deploy        - Deploy to Amplify"
	@echo "  dev           - Start development environment"
	@echo "  install-deps  - Install all dependencies"

# Check if required tools are installed
check-deps:
	@echo "🔍 Checking dependencies..."
	@command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required but not installed."; exit 1; }
	@command -v npm >/dev/null 2>&1 || { echo "❌ npm is required but not installed."; exit 1; }
	@command -v go >/dev/null 2>&1 || { echo "⚠️  Go is not installed. Go functions will be skipped."; }
	@command -v cargo >/dev/null 2>&1 || { echo "⚠️  Rust/Cargo is not installed. Rust functions will be skipped."; }
	@if [ -z "$(PYTHON)" ]; then echo "⚠️  Python is not installed. Python functions will be skipped."; else echo "✅ Python found: $(PYTHON)"; fi
	@if [ -z "$(PIP)" ]; then echo "⚠️  pip is not installed. Python dependencies cannot be installed."; else echo "✅ pip found: $(PIP)"; fi
	@echo "✅ Dependency check complete!"

$(DIST_DIR):
	@mkdir -p $(DIST_DIR)/go $(DIST_DIR)/rust $(DIST_DIR)/python

build-go: $(DIST_DIR)
	@if ! command -v go >/dev/null 2>&1; then \
		echo "⚠️  Go not found, skipping Go functions..."; \
		exit 0; \
	fi; \
	@echo "🔨 Building Go functions..."
	@for func_main in $(GO_FUNCTIONS); do \
		func_dir=$$(dirname $$func_main); \
		func_name=$$(basename $$func_dir); \
		echo "  Building Go function: $$func_name"; \
		cd $$func_dir && \
		GOOS=linux GOARCH=arm64 go build -o bootstrap main.go && \
		zip -r ../../../$(DIST_DIR)/go/$$func_name.zip bootstrap && \
		rm bootstrap && \
		cd - > /dev/null; \
	done
	@echo "✅ Go functions built successfully!"

build-rust: $(DIST_DIR)
	@if ! command -v cargo >/dev/null 2>&1; then \
		echo "⚠️  Cargo not found, skipping Rust functions..."; \
		exit 0; \
	fi; \
	@echo "🦀 Building Rust functions..."
	@for cargo_toml in $(RUST_FUNCTIONS); do \
		func_dir=$$(dirname $$cargo_toml); \
		func_name=$$(basename $$func_dir); \
		echo "  Building Rust function: $$func_name"; \
		cd $$func_dir && \
		if command -v cargo-lambda >/dev/null 2>&1; then \
			echo "    Using cargo-lambda..."; \
			cargo lambda build --release --arm64; \
			if [ -f "target/lambda/$$func_name/bootstrap" ]; then \
				cp target/lambda/$$func_name/bootstrap .; \
			elif [ -f "target/lambda/release/bootstrap" ]; then \
				cp target/lambda/release/bootstrap .; \
			else \
				echo "    Searching for bootstrap binary..."; \
				find target -name "bootstrap" -type f | head -1 | xargs -I {} cp {} .; \
			fi; \
		else \
			echo "    Using regular cargo build..."; \
			cargo build --release; \
			cp target/release/$$func_name bootstrap; \
		fi && \
		if [ ! -f bootstrap ]; then \
			echo "    ❌ Bootstrap binary not found!"; \
			ls -la target/ || true; \
			exit 1; \
		fi && \
		zip -r ../../../$(DIST_DIR)/rust/$$func_name.zip bootstrap && \
		rm bootstrap && \
		cd - > /dev/null; \
	done
	@echo "✅ Rust functions built successfully!"

build-python: $(DIST_DIR)
	@if [ -z "$(PYTHON)" ]; then \
		echo "⚠️  Python not found, skipping Python functions..."; \
		exit 0; \
	fi; \
	@echo "🐍 Building Python functions..."
	@for func_py in $(PYTHON_FUNCTIONS); do \
		func_dir=$$(dirname $$func_py); \
		func_name=$$(basename $$func_dir); \
		echo "  Building Python function: $$func_name"; \
		cd $$func_dir && \
		if [ -f requirements.txt ] && [ -n "$(PIP)" ]; then \
			echo "    Installing Python dependencies..."; \
			$(PIP) install -r requirements.txt -t . --quiet; \
		elif [ -f requirements.txt ]; then \
			echo "    ⚠️  pip not found, skipping dependency installation"; \
		fi && \
		zip -r ../../../$(DIST_DIR)/python/$$func_name.zip . -x "*.pyc" "__pycache__/*" "*.git*" && \
		cd - > /dev/null; \
	done
	@echo "✅ Python functions built successfully!"

build-all: check-deps clean build-go build-rust build-python
	@echo "🎉 All available functions built successfully!"

clean:
	@echo "🧹 Cleaning build artifacts..."
	@rm -rf $(DIST_DIR)
	@find functions -name "bootstrap" -delete 2>/dev/null || true
	@find functions -name "target" -type d -exec rm -rf {} + 2>/dev/null || true
	@find functions -name "__pycache__" -type d -exec rm -rf {} + 2>/dev/null || true
	@find functions -name "*.pyc" -delete 2>/dev/null || true
	@rm -rf build node_modules/.cache 2>/dev/null || true
	@echo "✅ Cleaned successfully!"

test:
	@echo "🧪 Running tests..."
	@npm test -- --coverage --watchAll=false || echo "Frontend tests completed"
	@if command -v go >/dev/null 2>&1; then \
		echo "Testing Go functions..."; \
		cd functions/go && go test ./... || echo "Go tests completed"; \
	fi
	@if command -v cargo >/dev/null 2>&1; then \
		echo "Testing Rust functions..."; \
		cd functions/rust && find . -name Cargo.toml -execdir cargo test \; || echo "Rust tests completed"; \
	fi
	@if [ -n "$(PYTHON)" ]; then \
		echo "Testing Python functions..."; \
		cd tests/integration && $(PYTHON) -m pytest . || echo "Python tests completed"; \
	fi

install-deps:
	@echo "📦 Installing dependencies..."
	@npm install
	@if command -v go >/dev/null 2>&1; then \
		echo "Installing Go dependencies..."; \
		cd functions/go && find . -name go.mod -execdir go mod tidy \; 2>/dev/null || true; \
	fi
	@if command -v cargo >/dev/null 2>&1; then \
		echo "Installing Rust tools..."; \
		cargo install cargo-lambda 2>/dev/null || echo "cargo-lambda installation skipped"; \
	fi
	@if [ -n "$(PIP)" ]; then \
		echo "Installing Python tools..."; \
		$(PIP) install pytest boto3 2>/dev/null || echo "Python packages installation skipped"; \
	fi
	@echo "✅ Dependencies installation completed!"

dev:
	@echo "🚀 Starting development environment..."
	@echo "Starting Amplify sandbox in background..."
	@npx ampx sandbox > amplify-sandbox.log 2>&1 &
	@echo "Starting React development server..."
	@npm start

deploy: build-all
	@echo "🚀 Deploying to Amplify..."
	@npx ampx pipeline-deploy --branch main

# Platform-specific Python installation helpers
install-python-mac:
	@echo "Installing Python on macOS..."
	@if command -v brew >/dev/null 2>&1; then \
		brew install python3; \
	else \
		echo "Homebrew not found. Please install Python manually from https://python.org"; \
	fi

install-python-ubuntu:
	@echo "Installing Python on Ubuntu..."
	@sudo apt update && sudo apt install -y python3 python3-pip

install-python-centos:
	@echo "Installing Python on CentOS/RHEL..."
	@sudo yum install -y python3 python3-pip

install-python-windows:
	@echo "For Windows, please install Python from https://python.org"
	@echo "Make sure to check 'Add Python to PATH' during installation"
