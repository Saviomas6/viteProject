import styled from "styled-components";
import { opacityAnimation } from "../sharedMusicStyles";
export const ArtistProfileLayout = styled.div<any>`
  background: ${({ colorValue }) =>
    colorValue
      ? `linear-gradient(180deg, ${colorValue} 7.66%, #000000 58.91%)`
      : `linear-gradient(180deg, #01BAEF 7.66%, #000000 58.91%)`};
  padding: 36px 24px;
  animation: ${opacityAnimation} 1.2s;
`;

export const ArtistProfileContainer = styled.div``;

export const ArtistProfileBackIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ArtistProfileBackIcon = styled.div`
  display: flex;
`;

export const ArtistProfileThreeDot = styled.div`
  display: flex;
`;

export const ArtistProfileImageMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
`;

export const ArtistProfileImageContainer = styled.div`
  width: 156px;
  height: 156px;
`;

export const ArtistProfileImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
`;

export const ArtistName = styled.div`
  font-weight: 500;
  font-size: 30px;
  color: #fff;
  /* font-family: ProMedium; */
  margin-bottom: 8px;
`;

export const ArtistPlayButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ArtistMusicCount = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #fff;
  /* font-family: ProRegular; */
  margin-bottom: 12px;
`;
export const ArtistViewMoreButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ArtistViewMoreButton = styled.button`
  height: 28px;
  padding: 0 16px;
  box-sizing: border-box;
  border: 1px solid #c0c0c0;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  outline: none;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const ArtistOptionMenu = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 100%;
  border: 1px solid #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ArtistProfileReleaseWrapper = styled.div`
  margin: 36px 0;
`;

export const ArtistProfilePlayListWrapper = styled.div`
  /* ... */
`;

export const ArtistProfilePlayListHeading = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  /* font-family: ProBold; */
  margin-bottom: 20px;
`;

export const ArtistProfileAboutWrapper = styled.div`
  /* ... */
`;

export const ArtistProfileFollowersCount = styled.div`
  font-weight: 600;
  font-size: 30px;
  color: #fff;
  /* font-family: ProSemiBold; */
`;
export const ArtistSocialMediaIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 14px 0;
`;
export const ArtistSocialMediaIcon = styled.div`
  display: flex;
`;
export const ArtistSocialMediaName = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  /* font-family: ProRegular; */
`;
