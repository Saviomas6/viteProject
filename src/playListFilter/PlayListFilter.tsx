import {
  PlayListFilterContainer,
  PlayListFilterIcon,
  PlayListFilterIconWrapper,
  PlayListFilterText,
} from "./style";
import recentlyAdded from "../assets/playListFilter/recentlyAdded.svg";
import privatePlaylist from "../assets/playListFilter/privatePlaylist.svg";
import publicPlaylist from "../assets/playListFilter/publicPlaylist.svg";

const PlayListFilter = () => {
  const filterData = [
    {
      id: 1,
      label: "Recently Added",
      icon: recentlyAdded,
      value: "recentlyAdded",
    },
    {
      id: 2,
      label: "Private Playlist",
      icon: privatePlaylist,
      value: "privatePlaylist",
    },
    {
      id: 3,
      label: "Public Playlist",
      icon: publicPlaylist,
      value: "publicPlaylist",
    },
  ];

  return (
    <PlayListFilterContainer>
      {filterData.map((filter) => (
        <PlayListFilterIconWrapper>
          <PlayListFilterIcon>
            <img src={filter?.icon} alt={filter?.value} />
          </PlayListFilterIcon>
          <PlayListFilterText>{filter?.label}</PlayListFilterText>
        </PlayListFilterIconWrapper>
      ))}
    </PlayListFilterContainer>
  );
};

export default PlayListFilter;
