import SharedButton from "../sharedButton/SharedButton";
import * as Styled from "./style";
import Lottie from "react-lottie";
import success from "../assets/success.json";

const SuccessTransaction = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Styled.SuccessTransactionLayout>
      <Styled.SuccessTransactionContainer>
        <div>
          <Styled.SuccessTransactionImageContainer>
            <Styled.SuccessTransactionImage>
              <Lottie options={defaultOptions} height={144} width={144} />
            </Styled.SuccessTransactionImage>
          </Styled.SuccessTransactionImageContainer>
          <Styled.SuccessTransactionHeading>
            Transaction success
          </Styled.SuccessTransactionHeading>
          <Styled.SuccessTransactionDescription>
            Collectible has been credit into wallet for 96.32 LNQ | 14/03/2022
          </Styled.SuccessTransactionDescription>
        </div>
      </Styled.SuccessTransactionContainer>
      <Styled.SuccessTransactionButtonWrapper>
        <SharedButton bgColor="#fff" fontColor="#000" text="Done" />
      </Styled.SuccessTransactionButtonWrapper>
    </Styled.SuccessTransactionLayout>
  );
};

export default SuccessTransaction;
