import styled from "styled-components";

export const CreateMusicLayout = styled.div`
  padding: 64px;
  @media screen and (max-width: 640px) {
    padding: 36px 24px;
  }
`;

export const CreateMusicContainer = styled.div`
  width: 543px;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const CreateMusicMainHeading = styled.div`
  font-weight: 500;
  font-size: 30px;
  color: #fff;
  /* font-family: ProMedium; */
`;
export const CreateMusicSubHeading = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  margin: 25px 0;
`;

export const CreateMusicBorderBottomWrapper = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #2c3033;
  background-color: red;
  margin-top: 5px;
`;

export const CreateMusicInputFieldWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  background-color: red;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  margin-bottom: 16px;
`;

export const Description = styled.div<any>`
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  font-size: 12px;
  color: ${({ color }) => color || "#fff"};
  /* font-family: ProMedium; */
  margin-top: 14px;
`;

export const CreateMusicInputField = styled.input`
  height: 55px;
  width: 100%;
  padding: 0px 13px;
  box-sizing: border-box;
  background: #171b1e;
  border-radius: 10px;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  ::placeholder {
    opacity: 0.8;
  }
`;

export const CreateMusicInputTextArea = styled.textarea`
  resize: none;
  height: 84px;
  width: 100%;
  padding: 10px 13px;
  box-sizing: border-box;
  background: #171b1e;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  ::placeholder {
    opacity: 0.8;
  }
`;

//music supply

export const MusicSupplyLabel = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  /* font-family: ProMedium; */
  span {
    opacity: 0.8;
  }
`;
export const MusicSupplyMaxCount = styled.div`
  font-weight: 500;
  font-size: 12px;
  /* font-family: ProMedium; */
  background: linear-gradient(271.27deg, #20bf55 -80.6%, #01baef 105.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
`;

export const MusicSupplyQuantityWrapper = styled.div`
  margin-top: 30px;
`;

//property

export const CreateMusicPropertiesLayout = styled.div`
  border: 2px dashed #2c3033;
  border-radius: 10px;
`;

export const CreateMusicPropertiesMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  /* border-bottom: 2px dashed #2c3033; */
  padding: 20px;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    border-bottom: 2px dashed #2c3033;
    :last-child {
      border-bottom: none;
    }
  }
`;

export const CreateMusicPropertiesContainer = styled.div``;

//upload file
export const UploadFileWrapper = styled.div`
  background-color: red;
`;

//royalty

export const AddRoyaltyMainContainer = styled.div`
  padding: 10px;
  border: 2px dashed #2c3033;
  border-radius: 10px;
  margin-top: 16px;
`;
export const AddRoyaltyContainer = styled.div`
  /* ... */
`;
export const AddRoyaltyInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 12px;
`;
//tentative date
export const TentativeDateWrapper = styled.div`
  /* padding: 30px 0; */
  border-bottom: 1px solid #2c3033;
`;

//explicit
export const ExplicitContentMainWrapper = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #2c3033;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 5px;
  background-color: red;
`;
export const ExplicitContentWrapper = styled.div`
  /* margin-top: 12px; */
`;
export const ExplicitContentLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
`;

export const CheckboxMainWrapper = styled.div`
  display: flex;
  gap: 10px;
  background-color: red;
`;
export const CheckboxLabel = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  /* font-family: ProRegular; */
  span {
    background: linear-gradient(271.27deg, #20bf55 -80.6%, #01baef 105.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
//button
export const CreateMusicButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 190px);
  grid-gap: 20px;
  margin: 40px 0;
  justify-content: end;
  background-color: red;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-gap: 14px;
  }
`;

//dropdown
export const CreateMusicDropDownMainContainer = styled.div`
  /* ... */
`;

export const CreateMusicDropDownLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  min-height: 35px;
  background: #171b1e;
  border-radius: 10px;
  cursor: pointer;
`;
export const CreateMusicDropDownLabel = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
`;

export const CreateMusicIcon = styled.div`
  display: flex;
`;

export const CreateMusicDropDownContentWrapper = styled.div`
  background: #171b1e;
  border-radius: 10px;
  padding: 0 14px;
  overflow: auto;
  margin-top: 8px;
`;

export const CreateMusicDropDownContent = styled.div`
  height: 55px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  margin: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  /* font-family: ProMedium; */
`;

//genre badge

export const GenreBadgeMainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  span {
    opacity: 0.8;
  }
`;

export const GenreBadgeWrapper = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 8px;
  background: linear-gradient(
    97.64deg,
    #ffffff -58.42%,
    #6970ff 60.23%,
    #1f55ff 103.69%
  );
  border-radius: 30px;
`;
export const GenreBadgeText = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: #fff;
  /* font-family: ProMedium; */
`;
export const GenreBadgeIcon = styled.div`
  display: flex;
`;

export const RemoveButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RemoveButton = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #ff1212;
  /* font-family: ProMedium; */
  cursor: pointer;
`;
