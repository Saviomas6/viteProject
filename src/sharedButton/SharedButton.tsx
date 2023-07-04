import { Button } from "./style";
interface I_Props {
  fontColor: string;
  bgColor: string;
  onClick?: any;
  text: string;
}
const SharedButton = ({ fontColor, bgColor, onClick, text }: I_Props) => {
  return (
    <Button fontColor={fontColor} bgColor={bgColor} onClick={onClick}>
      {text}
    </Button>
  );
};

export default SharedButton;
