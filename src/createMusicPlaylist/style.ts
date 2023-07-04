import styled from "styled-components";
export const CreateMusicPlaylistLayout = styled.div<any>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: ${({ isPlayListOpen }) => (isPlayListOpen ? "0" : "-100%")};
  background-color: #000;
  padding: 36px 24px;
  box-sizing: border-box;
  transition: 420ms;
`;
export const CreateMusicPlaylistContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CreateMusicPlaylistBackArrow = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;
export const CreateMusicPlaylistHeading = styled.div`
  font-weight: 600;
  font-size: 30px;
  /* font-family: ProSemiBold; */
  color: #fff;
`;
export const CreateMusicPlaylistInputWrapper = styled.div`
  margin-top: 15px;
`;
export const CreateMusicPlaylistLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  /* font-family: ProMedium; */
  margin: 10px 0;
`;
export const CreateMusicPlaylistInputField = styled.input`
  height: 55px;
  width: 100%;
  padding: 0 13px;
  box-sizing: border-box;
  background: #171b1e;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  /* font-family: ProMedium; */
  color: #fff;
  ::placeholder {
    opacity: 0.7;
  }
`;
export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px 0 0 0;
`;
export const ListPublicWrapper = styled.div``;
