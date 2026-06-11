from fastapi import FastAPI
from mangum import Mangum

app = FastAPI(title="portfolio-python-api")


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok", "service": "portfolio-python-api"}


handler = Mangum(app)
