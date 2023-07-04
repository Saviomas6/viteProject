import SharedButton from "../sharedButton/SharedButton";
import * as Styled from "./style";
import smallBackArrow from "../assets/smallBackArrow.svg";
const ConfirmTransaction = () => {
  return (
    <Styled.ConfirmTransactionLayout>
      <Styled.ConfirmTransactionContainer>
        <div>
          <Styled.ConfirmTransactionImageContainer>
            <Styled.ConfirmTransactionImage
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjA0NzZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNjc3NDkyNDA1&ixlib=rb-4.0.3&q=80&w=1080"
              alt="img"
            />
            <Styled.ConfirmTransactionBackIconWrapper>
              <img
                src={smallBackArrow}
                alt="back"
                style={{ margin: "0 2px 0 0" }}
              />
            </Styled.ConfirmTransactionBackIconWrapper>
          </Styled.ConfirmTransactionImageContainer>
          <Styled.ConfirmTransactionWrapper>
            <Styled.ConfirmTransactionHeading>
              Confirm Transaction
            </Styled.ConfirmTransactionHeading>
            <Styled.ConfirmTransactionDescription>
              You are about to list this music into marketplace
            </Styled.ConfirmTransactionDescription>
            <Styled.ConfirmTransactionPriceWrapper>
              <Styled.ConfirmTransactionPrice>
                Gas Fee
              </Styled.ConfirmTransactionPrice>
              <Styled.ConfirmTransactionPrice>
                0.0007 LNQ
              </Styled.ConfirmTransactionPrice>
            </Styled.ConfirmTransactionPriceWrapper>
            <Styled.ConfirmTransactionPriceWrapper>
              <Styled.ConfirmTransactionPrice>
                Transaction Fee
              </Styled.ConfirmTransactionPrice>
              <Styled.ConfirmTransactionPrice>
                0.0007 LNQ
              </Styled.ConfirmTransactionPrice>
            </Styled.ConfirmTransactionPriceWrapper>

            <Styled.HorizontalRow />
            <Styled.ConfirmTransactionPriceWrapper>
              <Styled.ConfirmTransactionPrice>
                You will pay
              </Styled.ConfirmTransactionPrice>
              <Styled.ConfirmTransactionPrice>
                0.0007 LNQ
              </Styled.ConfirmTransactionPrice>
            </Styled.ConfirmTransactionPriceWrapper>
          </Styled.ConfirmTransactionWrapper>
        </div>
        <Styled.ConfirmTransactionButtonWrapper>
          <SharedButton bgColor="#2C3033" fontColor="#fff" text="Reject" />
          <SharedButton bgColor="#fff" fontColor="#000" text="Confirm" />
        </Styled.ConfirmTransactionButtonWrapper>
      </Styled.ConfirmTransactionContainer>
    </Styled.ConfirmTransactionLayout>
  );
};

export default ConfirmTransaction;
