import { useState } from "react";
import AuthCode from "react-auth-code-input";
import styled from "styled-components";

const ConfirmPin = () => {
  const [result, setResult] = useState("");
  const handleOnChange = (res: string) => {
    setResult(res);
  };
  console.log("result", result);

  return (
    <div>
      <MobileScreen>
        <div>Mobile Pin</div>
        <AuthCode
          length={4}
          inputClassName="input"
          allowedCharacters="numeric"
          containerClassName="container"
          onChange={handleOnChange}
          isPassword={true}
        />
        <Button disabled={result?.length !== 4}>Submit</Button>
      </MobileScreen>
      <DesktopScreen>
        <div>Desktop Pin</div>
        <AuthCode
          length={4}
          inputClassName="input"
          allowedCharacters="numeric"
          onChange={handleOnChange}
          containerClassName="container"
          isPassword={true}
        />
        <Button disabled={result?.length !== 4}>Submit</Button>
      </DesktopScreen>
    </div>
  );
};

export default ConfirmPin;
export const MobileScreen = styled.div`
  color: #fff;
  @media screen and (min-width: 480px) {
    display: none;
  }
  .container {
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .input {
    box-sizing: border-box;
    text-align: center;
    padding: 12px 0px;
    width: 62px;
    height: 53px;
    background: #171b1e;
    border: 1px solid #484c4f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    outline: none;
    font-size: 22px;
    font-family: "Medium";
    color: #fff;
  }
`;
export const DesktopScreen = styled.div`
  color: #fff;
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 480px) {
    display: block;
  }
  .container {
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }
  .input {
    box-sizing: border-box;
    text-align: center;
    padding: 12px 0px;
    width: 62px;
    height: 53px;
    background: #171b1e;
    border: 1px solid #484c4f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    outline: none;
    font-size: 22px;
    font-family: "Medium";
    color: #fff;
  }
`;
export const Button = styled.button`
  height: 40px;
  width: 120px;
  background-color: red;
  outline: none;
  border: none;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const Input = styled(AuthCode)`
  box-sizing: border-box;
  text-align: center;
  padding: 12px 0px;
  width: 62px;
  height: 53px;
  background: #171b1e;
  border: 1px solid #484c4f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  outline: none;
  font-size: 22px;
  font-family: "Medium";
  color: #fff;
`;
