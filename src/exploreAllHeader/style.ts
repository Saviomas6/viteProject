import styled from "styled-components";
export const ExploreAllHeaderLayout = styled.div`
  margin: 30px 0;
  position: relative;
  color: #fff;
`;
export const ExploreAllHeaderHeading = styled.div`
  font-size: 20px;
  font-weight: 700;
  /* font-family: ProBold; */
  color: #fff;
  text-align: center;
`;
export const ExploreAllHeaderBackIcon = styled.div`
  position: absolute;
  top: 5px;
  left: 0;
  cursor: pointer;
`;
export const ExploreAllHeaderInputWrapper = styled.div`
  height: 40px;
  position: relative;
  margin-top: 25px;
`;
export const ExploreAllHeaderInputField = styled.input`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 12px;
  background-color: #26272d;
  border-radius: 8px;
  outline: none;
  border: none;
  /* font-family: ProRegular; */
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const ExploreAllHeaderSearchIcon = styled.div`
  position: absolute;
  top: 7px;
  right: 15px;
`;
export const ExploreAllHeaderFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;
export const ExploreAllHeaderFilterIcon = styled.div`
  display: flex;
`;
export const ExploreAllHeaderFilter = styled.div``;
export const ExploreAllHeaderDropDown = styled.div`
  display: flex;
`;
