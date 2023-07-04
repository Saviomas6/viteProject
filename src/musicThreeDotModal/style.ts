import styled from "styled-components";
export const MusicThreeDotModalLayout = styled.div<any>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;
export const MusicThreeDotModalContainer = styled.div`
  width: 100%;
  background: #171b1e;
  padding: 0 24px;
`;

export const MusicThreeDotModalIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  cursor: pointer;
`;

export const MusicThreeDotModalIcon = styled.div`
  display: flex;
`;
export const MusicThreeDotModalText = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  /* font-family: ProMedium; */
`;
