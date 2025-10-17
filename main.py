import urllib3

http = urllib3.PoolManager()

def downloadfile(url,filename):
    extension = "jpg"
    print("Downloading image from URL...")
    resp = http.request("GET",url)
    image = resp.data
    d =  str(resp.headers["Content-Type"].split('/')[-1])
    if d:
        extension = d
    with open(f"downloads/{filename}.{extension}", "wb") as f:
        f.write(image)

def main():
    while True:
        if input("Enter q to quit else press enter to continue") == "q":
            break
        # print("Only jpg images supported")
        url = input("Enter the URL of the file: ")
        filename = input("Enter the filename: ")
        downloadfile(url,filename)
        print("File downloaded successfully.")

if __name__ == "__main__":
    main()
