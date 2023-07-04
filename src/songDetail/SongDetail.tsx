import styled from "styled-components";
import SharedButton from "../sharedButton/SharedButton";
import SongDetailCard from "../songDetailCard/SongDetailCard";
import SongInformationCard from "../songInformationCard/SongInformationCard";
import * as Styled from "./style";

const SongDetail = () => {
  return (
    <MobileScreenMainContainer>
      <SongDetailCard />
      <Styled.SongInformationLayout>
        <SongInformationCard
          isIcon={false}
          label="Total Supply"
          value="10,000"
        />
        <SongInformationCard isIcon={false} label="Price" value="10.546 LNQ" />
        <SongInformationCard isIcon={true} label="Price" value="5%" />
      </Styled.SongInformationLayout>
      <Styled.HorizontalRow />
      <Styled.PriceWrapper>
        <Styled.PriceLabel>Ask Styled.Price</Styled.PriceLabel>
        <Styled.Price>1.2 LNQ</Styled.Price>
      </Styled.PriceWrapper>
      <Styled.ButtonWrapper>
        <SharedButton
          bgColor="#fff"
          fontColor="#000"
          text="Purchase Ownership"
        />
        <SharedButton
          bgColor="transparent"
          fontColor="#fff"
          text="View Song Activity"
        />
      </Styled.ButtonWrapper>
    </MobileScreenMainContainer>
  );
};

export default SongDetail;
const MobileScreenMainContainer = styled.div`
  padding: 0 24px;
  position: relative;
  height: 100%;
  overflow: auto;
  background: linear-gradient(180deg, #485563 7.5%, #000000 55.44%);
`;
