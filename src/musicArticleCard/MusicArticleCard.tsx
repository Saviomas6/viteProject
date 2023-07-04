import * as Styled from "./style";
interface I_Props {
  width?: string;
}
const MusicArticleCard = ({ width }: I_Props) => {
  return (
    <>
      {Array.from({ length: 10 }, (x, v) => (
        <Styled.MusicArticleCardContainer key={v}>
          <Styled.MusicArticleCardImageContainer width={width}>
            <Styled.MusicArticleCardImage
              src="https://images.pexels.com/photos/2745255/pexels-photo-2745255.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="img"
            />
            <Styled.MusicArticleStatus>2 MIN READ</Styled.MusicArticleStatus>
          </Styled.MusicArticleCardImageContainer>
          <Styled.MusicArticleCardFooter>
            Spatial LABS is Building music metaverse on Polygon
          </Styled.MusicArticleCardFooter>
        </Styled.MusicArticleCardContainer>
      ))}
    </>
  );
};

export default MusicArticleCard;
