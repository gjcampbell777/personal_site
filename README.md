# My Portfolio Site

This repository now follows the requested multi-service architecture with a React frontend, Go CRUD service, Python API, Rust engine, and automated test pipeline.

## Repository structure

```text
personal-site/
├── .github/workflows/
│   ├── frontend-deploy.yml
│   ├── go-backend-deploy.yml
│   ├── python-backend-deploy.yml
│   ├── rust-backend-deploy.yml
│   └── test-pipeline-deploy.yml
├── backend-go/
│   ├── cmd/api/main.go
│   └── go.mod
├── backend-python/
│   ├── app/main.py
│   └── requirements.txt
├── backend-rust/
│   ├── src/main.rs
│   └── Cargo.toml
├── pipeline-testing/
│   ├── src/test_runner.py
│   ├── integration_tests/
│   └── requirements-test.txt
├── frontend/
└── README.md
```

## Development

### Frontend

```bash
npm --prefix frontend install --legacy-peer-deps
npm --prefix frontend start
npm --prefix frontend run build
```

### Go backend

```bash
cd backend-go
go mod tidy
go run ./cmd/api
go test ./...
go build ./cmd/api
```

### Python backend

```bash
cd backend-python
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Rust backend

```bash
cd backend-rust
cargo build
cargo run
```

### Test pipeline

```bash
cd pipeline-testing
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-test.txt
```

## Deployment

- Frontend: [.github/workflows/frontend-deploy.yml](.github/workflows/frontend-deploy.yml)
- Go backend: [.github/workflows/go-backend-deploy.yml](.github/workflows/go-backend-deploy.yml)
- Python backend: [.github/workflows/python-backend-deploy.yml](.github/workflows/python-backend-deploy.yml)
- Rust backend: [.github/workflows/rust-backend-deploy.yml](.github/workflows/rust-backend-deploy.yml)
- Test pipeline: [.github/workflows/test-pipeline-deploy.yml](.github/workflows/test-pipeline-deploy.yml)
