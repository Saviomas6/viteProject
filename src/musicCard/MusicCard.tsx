import MusicCardBadge from "../musicCardBadge/MusicCardBadge";
import * as Styled from "./style";
import threeTimeReject from "../assets/musicCardBadge/threeTimeReject.svg";
interface I_Props {
  topBar: boolean;
  topBarHeading?: string;
  albumName?: string;
  creatorName?: string;
  image: string;
  width?: string;
  isBadge?: boolean;
}
const MusicCard = ({
  topBar,
  topBarHeading,
  albumName,
  creatorName,
  image,
  width,
  isBadge,
}: I_Props) => {
  return (
    <>
      {Array.from({ length: 10 }, (x, v) => (
        <Styled.MusicCardContainer key={v}>
          <Styled.MusicCardImageContainer width={width}>
            <Styled.MusicCardImage src={image} alt="img" />
          </Styled.MusicCardImageContainer>
          <Styled.MusicCardAlbumName>{albumName}</Styled.MusicCardAlbumName>
          <Styled.MusicCardCreatorName>
            {creatorName}
          </Styled.MusicCardCreatorName>
          {isBadge && (
            <MusicCardBadge
              icon={threeTimeReject}
              text="Rejected"
              color="#D23232"
            />
          )}
          {topBar && (
            <Styled.MusicCardTopBar>
              <Styled.MusicCardTopBarText fontSize="10px">
                THIS IS
              </Styled.MusicCardTopBarText>
              <Styled.MusicCardTopBarText fontSize="12px">
                {topBarHeading}
              </Styled.MusicCardTopBarText>
            </Styled.MusicCardTopBar>
          )}
        </Styled.MusicCardContainer>
      ))}
    </>
  );
};

export default MusicCard;
