# My Portfolio Site

This repository now follows the requested multi-service architecture with a React frontend, Go CRUD service, Python API, Rust engine, and automated test pipeline.

## Repository structure

```text
my-personal-site/
├── src/                                # React application
│   ├── assets/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Jumbotron.js
│   │   ├── Layout.js
│   │   ├── Navigation.js
│   │   └── ProjectCard.js
│   ├── hooks/
│   ├── pages/
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   ├── Projects.js
│   │   └── Resume.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── functions/
│   ├── go/                            # Go microservices
│   │   ├── api-gateway/
│   │   ├── user-service/
│   │   ├── project-service/
│   │   └── shared/
│   ├── rust/                          # Rust services
│   │   ├── auth-service/
│   │   ├── file-service/
│   │   └── shared/
│   └── python/                        # Python services
│       ├── ml-service/
│       ├── data-processing/
│       └── analytics-service/
├── dist/                             # Builds of all services
│   ├── go/
│   ├── rust/
│   └── python/
├── amplify/                          # amplify
│   ├── data/
│   ├── functions/
│   └── backend.ts
├── docs/                             # Documentation
├── tests/                            # Integration and unit tests
│   ├── frontend/
│   ├── functions/
│   └── integration/
├── .github/                          # GitHub Actions workflows
│   └── workflows/
│   │   ├── codeql-analysis.yml
│   │   ├── frontend-deploy.yml
│   │   ├── go-backend-deploy.yml
│   │   ├── python-backend-deploy.yml
│   │   ├── rust-backend-deploy.yml
│   │   └── test-pipeline-deploy.yml
│   └── dependabot.yml
├── README.md
├── .gitignore
├── amplify.yml
├── package.json
├── package-lock.json
└── Makefile
```

## Development

This project uses a multi-language architecture with Go, Rust, and Python backend services and a React frontend. The build system is managed through a comprehensive Makefile that handles cross-platform development.
Prerequisites
Required Tools

    Node.js (v16+) and npm - For React frontend and Amplify CLI
    Git - Version control

### Optional Tools (for backend development)

    Go (v1.19+) - For Go-based Lambda functions
    Rust and Cargo - For Rust-based Lambda functions
    Python (v3.8+) and pip - For Python-based Lambda functions

## Quick Start
1. Check Dependencies

`make check-deps`

This will verify which tools are installed and show warnings for missing optional dependencies.
2. Install Dependencies

`make install-deps`

Installs all available dependencies for detected languages and tools.
3. Start Development Environment

`make dev`

This starts both the Amplify sandbox and React development server.

## Development Workflow
### Building Functions

Build all available functions: `make build-all`

Build specific language functions: 
`make build-go # Build Go Lambda functions` 
`make build-rust # Build Rust Lambda functions`
`make build-python # Build Python Lambda functions`

### Testing

Run all tests: `make test`

Runs frontend tests and any available backend tests for installed languages.

### Cleaning

Clean build artifacts: `make clean`

Removes all build artifacts, compiled binaries, and temporary files.


## Platform-Specific Setup
Installing Python

macOS (with Homebrew): make install-python-mac

Ubuntu/Debian: make install-python-ubuntu

CentOS/RHEL: make install-python-centos

Windows: make install-python-windows
Project Structure

The Makefile automatically detects functions in these locations:

    Go functions: `functions/go/*/main.go`
    Rust functions: `functions/rust/*/Cargo.toml`
    Python functions: `functions/python/*/lambda_function.py`

## Build Outputs

All compiled functions are packaged as ZIP files in the dist/
directory:

```text
dist/
├── go/
│   └── function-name.zip
├── rust/
│   └── function-name.zip
└── python/
    └── function-name.zip
```

## Development Features
### Cross-Platform Support

    Automatically detects available tools and skips unavailable languages
    Platform-specific Python installation helpers
    Graceful handling of missing dependencies

## Optimized Builds

    Go: Builds for Linux ARM64 (Lambda-optimized)
    Rust: Uses `cargo-lambda` when available, falls back to standard cargo
    Python: Includes dependency packaging with pip

## Smart Dependency Management

    Automatically runs `go mod tidy` for Go modules
    Installs `cargo-lambda` for optimized Rust builds
    Handles Python virtual environments and requirements.txt

## Deployment

Deploy to Amplify: `make deploy`

Builds all functions and deploys using Amplify pipeline.

## Available Make Targets
Target	        Description
`help`          Show all available targets
`check-deps`    Verify required tools are installed
`install-deps`  Install all dependencies
`build-all`     Build all available functions
`build-go`      Build Go functions only
`build-rust`    Build Rust functions only
`build-python`  Build Python functions only
`clean`         Remove build artifacts
`test`          Run all tests
`dev`           Start development environment
`deploy`        Deploy to Amplify

## Troubleshooting
### Common Issues

"Command not found" errors:

    Run make `check-deps` to see which tools need installation
    Install missing tools using your system's package manager

Build failures:

    Ensure you're in the project root directory
    Run `make clean` then try building again
    Check that function directories contain the expected entry files

Python dependency issues:

    Ensure pip is installed: `python -m ensurepip --upgrade`
    Try using pip3 explicitly if pip fails

## Getting Help

Run `make help` to see all available commands and their descriptions.