import styled, { keyframes } from "styled-components";
export const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const HorizontalCardContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MusicMobileScreenContainer = styled.div`
  @media (min-width: 480px) {
    display: none;
  }
`;
export const MusicDesktopScreenContainer = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 480px) {
    display: block;
  }
`;

export const MobileExploreAllGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 30px;
  padding: 40px 0;
  animation: ${opacityAnimation} 1.2s;
`;
export const MainContainer = styled.div<any>`
  padding: 64px;
  position: relative;
  @media (max-width: 480px) {
    padding: 0 24px;
  }
`;
