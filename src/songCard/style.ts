import styled from "styled-components";
import { opacityAnimation } from "../sharedMusicStyles";
export const SongCardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  grid-gap: 12px;
  margin: 20px 0;
  animation: ${opacityAnimation} 1.2s;
`;

export const SongCardSerialNo = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  /* font-family: ProMedium; */
`;
export const SongCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SongCardImageContainer = styled.div`
  width: 51px;
  height: 51px;
`;
export const SongCardImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 2px;
  object-fit: cover;
`;
export const SongName = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  /* font-family: ProMedium; */
  span {
    display: inline-block;
    background: linear-gradient(271.27deg, #20bf55 -80.6%, #01baef 105.68%);
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    padding: 2px 6px;
    font-weight: 600;
    font-size: 8px;
    color: #fff;
    margin-left: 12px;
    /* font-family: ProSemiBold; */
  }
`;
export const UserName = styled.div`
  font-weight: 400;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.9);
  /* font-family: ProRegular; */
`;
export const ThreeDotIconWrapper = styled.div`
  cursor: pointer;
`;
