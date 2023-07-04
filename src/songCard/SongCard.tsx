import { useState } from "react";
import * as Styled from "./style";
import threeDot from "../assets/threeDot.svg";
import MusicThreeDotModal from "../musicThreeDotModal/MusicThreeDotModal";

interface I_Props {
  isSerialNumber?: boolean;
}

const SongCard = ({ isSerialNumber }: I_Props) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <Styled.SongCardLayout>
      <Styled.SongCardContainer>
        {isSerialNumber && <Styled.SongCardSerialNo>1</Styled.SongCardSerialNo>}
        <Styled.SongCardImageContainer>
          <Styled.SongCardImage
            src="https://images.pexels.com/photos/15190791/pexels-photo-15190791.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="img"
          />
        </Styled.SongCardImageContainer>
        <div>
          <Styled.SongName>
            Calm Down <span>Bought</span>
          </Styled.SongName>
          <Styled.UserName>@Rema</Styled.UserName>
        </div>
      </Styled.SongCardContainer>
      <Styled.ThreeDotIconWrapper onClick={() => setModalOpen(!isModalOpen)}>
        <img src={threeDot} alt="dot" />
      </Styled.ThreeDotIconWrapper>
      {isModalOpen && <MusicThreeDotModal setModalOpen={setModalOpen} />}
    </Styled.SongCardLayout>
  );
};

export default SongCard;
