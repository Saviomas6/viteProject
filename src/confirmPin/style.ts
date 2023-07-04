import styled from "styled-components";
export const ConfirmPinLayout = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ConfirmPinBackIconWrapper = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  background: #171b1e;
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 24px;
  width: 24px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ConfirmPinHeading = styled.div`
  font-weight: 500;
  font-size: 30px;
  /* font-family: ProMedium; */
  color: #fff;
  margin-top: 75px;
`;

export const ConfirmPinDescription = styled.div`
  font-weight: 500;
  font-size: 15px;
  /* font-family: ProMedium; */
  color: #fff;
  margin-top: 12px;
`;
export const ConfirmPinInputWrapper = styled.div`
  margin-top: 24px;
`;
export const ConfirmPinButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
  padding: 36px 0;
`;
