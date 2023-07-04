import styled from "styled-components";
export const DeleteModalLayout = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const DeleteModalContainer = styled.div`
  background: #171b1e;
  border-radius: 18px;
  height: 328px;
  width: 311px;
  padding: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DeleteModalRemoveIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const DeleteModalHeading = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: #fff;
  /* font-family: ProMedium; */
  text-align: center;
`;
export const DeleteModalDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  margin-top: 10px;
  text-align: center;
`;
export const DeleteModalButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
`;
