import styled from "styled-components";
export const MainContainer = styled.div`
  width: 70px;
`;

export const CheckBoxContainer = styled.div<any>`
  > input {
    display: none;
  }
  > input + label {
    position: relative;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 1px;
      width: 20px;
      height: 20px;
      border: 2px solid #fff;
      border-radius: 6px;
    }
    &:after {
      content: "✔";
      color: #fff;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 3px;
      left: 7px;
      font-size: 14px;
      transition: all 0.4s;
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
  > input:disabled:not(:checked) + label {
    &:before {
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
  }
  > input:checked + label {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &:before {
      border: 2px solid #fff;
    }
  }
`;
