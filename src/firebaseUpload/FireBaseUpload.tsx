import { ChangeEvent, useState } from "react";
import { storage } from "./firebase";
import styled from "styled-components";

const FireBaseUpload = () => {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [downloadUrl, setDownloadUrl] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      const uploadTask = fileRef.put(file);

      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setDownloadUrl(url);
          });
        }
      );
    }
  };

  return (
    <Container>
      <div>
        <input type="file" onChange={handleFileChange} />
        {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
        {downloadUrl && (
          <div>
            <p>File uploaded successfully. Download link:</p>
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              {downloadUrl}
            </a>
          </div>
        )}
      </div>
    </Container>
  );
};

export default FireBaseUpload;
const Container = styled.div`
  background-color: white;
  height: 100vh;
  display: grid;
  place-items: center;
`;
