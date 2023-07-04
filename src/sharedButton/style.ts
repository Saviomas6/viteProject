import styled from "styled-components";
export const Button = styled.button<any>`
  height: 46px;
  width: 100%;
  outline: none;
  border: none;
  background: ${({ bgColor }) => bgColor};
  color: ${({ fontColor }) => fontColor};
  font-size: 18px;
  font-weight: 500;
  /* font-family: ProMedium; */
  border-radius: 10px;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
