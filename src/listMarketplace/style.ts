import styled from "styled-components";
export const ListMarketPlaceLayout = styled.div`
  padding: 36px 24px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ListMarketPlaceContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListMarketPlaceHeading = styled.div`
  font-weight: 600;
  font-size: 30px;
  color: #fff;
  /* font-family: ProSemiBold; */
`;

export const ListMarketPlaceDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  margin: 12px 0 40px 0;
`;

export const ListMarketPlaceInputWrapper = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
`;

export const ListMarketPlaceInputLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  margin: 15px 0;
`;
export const ListMarketPlaceInputField = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 13px;
  box-sizing: border-box;
  background: #171b1e;
  border-radius: 10px 0 0 10px;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  ::placeholder {
    opacity: 0.7;
  }
`;

export const InputRightLabelMainContainer = styled.div`
  height: 55px;
  background: #171b1e;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
`;
export const InputRightLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 18px;
  border-left: 1px solid #2c3033;
`;

export const InputRightIcon = styled.div`
  display: flex;
`;
export const InputRightLabel = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  /* font-family: ProMedium; */
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
`;
