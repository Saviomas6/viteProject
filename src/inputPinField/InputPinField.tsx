import { InputPinFieldContainer, PinInput } from "./style";

const InputPinField = () => {
  return (
    <InputPinFieldContainer>
      <PinInput type="text" />
      <PinInput type="text" />
      <PinInput type="text" />
      <PinInput type="text" />
    </InputPinFieldContainer>
  );
};

export default InputPinField;
