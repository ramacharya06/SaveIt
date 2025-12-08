import urllib3
import os

http = urllib3.PoolManager()

def downloadfile(url,filename):
    extension = ""
    download_dirpath = os.path.join(os.path.expanduser("~"), "Downloads")
    resp = http.request("GET",url)

    if resp.status != 200:
        raise Exception("Failed to download file. Status: {resp.status}")

    file = resp.data
    d =  str(resp.headers["Content-Type"].split('/')[-1])
    if d:
        extension = d.split()[0]
    with open(f"{download_dirpath}/{filename}.{extension}", "wb") as f:
        f.write(file)
    return f"{download_dirpath}/{filename}.{extension}"

if __name__ == "__main__":
    url = input("Enter the URL of the file: ")
    filename = input("Enter the filename: ")
    downloadfile(url,filename)
    print("File downloaded successfully.")
