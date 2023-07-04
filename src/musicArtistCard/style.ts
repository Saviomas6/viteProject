import styled from "styled-components";
import { opacityAnimation } from "../sharedMusicStyles";
export const MusicArticleCardLayout = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  animation: ${opacityAnimation} 1.2s;
`;
export const MusicArticleCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const MusicArticleCardImageContainer = styled.div`
  height: 80px;
  width: 80px;
`;
export const MusicArticleCardImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
`;
export const MusicArticleSingerName = styled.div`
  font-weight: 600;
  font-size: 16px;
  /* font-family: ProSemiBold; */
  color: #fff;
`;
export const MusicArticleCategories = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #0552fb;
  margin-top: 6px;
  /* font-family: ProMedium; */
`;
export const NextArrowWrapper = styled.div`
  rotate: 180deg;
  cursor: pointer;
`;
