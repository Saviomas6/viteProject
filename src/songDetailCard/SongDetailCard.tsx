import * as Styled from "./style";
import blueDownArrow from "../assets/blueDownArrow.svg";
import PlayPauseButton from "../playPauseButton/PlayPauseButton";
const SongDetailCard = () => {
  return (
    <Styled.SongDetailCardLayout>
      <Styled.SongDetailCardImageContainer>
        <Styled.SongDetailCardImage
          src="https://images.pexels.com/photos/13577670/pexels-photo-13577670.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="img"
        />
        <Styled.SongDetailCardMusicBadge>Music</Styled.SongDetailCardMusicBadge>
        <Styled.SongDetailCardMusicIcon>EQ</Styled.SongDetailCardMusicIcon>
      </Styled.SongDetailCardImageContainer>
      <Styled.SongDetailCardSongName>
        Tjärnheden Soul
      </Styled.SongDetailCardSongName>
      <Styled.SongDetailCardUserDetailsWrapper>
        <Styled.SongDetailCardUserDetails>
          <Styled.SongDetailCardUserWrapper>
            <Styled.SongDetailCardUserImageContainer>
              <Styled.SongDetailCardUserImage
                src="https://images.pexels.com/photos/15301277/pexels-photo-15301277.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt="img"
              />
            </Styled.SongDetailCardUserImageContainer>
            <Styled.SongDetailCardUserName>Savio</Styled.SongDetailCardUserName>
            <Styled.SongDetailCardUserVerified>
              <img src={blueDownArrow} alt="img" />
            </Styled.SongDetailCardUserVerified>
          </Styled.SongDetailCardUserWrapper>
          <Styled.SongDetailCardDuration>
            2023 . 1:40
          </Styled.SongDetailCardDuration>
        </Styled.SongDetailCardUserDetails>
        <PlayPauseButton />
      </Styled.SongDetailCardUserDetailsWrapper>
    </Styled.SongDetailCardLayout>
  );
};

export default SongDetailCard;
