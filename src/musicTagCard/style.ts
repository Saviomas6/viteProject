import styled, { keyframes } from "styled-components";
import { opacityAnimation } from "../sharedMusicStyles";

export const TagCardLayout = styled.div`
  margin: 20px 0;
  animation: ${opacityAnimation} 1.2s;
`;

export const TagCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TagCardLogoContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 100%;
  background: linear-gradient(271.27deg, #20bf55 -80.6%, #01baef 105.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 20px;
  /* font-family: ProSemiBold; */
  border: 1px solid #2c3033;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TagCardLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  /* font-family: ProSemibold; */
  color: #fff;
`;
