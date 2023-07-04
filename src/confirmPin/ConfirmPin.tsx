import SharedButton from "../sharedButton/SharedButton";
import * as Styled from "./style";
import smallBackArrow from "../assets/smallBackArrow.svg";
import InputPinField from "../inputPinField/InputPinField";
const ConfirmPin = () => {
  return (
    <Styled.ConfirmPinLayout>
      <div>
        <Styled.ConfirmPinHeading>
          Confirm Your 4-digit Pin
        </Styled.ConfirmPinHeading>
        <Styled.ConfirmPinDescription>
          You'll need to enter you 4 digit Pin to initiate this action
        </Styled.ConfirmPinDescription>
        <Styled.ConfirmPinInputWrapper>
          <InputPinField />
        </Styled.ConfirmPinInputWrapper>
        <Styled.ConfirmPinBackIconWrapper>
          <img src={smallBackArrow} alt="back" />
        </Styled.ConfirmPinBackIconWrapper>
      </div>
      <Styled.ConfirmPinButtonWrapper>
        <SharedButton bgColor="#fff" fontColor="#000" text="Verify" />
        <SharedButton
          bgColor="transparent"
          fontColor="#0552FB"
          text="Forgot Pin Code?"
        />
      </Styled.ConfirmPinButtonWrapper>
    </Styled.ConfirmPinLayout>
  );
};

export default ConfirmPin;
