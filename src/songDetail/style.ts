import styled from "styled-components";
export const SongInformationLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  margin: 30px 0;
`;

export const HorizontalRow = styled.hr`
  opacity: 0.1;
  border: 2px solid rgba(255, 255, 255, 0.9);
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;

export const PriceLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
  /* font-family: ProMedium; */
  color: #fff;
`;
export const Price = styled.div`
  font-weight: 700;
  font-size: 20px;
  /* font-family: ProBold; */
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
  padding-bottom: 15px;
`;
