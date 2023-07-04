import styled from "styled-components";

export const MusicLibraryLayout = styled.div`
  padding: 36px 24px;
`;

export const MusicLibraryContainer = styled.div`
  /* ... */
`;
export const MusicLibraryHeaderContainer = styled.div`
  /* ... */
`;
export const MusicLibraryHeading = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  /* font-family: ProBold; */
  text-align: center;
`;
export const MusicLibraryNavTabs = styled.div`
  margin: 25px 0;
`;
export const MusicLibraryNavTab = styled.div<any>`
  height: 36px;
  background-color: transparent;
  border: ${({ isTabSelected }) =>
    isTabSelected ? "1px solid #fff" : "1px solid #2C3033"};
  border-radius: 90px;
  padding: 0 16px;
  font-weight: 500;
  font-size: 14px;
  /* font-family: ProMedium; */
  color: ${({ isTabSelected }) => (isTabSelected ? "#fff" : "#C0C0C0")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MusicLibraryFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const MusicLibraryFilterIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const MusicLibraryFilterIcon = styled.div`
  display: flex;
`;

export const MusicLibraryFilter = styled.div<any>`
  font-weight: 500;
  font-size: 14px;
  /* font-family: ProMedium; */
  color: ${({ fontColor }) => fontColor};
  cursor: pointer;
`;
export const PlayListFilterWrapper = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 10;
  width: 100%;
`;
