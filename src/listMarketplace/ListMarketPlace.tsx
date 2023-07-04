import SharedButton from "../sharedButton/SharedButton";
import * as Styled from "./style";
import isVerified from "../assets/isVerified.svg";
const ListMarketPlace = () => {
  return (
    <Styled.ListMarketPlaceLayout>
      <Styled.ListMarketPlaceContainer>
        <div>
          <Styled.ListMarketPlaceHeading>
            List Music Collectible Into Marketplace
          </Styled.ListMarketPlaceHeading>
          <Styled.ListMarketPlaceDescription>
            Enter price to allow users instantly purchase your collectible
          </Styled.ListMarketPlaceDescription>
          <Styled.ListMarketPlaceInputLabel>
            Enter Ask Price
          </Styled.ListMarketPlaceInputLabel>
          <Styled.ListMarketPlaceInputWrapper>
            <Styled.ListMarketPlaceInputField
              type="text"
              placeholder="Enter the price"
              autoComplete="new-password"
            />
            <Styled.InputRightLabelMainContainer>
              <Styled.InputRightLabelContainer>
                <Styled.InputRightIcon>
                  <img src={isVerified} alt="token" />
                </Styled.InputRightIcon>
                <Styled.InputRightLabel>LNQ</Styled.InputRightLabel>
              </Styled.InputRightLabelContainer>
            </Styled.InputRightLabelMainContainer>
          </Styled.ListMarketPlaceInputWrapper>
        </div>
        <Styled.ButtonWrapper>
          <SharedButton bgColor="#fff" fontColor="#000" text="Continue" />
          <SharedButton bgColor="#2C3033" fontColor="#fff" text="Cancel" />
        </Styled.ButtonWrapper>
      </Styled.ListMarketPlaceContainer>
    </Styled.ListMarketPlaceLayout>
  );
};

export default ListMarketPlace;
