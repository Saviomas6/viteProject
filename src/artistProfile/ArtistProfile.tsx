import { Fragment, useState } from "react";
import * as Styled from "./style";
import backArrow from "../assets/backArrow.svg";
import threeDot from "../assets/threeDot.svg";
import verticalThreeDot from "../assets/verticalThreeDot.svg";
import PlayPauseButton from "../playPauseButton/PlayPauseButton";
import MusicCardHeader from "../musicCardHeader/MusicCardHeader";
import SongCard from "../songCard/SongCard";
import { HorizontalCardContainer } from "../sharedMusicStyles";
import MusicCard from "../musicCard/MusicCard";
import MusicAboutSection from "../musicAboutSection/MusicAboutSection";
import { socialMediaData } from "./socialMediaData";
import PlayListOption from "../playlistOption/PlayListOption";
import useImageColorExtractor from "../colorThief";

const ArtistProfile = () => {
  const [isPlayListOptionOpen, setPlayListOptionOpen] =
    useState<boolean>(false);
  const color = useImageColorExtractor(
    "https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg?auto=compress&cs=tinysrgb&w=1600"
  );

  return (
    <Styled.ArtistProfileLayout colorValue={color}>
      <Styled.ArtistProfileContainer>
        <Styled.ArtistProfileBackIconWrapper>
          <Styled.ArtistProfileBackIcon>
            <img src={backArrow} alt="back" />
          </Styled.ArtistProfileBackIcon>
          <Styled.ArtistProfileThreeDot>
            <img src={verticalThreeDot} alt="verticalThreeDot" />
          </Styled.ArtistProfileThreeDot>
        </Styled.ArtistProfileBackIconWrapper>
        <Styled.ArtistProfileImageMainContainer>
          <Styled.ArtistProfileImageContainer>
            <Styled.ArtistProfileImage
              src="https://images.pexels.com/photos/15659205/pexels-photo-15659205.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt="img"
            />
          </Styled.ArtistProfileImageContainer>
        </Styled.ArtistProfileImageMainContainer>
        <Styled.ArtistName>@Taylor_Swift</Styled.ArtistName>
        <Styled.ArtistPlayButtonWrapper>
          <div>
            <Styled.ArtistMusicCount>
              15 Playlist . 82 Music
            </Styled.ArtistMusicCount>
            <Styled.ArtistViewMoreButtonWrapper>
              <Styled.ArtistViewMoreButton>
                View More
              </Styled.ArtistViewMoreButton>
              <Styled.ArtistOptionMenu
                onClick={() => setPlayListOptionOpen(!isPlayListOptionOpen)}
              >
                <img src={threeDot} alt="threeDot" />
              </Styled.ArtistOptionMenu>
            </Styled.ArtistViewMoreButtonWrapper>
          </div>
          <PlayPauseButton />
        </Styled.ArtistPlayButtonWrapper>
        <Styled.ArtistProfileReleaseWrapper>
          <MusicCardHeader cardHeading="Popular releases" />
          {Array.from({ length: 5 }, (x, v) => (
            <Fragment key={v}>
              <SongCard isSerialNumber={false} />
            </Fragment>
          ))}
        </Styled.ArtistProfileReleaseWrapper>
        <Styled.ArtistProfilePlayListWrapper>
          <Styled.ArtistProfilePlayListHeading>
            Artist Playlists
          </Styled.ArtistProfilePlayListHeading>
          <HorizontalCardContainer>
            <MusicCard
              image="https://images.pexels.com/photos/11566305/pexels-photo-11566305.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              albumName="Star Boy"
              creatorName="@Imagine_dragon"
              topBar={false}
              width="140px"
            />
          </HorizontalCardContainer>
        </Styled.ArtistProfilePlayListWrapper>
        <Styled.ArtistProfileAboutWrapper>
          <MusicAboutSection />
        </Styled.ArtistProfileAboutWrapper>
        <Styled.ArtistProfileFollowersCount>
          16,880,158
        </Styled.ArtistProfileFollowersCount>
        <Styled.ArtistSocialMediaName>Followers</Styled.ArtistSocialMediaName>
        {socialMediaData.map((value) => (
          <Styled.ArtistSocialMediaIconWrapper key={value?.id}>
            <Styled.ArtistSocialMediaIcon>
              <img src={value?.icon} alt={value?.label} />
            </Styled.ArtistSocialMediaIcon>
            <Styled.ArtistSocialMediaName>
              {value?.label}
            </Styled.ArtistSocialMediaName>
          </Styled.ArtistSocialMediaIconWrapper>
        ))}
        <PlayListOption
          isPlayListOptionOpen={isPlayListOptionOpen}
          setPlayListOptionOpen={setPlayListOptionOpen}
        />
      </Styled.ArtistProfileContainer>
    </Styled.ArtistProfileLayout>
  );
};

export default ArtistProfile;
