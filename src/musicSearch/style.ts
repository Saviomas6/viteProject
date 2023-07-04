import styled from "styled-components";
export const MusicSearchLayout = styled.div<any>`
  padding: 36px 24px;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: ${({ isSearchOpen }) => (isSearchOpen ? "0" : "-100%")};
  background-color: #000;
  box-sizing: border-box;
  transition: 420ms;
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MusicSearchBackIcon = styled.div`
  display: flex;
`;
export const MusicSearchInputWrapper = styled.div`
  height: 38px;
  width: 100%;
  position: relative;
`;
export const MusicSearchInputField = styled.input`
  height: 100%;
  width: 100%;
  background: rgba(23, 27, 30, 0.6);
  border: 1px solid #2c3033;
  padding: 0 36px;
  outline: none;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 400;
  font-size: 13px;
  /* font-family: ProRegular; */
  color: #fff;
  ::placeholder {
    color: #fff;
    opacity: 0.7;
  }
`;

export const InputSearchIcon = styled.div`
  position: absolute;
  top: 11px;
  left: 10px;
`;

export const MusicSearchNavTabs = styled.div`
  display: flex;
  gap: 12px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const MusicSearchNavTab = styled.div<any>`
  height: 30px;
  font-weight: 500;
  font-size: 14px;
  color: ${({ tab }) => (tab ? "#fff" : "#d8d8d8")};
  border: ${({ tab }) => (tab ? "1px solid transparent" : "1px solid #d8d8d8")};
  padding: 0 18px;
  background: ${({ tab }) =>
    tab
      ? "linear-gradient(271.27deg, #20BF55 -80.6%, #01BAEF 105.68%);"
      : "none"};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
  cursor: pointer;
`;
export const CloseWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;
  cursor: pointer;
`;
export const MessageHeading = styled.div`
  font-weight: 600;
  font-size: 17px;
  color: #fff;
  /* font-family: ProSemiBold; */
  margin-top: 36px;
`;
export const MessageContent = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  /* font-family: ProMedium; */
  margin-top: 10px;
`;
