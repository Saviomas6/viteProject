import SharedButton from "../sharedButton/SharedButton";
import * as Styled from "./style";
import backArrow from "../assets/backArrow.svg";
import ListPublicToggle from "../listPublicToggle/ListPublicToggle";

interface I_Props {
  isPlayListOpen: boolean;
  setPlayListOpen(value: boolean): void;
}

const CreateMusicPlaylist = ({ isPlayListOpen, setPlayListOpen }: I_Props) => {
  return (
    <Styled.CreateMusicPlaylistLayout isPlayListOpen={isPlayListOpen}>
      <Styled.CreateMusicPlaylistContainer>
        <div>
          <Styled.CreateMusicPlaylistBackArrow
            onClick={() => setPlayListOpen(!isPlayListOpen)}
          >
            <img src={backArrow} alt="back" />
          </Styled.CreateMusicPlaylistBackArrow>
          <Styled.CreateMusicPlaylistHeading>
            Create New Playlist
          </Styled.CreateMusicPlaylistHeading>
          <Styled.CreateMusicPlaylistInputWrapper>
            <Styled.CreateMusicPlaylistLabel>
              Give your playlist a name
            </Styled.CreateMusicPlaylistLabel>
            <Styled.CreateMusicPlaylistInputField
              type="text"
              placeholder="Playlist"
              autoComplete="new-password"
            />
          </Styled.CreateMusicPlaylistInputWrapper>
        </div>
        <Styled.ListPublicWrapper>
          <ListPublicToggle />
          <Styled.ButtonWrapper>
            <SharedButton bgColor="#fff" fontColor="#171B1E" text="Create" />
          </Styled.ButtonWrapper>
        </Styled.ListPublicWrapper>
      </Styled.CreateMusicPlaylistContainer>
    </Styled.CreateMusicPlaylistLayout>
  );
};

export default CreateMusicPlaylist;
