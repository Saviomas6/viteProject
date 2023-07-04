import React, { useState, createRef, ChangeEvent } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import styled from "styled-components";

const ImageCrop = () => {
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState<any>("");
  const cropperRef = createRef<ReactCropperElement>();

  const onChange = (e: any) => {
    e.preventDefault();
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const getCropData = async () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const canvas = cropperRef.current?.cropper.getCroppedCanvas();
      canvas.toBlob((blob: any) => {
        setCropData(blob);
      });
    }
  };

  const today = new Date();
  today.setDate(today.getDate() + 7);
  const minDate = today.toISOString().slice(0, 10);

  const maxDate = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  return (
    <div>
      <input type="file" onChange={onChange} />
      {image && (
        <ImageContainer>
          <Cropper
            ref={cropperRef}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            zoomTo={0}
            initialAspectRatio={1}
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            guides={true}
          />
        </ImageContainer>
      )}

      <br />
      <button onClick={getCropData}>Crop Image</button>
      {cropData && (
        <ImageContainer>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={cropData}
            alt="cropped"
          />
        </ImageContainer>
      )}
      <label htmlFor="date">Select a date:</label>
      <input
        type="date"
        id="date-input"
        name="date-input"
        min={minDate}
        max={maxDate}
        required
      />
    </div>
  );
};

export default ImageCrop;
export const ImageContainer = styled.div`
  height: 250px;
  width: 400px;
  background-color: red;
`;
