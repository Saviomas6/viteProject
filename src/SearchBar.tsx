import React from "react";
import styled from "styled-components";
type SearchBarType = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};
const SearchBar = ({ searchText, setSearchText }: SearchBarType) => {

  return (
    <div>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <InputField
          type="text"
          placeholder="Enter the movie name"
          value={searchText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
        />
      </form>
    </div>
  );
};

export default SearchBar;
export const InputField = styled.input<any>`
  height: 50px;
  border-radius: 10px;
  background: #2c2c36;
  font-family: "Roboto", sans-serif;
  outline: none;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 0 20px;
  transition: all linear 0.2s;

  ::placeholder {
    color: #7a798a;
    font-weight: 400;
    font-size: 14px;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
