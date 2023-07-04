import React, { useState } from "react";
const UploadFile = () => {
  const [selectedImage, setSelectedImage] = useState<any>("");
  console.log(typeof selectedImage);

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
          <img alt="not fount" width={"250px"} src={selectedImage} />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event: React.ChangeEvent) => {
          const target = event.target as HTMLInputElement;
          const file: File = (target.files as FileList)[0];
          setSelectedImage(URL.createObjectURL(file));
        }}
      />
    </div>
  );
};

export default UploadFile;
