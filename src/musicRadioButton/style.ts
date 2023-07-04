import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
`;
export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 51px;
  height: 28px;
  border-radius: 15px;
  background: #484848;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    margin: 5px;
    background: #bebfc3;
    transition: 0.2s;
  }
`;

export const Input = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 51px;
  height: 28px;
  cursor: pointer;
  &:checked + ${Label} {
    background: #1866ff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 27px;
      background: #fff;
      transition: 0.3s;
    }
  }
`;
