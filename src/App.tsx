import { useState, useRef } from "react";
import styled from "styled-components";

const App = () => {
  const [otpValue, setOtpValue] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
  ];

  const handleChange = (event: any, index: number) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }
    const newOtp = [...otpValue];
    newOtp[index] = value;
    setOtpValue(newOtp);
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (event: any, index: number) => {
    if (event.key === "Backspace" && !otpValue[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(otpValue.join(""));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          maxLength={1}
          value={otpValue[0]}
          onChange={(e) => handleChange(e, 0)}
          onKeyDown={(e) => handleKeyDown(e, 0)}
          ref={inputRefs[0]}
        />
        <Input
          type="text"
          maxLength={1}
          value={otpValue[1]}
          onChange={(e) => handleChange(e, 1)}
          onKeyDown={(e) => handleKeyDown(e, 1)}
          ref={inputRefs[1]}
        />
        <Input
          type="text"
          maxLength={1}
          value={otpValue[2]}
          onChange={(e) => handleChange(e, 2)}
          onKeyDown={(e) => handleKeyDown(e, 2)}
          ref={inputRefs[2]}
        />
        <Separator>---</Separator>
        <Input
          type="text"
          maxLength={1}
          value={otpValue[3]}
          onChange={(e) => handleChange(e, 3)}
          onKeyDown={(e) => handleKeyDown(e, 3)}
          ref={inputRefs[3]}
        />
        <Input
          type="text"
          maxLength={1}
          value={otpValue[4]}
          onChange={(e) => handleChange(e, 4)}
          onKeyDown={(e) => handleKeyDown(e, 4)}
          ref={inputRefs[4]}
        />
        <Input
          type="text"
          maxLength={1}
          value={otpValue[5]}
          onChange={(e) => handleChange(e, 5)}
          onKeyDown={(e) => handleKeyDown(e, 5)}
          ref={inputRefs[5]}
        />
        <div>
          <Button type="submit" disabled={otpValue.includes("")}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default App;

const Input = styled.input`
  height: 40px;
  width: 40px;
  background-color: #0cc789;
  color: #000;
  outline: none;
  border: none;
  padding: 5px;
  border-radius: 10px;
  margin-right: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
const Separator = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 600;
`;
const Button = styled.button`
  padding: 10px 30px;
  background-color: #808080;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  margin: 10px;
`;
