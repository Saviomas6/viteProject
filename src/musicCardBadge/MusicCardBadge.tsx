import React from "react";
import {
  MusicCardBadgeContainer,
  MusicCardBadgeIcon,
  MusicCardBadgeText,
} from "./style";

interface I_Props {
  text: string;
  icon: any;
  color: string;
}

const MusicCardBadge = ({ text, icon, color }: I_Props) => {
  return (
    <MusicCardBadgeContainer color={color}>
      <MusicCardBadgeIcon>
        <img src={icon} alt="badge" />
      </MusicCardBadgeIcon>
      <MusicCardBadgeText>{text}</MusicCardBadgeText>
    </MusicCardBadgeContainer>
  );
};

export default MusicCardBadge;
