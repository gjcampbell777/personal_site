import json
import subprocess
import sys
from pathlib import Path


def lambda_handler(event=None, context=None):
    project_root = Path(__file__).resolve().parents[1]
    result = subprocess.run(
        [sys.executable, "-m", "pytest", "-q", str(project_root / "integration_tests")],
        capture_output=True,
        text=True,
        cwd=project_root,
    )

    return {
        "statusCode": 0 if result.returncode == 0 else 1,
        "body": json.dumps(
            {
                "returncode": result.returncode,
                "stdout": result.stdout,
                "stderr": result.stderr,
            }
        ),
    }


if __name__ == "__main__":
    print(lambda_handler())
