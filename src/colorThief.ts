import { useState, useEffect } from "react";
import ColorThief from "colorthief";

const useImageColorExtractor = (imageUrlData: string) => {
  const [color, setColor] = useState<any>("");
  const getColor = (image: any) => {
    const colorThief = new ColorThief();
    const dominantColor = colorThief.getColor(image);
    const colorData = dominantColor
      .map((x: any) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");
    setColor("#" + colorData);
  };
  useEffect(() => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = imageUrlData;

    image.addEventListener("load", () => getColor(image));

    return () => {
      image.removeEventListener("load", () => getColor(image));
    };
  }, [imageUrlData]);

  return color;
};

export default useImageColorExtractor;
