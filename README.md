# Save It

A versatile utility that allows you to download images and other files from the internet. It provides both a Command-Line Interface (CLI) and a modern Web Interface.

## Features

- **Web Interface**: Modern Vue.js frontend with PrimeVue components.
- **REST API**: Fast, typed backend using FastAPI.
- **CLI Mode**: Interactive command-line tool.
- **Auto-Detection**: Automatically detects file types from Content-Type headers.
- **Formats**: Supports jpg, png, webp, svg, etc.

## How to Use

### Web Interface (Recommended)

The web interface consists of a FastAPI backend and a Vue.js frontend.

1.  **Start the Backend API**:
    ```bash
    pip install -r requirements.txt
    python -m backend.app
    ```
    The API will run at `http://0.0.0.0:8000`.

2.  **Start the Frontend**:
    Open a new terminal window:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    Open the URL shown (usually `http://localhost:5173`) in your browser.

### Command Line Interface

To run the standalone CLI tool:

```bash
pip install -r requirements.txt
python main.py
```
Follow the prompts to enter the URL and filename.

## Requirements

- **Python 3.12+**
- **Node.js & npm** (for Web Interface)

## Project Structure

```
image-downloader/
├── backend/             # FastAPI backend application
│   ├── app.py          # API endpoints
│   └── downloader.py   # Core downloading logic
├── frontend/            # Vue.js frontend application
│   ├── src/            # Vue source files
│   └── package.json    # Frontend dependencies
├── main.py              # CLI entry point
└── README.md           # Documentation
```

## Implementation Details

- **Backend**: Built with FastAPI. Uses `urllib3` for robust HTTP requests.
- **Frontend**: Built with Vue 3, Vite, and PrimeVue.
- **CLI**: Interactive Python script.
