import React, { useState } from "react";
import styled from "styled-components";
const itemData = [
  {
    id: "all",
    value: "allItem",
    label: "All Item",
  },
  {
    id: "single",
    value: "singleItem",
    label: "Single Item",
  },
  {
    id: "bundle",
    value: "bundleItem",
    label: "Bundle Item",
  },
];
const RadioButton = () => {
  const [isRadioButtonSelected, setRadioButtonSelected] = useState("allItem");
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRadioButtonSelected(value);
  };
  console.log("isRadioButtonSelected", isRadioButtonSelected);

  return (
    <>
      {itemData.map((val) => (
        <RadioButtonLabelContainer key={val?.id} htmlFor={val?.id}>
          <RadioButtonLabelText>{val?.label}</RadioButtonLabelText>
          <div>
            <RadioButtonInputField
              type="radio"
              name="location"
              id={val?.id}
              value={val?.value}
              checked={isRadioButtonSelected === val?.value}
              onChange={(event) => handleSelectChange(event)}
            />
            <RadioBox></RadioBox>
          </div>
        </RadioButtonLabelContainer>
      ))}
    </>
  );
};

export default RadioButton;
export const RadioButtonLabelContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: blueviolet;
  margin: 10px 0;
  padding: 5px 0;
  cursor: pointer;
`;

export const RadioButtonLabelText = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export const RadioBox = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid #808080;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1px;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: #3ab712;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
    transition: all linear 0.2s;
  }
`;

export const RadioButtonInputField = styled.input`
  display: none;
  &:checked + ${RadioBox} {
    &::after {
      transform: scale(1);
      transition: all linear 0.2s;
    }
  }
`;
