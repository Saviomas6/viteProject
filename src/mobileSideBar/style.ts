import styled from "styled-components";
export const MobileSideBarLayout = styled.div<any>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #000;
  right: ${({ isSideBarOpen }) => (isSideBarOpen ? "0" : "-100%")};
  padding: 36px 24px;
  box-sizing: border-box;
  transition: 420ms;
`;

export const MobileSideBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

export const MobileSideBarIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MobileSideBarIcon = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
`;

export const MobileSideBarLabel = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  /* font-family: ProMedium; */
`;

export const MobileSideBarCount = styled.div`
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  box-sizing: border-box;
  background: #171b1e;
  border: 1px solid #2c3033;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  /* font-family: ProSemiBold; */
`;
export const MobileSideBarNextArrow = styled.div`
  display: flex;
  rotate: 180deg;
`;

export const MobileSideBarHeadingWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`;
export const MobileSideBarHeading = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  /* font-family: ProSemiBold; */
  text-align: center;
`;
export const MobileSideBarBackArrow = styled.div`
  position: absolute;
  top: 4px;
  left: 5px;
  cursor: pointer;
`;
