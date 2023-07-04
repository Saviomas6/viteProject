import { useState } from "react";
import {
  HorizontalCardContainer,
  MobileExploreAllGridLayout,
} from "../sharedMusicStyles";
import {
  MusicLibraryContainer,
  MusicLibraryFilter,
  MusicLibraryFilterIcon,
  MusicLibraryFilterIconWrapper,
  MusicLibraryFilterWrapper,
  MusicLibraryHeaderContainer,
  MusicLibraryHeading,
  MusicLibraryLayout,
  MusicLibraryNavTab,
  MusicLibraryNavTabs,
  PlayListFilterWrapper,
} from "./style";
import filter from "../assets/filter.svg";
import blueDownArrow from "../assets/blueDownArrow.svg";
import MusicCard from "../musicCard/MusicCard";
import CreateMusicPlaylist from "../createMusicPlaylist/CreateMusicPlaylist";
import PlayListFilter from "../playListFilter/PlayListFilter";

const MusicLibrary = () => {
  const [isTabSelected, setTabSelected] = useState<string>("playlists");
  const [isPlayListOpen, setPlayListOpen] = useState<boolean>(false);
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const [isFilterLabelSelected, setFilterLabelSelected] = useState<string>("");
  const [isFilterValueSelected, setFilterValueSelected] = useState<string>("");

  const libraryTabData = [
    {
      id: 1,
      label: "Playlists",
      link: "playlists",
    },
    {
      id: 2,
      label: "Created",
      link: "created",
    },
    {
      id: 3,
      label: "Owned",
      link: "owned",
    },
    {
      id: 4,
      label: "Onsale",
      link: "onsale",
    },
  ];

  return (
    <MusicLibraryLayout>
      <MusicLibraryContainer>
        <MusicLibraryHeaderContainer>
          <MusicLibraryHeading>Music</MusicLibraryHeading>
        </MusicLibraryHeaderContainer>
        <HorizontalCardContainer>
          {libraryTabData.map((value) => (
            <MusicLibraryNavTabs key={value?.id}>
              <MusicLibraryNavTab
                onClick={() => setTabSelected(value?.link)}
                isTabSelected={isTabSelected === value?.link}
              >
                {value?.label}
              </MusicLibraryNavTab>
            </MusicLibraryNavTabs>
          ))}
        </HorizontalCardContainer>
        <MusicLibraryFilterWrapper>
          <MusicLibraryFilterIconWrapper
            onClick={() => setFilterOpen(!isFilterOpen)}
          >
            <MusicLibraryFilterIcon>
              <img src={filter} alt="filter" />
            </MusicLibraryFilterIcon>
            <MusicLibraryFilter fontColor="#fff">Recently</MusicLibraryFilter>
            <MusicLibraryFilterIcon>
              <img src={blueDownArrow} alt="arrow" />
            </MusicLibraryFilterIcon>
          </MusicLibraryFilterIconWrapper>
          {isTabSelected === "playlists" ? (
            <MusicLibraryFilter
              onClick={() => setPlayListOpen(!isPlayListOpen)}
              fontColor="#0552FB"
            >
              + New Playlist
            </MusicLibraryFilter>
          ) : (
            <MusicLibraryFilter fontColor="#0552FB">
              + New Music
            </MusicLibraryFilter>
          )}
          {isFilterOpen && (
            <PlayListFilterWrapper>
              <PlayListFilter />
            </PlayListFilterWrapper>
          )}
        </MusicLibraryFilterWrapper>
        {isTabSelected === "playlists" && (
          <MobileExploreAllGridLayout>
            <MusicCard
              image="https://images.pexels.com/photos/11662238/pexels-photo-11662238.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              albumName="Star Boy"
              creatorName="@Imagine_dragon"
              topBar={false}
            />
          </MobileExploreAllGridLayout>
        )}
        {isTabSelected === "created" && (
          <MobileExploreAllGridLayout>
            <MusicCard
              image="https://images.pexels.com/photos/13575099/pexels-photo-13575099.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              albumName="Star Boy"
              topBar={false}
              isBadge={true}
            />
          </MobileExploreAllGridLayout>
        )}
        {isTabSelected === "owned" && (
          <MobileExploreAllGridLayout>
            <MusicCard
              image="https://images.pexels.com/photos/15735519/pexels-photo-15735519.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              albumName="Star Boy"
              creatorName="@Imagine_dragon"
              topBar={false}
            />
          </MobileExploreAllGridLayout>
        )}
        {isTabSelected === "onsale" && (
          <MobileExploreAllGridLayout>
            <MusicCard
              image="https://images.pexels.com/photos/11666208/pexels-photo-11666208.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              albumName="Shut Off The Lights"
              creatorName="@Sia"
              topBar={false}
            />
          </MobileExploreAllGridLayout>
        )}

        <CreateMusicPlaylist
          isPlayListOpen={isPlayListOpen}
          setPlayListOpen={setPlayListOpen}
        />
      </MusicLibraryContainer>
    </MusicLibraryLayout>
  );
};

export default MusicLibrary;
