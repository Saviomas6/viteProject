import styled from "styled-components";
export const SongDetailCardPlayPauseButton = styled.div<any>`
  height: 42px;
  width: 42px;
  background: ${({ isPlaying }) =>
    isPlaying
      ? "#fff"
      : "linear-gradient(271.27deg, #20bf55 -80.6%, #01baef 105.68%)"};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
