import blueDownArrow from "../assets/blueDownArrow.svg";
import * as Styled from "./style";
interface I_Props {
  label: string;
  value: string;
  isIcon: boolean;
}
const SongInformationCard = ({ label, value, isIcon }: I_Props) => {
  return (
    <Styled.SongInformationContainer>
      <Styled.SongInformationLabel>{label}</Styled.SongInformationLabel>
      <Styled.SongInformationIconWrapper>
        <Styled.SongInformationValue>{value}</Styled.SongInformationValue>
        {isIcon && (
          <Styled.SongInformationIcon>
            <img src={blueDownArrow} alt="icon" />
          </Styled.SongInformationIcon>
        )}
      </Styled.SongInformationIconWrapper>
    </Styled.SongInformationContainer>
  );
};

export default SongInformationCard;
