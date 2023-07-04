import { memo } from "react";
interface I_Name {
  name: string;
}
const Count = ({ name }: I_Name) => {
  console.log("Hello Count inside changed");
  return <div>{name}</div>;
};

export default memo(Count);
