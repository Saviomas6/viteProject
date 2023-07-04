import { CheckBoxContainer, MainContainer } from "./style";
import { useState } from "react";
const CheckBox = () => {
  const [isChecked, setChecked] = useState<boolean>(false);
  return (
    <MainContainer>
      <CheckBoxContainer>
        <input
          id="accept"
          type="checkbox"
          checked={isChecked}
          onChange={() => setChecked(!isChecked)}
        />
        <label htmlFor="accept"></label>
      </CheckBoxContainer>
    </MainContainer>
  );
};

export default CheckBox;
