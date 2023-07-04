import * as Styled from "./style";
import trash from "../assets/trash.svg";
import SharedButton from "../sharedButton/SharedButton";
const DeleteModal = () => {
  return (
    <Styled.DeleteModalLayout>
      <Styled.DeleteModalContainer>
        <Styled.DeleteModalRemoveIcon>
          <img src={trash} alt="trash" />
        </Styled.DeleteModalRemoveIcon>
        <div>
          <Styled.DeleteModalHeading>Remove Music</Styled.DeleteModalHeading>
          <Styled.DeleteModalDescription>
            Are you sure you want remove this music, This can’t be reservable
          </Styled.DeleteModalDescription>
        </div>
        <Styled.DeleteModalButtonWrapper>
          <SharedButton bgColor="#fff" fontColor="#000" text="Remove" />
          <SharedButton bgColor="transparent" fontColor="#fff" text="Cancel" />
        </Styled.DeleteModalButtonWrapper>
      </Styled.DeleteModalContainer>
    </Styled.DeleteModalLayout>
  );
};

export default DeleteModal;
