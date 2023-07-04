import styled from "styled-components";
export const SongActivityLayout = styled.div`
  padding: 36px 24px;
`;

export const BackArrowWrapper = styled.div`
  position: absolute;
  top: 39px;
  left: 24x;
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  /* font-family: ProMedium; */
  text-align: center;
`;

export const SongActivityUserDetailContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  align-items: center;
  margin: 35px 0 12px 0;
`;
export const SongActivityUserImageContainer = styled.div`
  width: 86px;
  height: 90px;
`;
export const SongActivityUserImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const SongDetailWrapper = styled.div`
  /* ... */
`;

export const SongName = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  /* font-family: ProBold; */
`;

export const UserNameVerifiedWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

export const UserName = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: #fff;
  /* font-family: ProMedium; */
`;

export const Verified = styled.div`
  display: flex;
`;

export const SongTotalSupplyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const SongTotalSupply = styled.div`
  font-weight: 500;
  font-size: 8px;
  color: #fff;
  /* font-family: ProMedium; */
`;
export const SongTotalValue = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: #fff;
  /* font-family: ProMedium; */
`;
export const HorizontalRow = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
export const SongActivityTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  /* font-family: ProBold; */
  margin-top: 20px;
`;
export const SongActivityDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 6px;
`;
export const SongActivityDescription = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: #fff;
  span {
    background: linear-gradient(271.27deg, #20bf55 -80.6%, #01baef 105.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SongActivityDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 20px 0;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProfileImageContainer = styled.div`
  height: 50px;
  width: 50px;
`;
export const ProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 100%;
  border: 1px solid #2c3033;
`;

export const UserNameVerifiedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const ProfileUserName = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  /* font-family: ProMedium; */
`;
export const VerifiedIcon = styled.div`
  display: flex;
`;

export const SongTime = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: #fff;
  margin-top: 5px;
  /* font-family: ProMedium; */
`;
export const SongActivityCount = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  /* font-family: ProMedium; */
`;
