import styled from "styled-components";

export const PlayListOptionLayout = styled.div<any>`
  padding: 36px 24px;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: ${({ isPlayListOptionOpen }) =>
    isPlayListOptionOpen ? "0" : "-100%"};
  background-color: #000;
  box-sizing: border-box;
  transition: 420ms;
`;

export const PlayListOptionContainer = styled.div`
  margin-top: 40px;
`;
export const PlayListOptionBackArrow = styled.div`
  rotate: -90deg;
  position: absolute;
  top: 36px;
`;
export const PlayListOptionHeading = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  /* font-family: ProRegular; */
`;
export const Username = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #c0c0c0;
  /* font-family: ProRegular; */
  margin-top: 8px;
`;
export const PlayListOptionListContainer = styled.div`
  margin: 40px 0;
`;
export const PlayListOptionListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 24px 0;
`;
export const PlayListOptionListIcon = styled.div`
  display: flex;
`;
export const PlayListOptionListText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
`;
