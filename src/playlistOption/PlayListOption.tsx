import * as Styled from "./style";
import backArrow from "../assets/backArrow.svg";
import addMore from "../assets/playlistOption/addMore.svg";
import editPlaylist from "../assets/playlistOption/editPlaylist.svg";
import deletePlaylist from "../assets/playlistOption/deletePlaylist.svg";
import addQueue from "../assets/playlistOption/addQueue.svg";
import ListPublicToggle from "../listPublicToggle/ListPublicToggle";

interface I_Props {
  isPlayListOptionOpen: boolean;
  setPlayListOptionOpen(value: boolean): void;
}

const PlayListOption = ({
  isPlayListOptionOpen,
  setPlayListOptionOpen,
}: I_Props) => {
  const optionData = [
    {
      id: 1,
      label: "Add more song to playlist",
      icon: addMore,
    },
    {
      id: 2,
      label: "Edit playlist",
      icon: editPlaylist,
    },
    {
      id: 3,
      label: "Delete playlist",
      icon: deletePlaylist,
    },
    {
      id: 4,
      label: "Add to queue",
      icon: addQueue,
    },
  ];

  return (
    <Styled.PlayListOptionLayout isPlayListOptionOpen={isPlayListOptionOpen}>
      <Styled.PlayListOptionContainer>
        <Styled.PlayListOptionBackArrow
          onClick={() => setPlayListOptionOpen(!isPlayListOptionOpen)}
        >
          <img src={backArrow} alt="back" />
        </Styled.PlayListOptionBackArrow>
        <Styled.PlayListOptionHeading>
          PUBLIC PLAYLIST
        </Styled.PlayListOptionHeading>
        <Styled.Username>by Idrris_sandhu</Styled.Username>
        <Styled.PlayListOptionListContainer>
          {optionData.map((value) => (
            <Styled.PlayListOptionListWrapper key={value?.id}>
              <Styled.PlayListOptionListIcon>
                <img src={value?.icon} alt={value?.label} />
              </Styled.PlayListOptionListIcon>
              <Styled.PlayListOptionListText>
                {value?.label}
              </Styled.PlayListOptionListText>
            </Styled.PlayListOptionListWrapper>
          ))}
        </Styled.PlayListOptionListContainer>
        <ListPublicToggle />
      </Styled.PlayListOptionContainer>
    </Styled.PlayListOptionLayout>
  );
};

export default PlayListOption;
