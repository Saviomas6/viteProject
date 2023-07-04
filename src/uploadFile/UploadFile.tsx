import * as Styled from "./style";
import uploadFile from "../assets/uploadFile.svg";
interface I_Props {
  heading: string;
  description: string;
}
const UploadFile = ({ heading, description }: I_Props) => {
  return (
    <Styled.UploadFileMainContainer>
      <Styled.UploadFileLabel>Upload</Styled.UploadFileLabel>
      <Styled.UploadFileContainer htmlFor="inputFile">
        <Styled.UploadFileSubContainer>
          <Styled.UploadFileLogoWrapper>
            <Styled.UploadFileLogo>
              <img src={uploadFile} alt="upload" />
            </Styled.UploadFileLogo>
          </Styled.UploadFileLogoWrapper>
          <Styled.UploadFileHeading>{heading}</Styled.UploadFileHeading>
          <Styled.UploadFileDescription>
            {description}
          </Styled.UploadFileDescription>
          <Styled.UploadFileButton>Choose File</Styled.UploadFileButton>
        </Styled.UploadFileSubContainer>
        <Styled.InputField type="file" id="inputFile" />
      </Styled.UploadFileContainer>
    </Styled.UploadFileMainContainer>
  );
};

export default UploadFile;
