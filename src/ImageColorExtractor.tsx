import { useState, useEffect } from "react";
import ColorThief from "colorthief";
import { ColorExtractor } from "react-color-extractor";
import useImageColorExtractor from "./nodeVibrant";
import useRandomColor from "./fiveRandomColor";
const ImageColorExtractor = () => {
  const colors = ["#8BACAA", "#617A55", "#146C94", "#F6BA6F", "#F15A59"];
  const [colorValue, changeColor] = useRandomColor(colors);

  useEffect(() => {
    changeColor();
  }, []);
  const [imageUrl, setImageUrl] = useState("");
  const [color, setColor] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [color1, setColor1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [palette, extractColors] = useImageColorExtractor();
  function rgbToHex(r: number, g: number, b: number) {
    const componentToHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const colorThief = new ColorThief();
      const dominantColor = colorThief.getColor(img);
      const hexColor = rgbToHex(
        dominantColor[0],
        dominantColor[1],
        dominantColor[2]
      );
      setColor(hexColor);
    };
  };

  const handleImageLoad = (colors: any) => {
    if (colors && colors.length > 0) {
      const hexColor = colors[0];
      setColor1(hexColor);
    }
  };

  const handleFileInputChange1 = (event: any) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImageUrl1(url);
  };

  //node vibrant

  const handleFileInputChange2 = (event: any) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImageUrl2(url);
    extractColors(file);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <input type="file" onChange={handleFileInputChange} />
        <div>
          {imageUrl && (
            <img src={imageUrl} style={{ height: "300px", width: "300px" }} />
          )}
        </div>

        {color && (
          <div
            style={{ backgroundColor: color, height: "300px", width: "300px" }}
          >
            Dominant Color
          </div>
        )}
      </div>
      <div>
        <input type="file" onChange={handleFileInputChange1} />
        <div>
          {imageUrl1 && (
            <ColorExtractor src={imageUrl1} getColors={handleImageLoad}>
              <img
                src={imageUrl1}
                style={{ height: "300px", width: "300px" }}
              />
            </ColorExtractor>
          )}
        </div>

        {color1 && (
          <div
            style={{ backgroundColor: color1, height: "300px", width: "300px" }}
          >
            Dominant Color
          </div>
        )}
      </div>
      <div>
        <div>
          <input type="file" onChange={handleFileInputChange2} />
          {imageUrl2 && (
            <img src={imageUrl2} style={{ height: "300px", width: "300px" }} />
          )}
          {palette && (
            <div>
              {Object.entries(palette).map(([name, color]: any) => (
                <div key={name} style={{ backgroundColor: color?.hex }}>
                  {name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <div
        style={{
          backgroundColor: colorValue,
          width: "100vw",
          height: "100vh",
        }}
        onClick={changeColor}
      >
        Change
      </div> */}
    </div>
  );
};
export default ImageColorExtractor;
