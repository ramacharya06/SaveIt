from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from backend.downloader import downloadfile

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DownloadREquest(BaseModel):
    url: str
    filename: str

@app.post("/download")
def download_endpoint(req: DownloadREquest):
    try:
        path = downloadfile(req.url, req.filename)
        return {"message": "File downloaded successfully", "path": path}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
