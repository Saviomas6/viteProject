import * as Styled from "./style";

interface I_Props {
  width?: string;
}

const ColorMusicCard = ({ width }: I_Props) => {
  return (
    <div>
      <Styled.ColorCardContainer>
        <Styled.ColorImageContainer>
          <Styled.ColorImage
            src="https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="img"
            width={width}
          />
        </Styled.ColorImageContainer>
      </Styled.ColorCardContainer>
      <Styled.ColorCardSingerName>@Taylor_Swift</Styled.ColorCardSingerName>
    </div>
  );
};

export default ColorMusicCard;
