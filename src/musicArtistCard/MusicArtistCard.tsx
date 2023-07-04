import * as Styled from "./style";
import backArrow from "../assets/backArrow.svg";
const MusicArtistCard = () => {
  return (
    <Styled.MusicArticleCardLayout>
      <Styled.MusicArticleCardContainer>
        <Styled.MusicArticleCardImageContainer>
          <Styled.MusicArticleCardImage
            src="https://images.pexels.com/photos/13169922/pexels-photo-13169922.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="img"
          />
        </Styled.MusicArticleCardImageContainer>
        <div>
          <Styled.MusicArticleSingerName>
            @Taylor_Swift
          </Styled.MusicArticleSingerName>
          <Styled.MusicArticleCategories>Artist</Styled.MusicArticleCategories>
        </div>
      </Styled.MusicArticleCardContainer>
      <Styled.NextArrowWrapper>
        <img src={backArrow} alt="arrow" />
      </Styled.NextArrowWrapper>
    </Styled.MusicArticleCardLayout>
  );
};

export default MusicArtistCard;
