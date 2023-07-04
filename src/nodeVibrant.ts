import { useState } from "react";
import Vibrant from "node-vibrant";

const useImageColorExtractor = () => {
  const [palette, setPalette] = useState<any>(null);

  const extractColors = (blob: Blob) => {
    return new Promise<void>((resolve, reject) => {
      const url = URL.createObjectURL(blob);
      Vibrant.from(url)
        .getPalette()
        .then((palette) => {
          setPalette(palette);
          URL.revokeObjectURL(url); // Clean up the object URL to prevent memory leaks
          resolve();
        })
        .catch((err) => reject(err));
    });
  };

  return [palette, extractColors] as const;
};

export default useImageColorExtractor;
