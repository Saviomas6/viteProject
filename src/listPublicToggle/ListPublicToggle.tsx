import * as Styled from "./style";
import listPublic from "../assets/listPublic.svg";
import RadioButton from "../musicRadioButton/RadioButton";
const ListPublicToggle = () => {
  return (
    <Styled.ListPublicToggleContainer>
      <Styled.ListPublicToggleIcon>
        <img src={listPublic} alt="listPublic" />
      </Styled.ListPublicToggleIcon>
      <div>
        <Styled.ListPublicToggleHeading>
          List As Public
        </Styled.ListPublicToggleHeading>
        <Styled.ListPublicToggleSubHeading>
          Anyone can search for and view
        </Styled.ListPublicToggleSubHeading>
      </div>
      <Styled.ListPublicToggleCheckBox>
        <RadioButton />
      </Styled.ListPublicToggleCheckBox>
    </Styled.ListPublicToggleContainer>
  );
};

export default ListPublicToggle;
