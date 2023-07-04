import * as Styled from "./style";
import buyMusic from "../assets/threeDotModal/buyMusic.svg";
import previewMusic from "../assets/threeDotModal/previewMusic.svg";
import seeActivity from "../assets/threeDotModal/seeActivity.svg";
interface I_Props {
  setModalOpen(value: boolean): void;
}
const MusicThreeDotModal = ({ setModalOpen }: I_Props) => {
  const handleOutSideClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setModalOpen(false);
    }
  };
  return (
    <Styled.MusicThreeDotModalLayout onMouseDown={handleOutSideClick}>
      <Styled.MusicThreeDotModalContainer>
        <Styled.MusicThreeDotModalIconWrapper>
          <Styled.MusicThreeDotModalIcon>
            <img src={previewMusic} alt="icon" />
          </Styled.MusicThreeDotModalIcon>
          <Styled.MusicThreeDotModalText>
            Preview Music
          </Styled.MusicThreeDotModalText>
        </Styled.MusicThreeDotModalIconWrapper>
        <Styled.MusicThreeDotModalIconWrapper>
          <Styled.MusicThreeDotModalIcon>
            <img src={buyMusic} alt="icon" />
          </Styled.MusicThreeDotModalIcon>
          <Styled.MusicThreeDotModalText>
            Buy Music ~1.2 LNQ
          </Styled.MusicThreeDotModalText>
        </Styled.MusicThreeDotModalIconWrapper>
        <Styled.MusicThreeDotModalIconWrapper>
          <Styled.MusicThreeDotModalIcon>
            <img src={seeActivity} alt="icon" />
          </Styled.MusicThreeDotModalIcon>
          <Styled.MusicThreeDotModalText>
            See Activity
          </Styled.MusicThreeDotModalText>
        </Styled.MusicThreeDotModalIconWrapper>
      </Styled.MusicThreeDotModalContainer>
    </Styled.MusicThreeDotModalLayout>
  );
};

export default MusicThreeDotModal;
