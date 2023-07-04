import { SongDetailCardPlayPauseButton } from "./style";
import playIcon from "../assets/playIcon.svg";
import pauseIcon from "../assets/pauseIcon.svg";
import { useState } from "react";

const PlayPauseButton = () => {
  const [isPlaying, setPlaying] = useState<boolean>(false);
  return (
    <SongDetailCardPlayPauseButton
      isPlaying={isPlaying}
      onClick={() => setPlaying(!isPlaying)}
    >
      {isPlaying ? (
        <img src={playIcon} alt="play" />
      ) : (
        <img src={pauseIcon} alt="pause" style={{ marginLeft: "2px" }} />
      )}
    </SongDetailCardPlayPauseButton>
  );
};

export default PlayPauseButton;
