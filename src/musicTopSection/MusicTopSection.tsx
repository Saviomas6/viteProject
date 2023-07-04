import { Fragment } from "react";
import MusicArtistCard from "../musicArtistCard/MusicArtistCard";
import MusicCard from "../musicCard/MusicCard";
import { HorizontalCardContainer } from "../sharedMusicStyles";
import SongCard from "../songCard/SongCard";
import * as Styled from "./style";

const MusicTopSection = () => {
  return (
    <>
      <Styled.MusicTopSectionContainer>
        <MusicArtistCard />
      </Styled.MusicTopSectionContainer>
      <Styled.ArtistPlaylistHeading>
        Artist Playlists
      </Styled.ArtistPlaylistHeading>
      <HorizontalCardContainer>
        <MusicCard
          image="https://images.pexels.com/photos/15363536/pexels-photo-15363536.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          albumName="Star Boy"
          creatorName="@Imagine_dragon"
          topBar={false}
          width="140px"
        />
      </HorizontalCardContainer>
      <Styled.SongContainer>
        {Array.from({ length: 10 }, (x, v) => (
          <Fragment key={v}>
            <SongCard />
          </Fragment>
        ))}
      </Styled.SongContainer>
    </>
  );
};

export default MusicTopSection;
