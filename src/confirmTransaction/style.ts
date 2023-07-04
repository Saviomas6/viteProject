import styled from "styled-components";
export const ConfirmTransactionLayout = styled.div`
  background-color: gold;
`;
export const ConfirmTransactionContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
`;
export const ConfirmTransactionImageContainer = styled.div`
  height: 297px;
  position: relative;
`;
export const ConfirmTransactionImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const ConfirmTransactionBackIconWrapper = styled.div`
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

export const ConfirmTransactionWrapper = styled.div`
  padding: 0 24px;
`;

export const ConfirmTransactionHeading = styled.div`
  font-weight: 500;
  font-size: 28px;
  color: #fff;
  /* font-family: ProMedium; */
  margin: 12px 0;
`;
export const ConfirmTransactionDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  margin: 12px 0;
`;
export const ConfirmTransactionPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px 0;
`;

export const ConfirmTransactionPrice = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  /* font-family: ProMedium; */
`;

export const HorizontalRow = styled.hr`
  border: 1px solid #2c3033;
`;

export const ConfirmTransactionButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  padding: 36px 24px;
`;
