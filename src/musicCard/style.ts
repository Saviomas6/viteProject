import styled from "styled-components";

export const MusicCardContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const MusicCardImageContainer = styled.div<any>`
  height: 245px;
  @media (max-width: 480px) {
    height: 140px;
    width: ${(props) => props.width || "100%"};
  }
`;
export const MusicCardImage = styled.img`
  border-radius: 3px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const MusicCardAlbumName = styled.div`
  /* font-family: ProSemiBold; */
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  margin-top: 8px;
`;
export const MusicCardCreatorName = styled.div`
  /* font-family: ProRegular; */
  font-weight: 400;
  font-size: 12px;
  color: #c0c0c0;
  margin-top: 6px;
`;

export const MusicCardTopBar = styled.div`
  height: 48px;
  width: 100%;
  background: #ffffff;
  border-radius: 3px 3px 0px 0px;
  position: absolute;
  top: 0;
  left: 0;
`;
export const MusicCardTopBarText = styled.div<any>`
  font-size: ${(props) => props.fontSize};
  color: #171b1e;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
`;
