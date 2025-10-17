# Image Downloader

A simple yet versatile Python utility that allows you to download images and other files from the internet. The program automatically detects the file type from the Content-Type header and saves it with the appropriate extension.

## Features

- Downloads files from any URL
- Automatically detects file type from Content-Type header
- Saves files with correct extensions
- Interactive command-line interface
- Supports various file formats (jpg, jpeg, png, webp, svg, etc.)

## How to Use

1. Run the program:
   ```bash
   python main.py
   uv init .
   uv run main.py
   ```

2. When prompted:
   - Enter the URL of the file you want to download
   - Enter the desired filename (without extension)
   - Press Enter to download another file or 'q' to quit

## Requirements

- Python 3.x
- urllib3 library

## Project Structure

```
image-downloader/
├── main.py              # Main program file
├── downloads/           # Directory where downloaded files are saved
└── README.md           # This documentation file
```

## Implementation Details

The project uses the `urllib3` library to handle HTTP requests and automatically detects file types using the Content-Type header from the server response. This ensures that files are saved with their correct extensions, making the tool versatile for downloading various types of files.

## Special Thanks

This project was inspired by a problem statement from Daily Python Projects (dailypythonprojects@substack.com). Their daily Python project challenges provide excellent opportunities for learning and practicing Python programming.
