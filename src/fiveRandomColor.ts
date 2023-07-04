import { useState } from "react";

const useRandomColor = (colorList: string[]) => {
  const [color, setColor] = useState<string>("");

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
  };

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return [color, changeColor] as const;
};

export default useRandomColor;
