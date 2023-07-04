import styled from "styled-components";
export const MusicCardBadgeContainer = styled.div`
  width: max-content;
  padding: 4px 10px;
  display: flex;
  gap: 6px;
  background-color: ${({ color }) => color};
  border-radius: 50px;
`;
export const MusicCardBadgeIcon = styled.div`
  display: flex;
`;
export const MusicCardBadgeText = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  /* font-family: ProMedium; */
`;
