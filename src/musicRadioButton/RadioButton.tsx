import { useState } from "react";
import { Input, Label, Wrapper } from "./style";

const RadioButton = () => {
  const [isChecked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!isChecked);
  };

  return (
    <Wrapper>
      <Input
        id="content"
        type="checkbox"
        checked={isChecked}
        onChange={handleChecked}
      />
      <Label htmlFor="content" />
    </Wrapper>
  );
};

export default RadioButton;
