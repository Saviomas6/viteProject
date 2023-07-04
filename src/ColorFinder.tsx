import { useRef } from "react";
import { ColorExtractor } from "react-color-extractor";
import useImageColorExtractor from "./colorThief";
const ColorFinder = () => {
  const colorExtractorRef = useRef();
  const handleColors = (colors: any) => {
    console.log("react-color-extractor", colors);
  };
  const color = useImageColorExtractor(
    "https://storage.uat.thewearableinternet.com/image/png/2023/04/27/image.png-ce19cd58-1786-4be0-a573-2775c9f798be.png"
  );
  console.log(color, "colorThief");

  return (
    <div>
      {/* <ColorExtractor
        src="https://storage.uat.thewearableinternet.com/PRODUCT/2023/04/06/Perspective__h_graphite_.png-3e3d6151-b816-436d-9b21-12063c3dc1b9.png"
        getColors={handleColors}
        ref={colorExtractorRef}
        fetchOption={{
          header: {
            referer: "https://storage.uat.thewearableinternet.com",
          },
        }}
      /> */}
    </div>
  );
};

export default ColorFinder;
