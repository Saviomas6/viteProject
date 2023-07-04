import styled from "styled-components";
export const SongDetailCardLayout = styled.div`
  /* ... */
`;

export const SongDetailCardImageContainer = styled.div`
  height: 315px;
  margin: 15px 0;
  position: relative;
`;

export const SongDetailCardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const SongDetailCardMusicBadge = styled.div`
  padding: 4px 16px;
  color: #fff;
  background: #000000;
  border: 1px solid #171b1e;
  border-radius: 18px;
  font-weight: 600;
  font-size: 12px;
  /* font-family: ProSemiBold; */
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const SongDetailCardMusicIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const SongDetailCardSongName = styled.div`
  font-size: 30px;
  font-weight: 500;
  /* font-family: ProMedium; */
  color: #fff;
`;

export const SongDetailCardUserDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 12px 0;
`;

export const SongDetailCardUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SongDetailCardUserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SongDetailCardUserImageContainer = styled.div`
  height: 18px;
  width: 18px;
  margin-right: 6px;
`;
export const SongDetailCardUserImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
`;

export const SongDetailCardUserName = styled.div`
  font-weight: 500;
  font-size: 14px;
  /* font-family: ProMedium; */
  margin-right: 6px;
  color: #fff;
`;

export const SongDetailCardUserVerified = styled.div`
  display: flex;
`;

export const SongDetailCardDuration = styled.div`
  font-weight: 500;
  font-size: 14px;
  /* font-family: ProMedium; */
  color: #fff;
`;
