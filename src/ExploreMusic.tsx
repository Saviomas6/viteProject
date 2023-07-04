import { useState, useEffect, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import ColorMusicCard from "./colorMusicCard/ColorMusicCard";
import MusicArticleCard from "./musicArticleCard/MusicArticleCard";
import MusicCard from "./musicCard/MusicCard";
import MusicCardHeader from "./musicCardHeader/MusicCardHeader";
import hamburgerMenu from "./assets/hamburgerMenu.svg";
import searchIcon from "./assets/searchIcon.svg";
import goodMorning from "./assets/greeting/goodMorning.svg";
import goodAfternoon from "./assets/greeting/goodAfternoon.svg";
import goodEvening from "./assets/greeting/goodEvening.svg";
import MobileSideBar from "./mobileSideBar/MobileSideBar";
import MusicSearch from "./musicSearch/MusicSearch";
import {
  MusicDesktopScreenContainer,
  MusicMobileScreenContainer,
} from "./sharedMusicStyles";

const ExploreMusic = () => {
  const [message, setMessage] = useState<string>("");
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);

  const date = new Date();
  const currentTime = date.getHours();

  useEffect(() => {
    if (currentTime >= 0 && currentTime <= 12) {
      setMessage("morning");
    } else if (currentTime > 12 && currentTime <= 18) {
      setMessage("afternoon");
    } else {
      setMessage("evening");
    }
  }, []);

  return (
    <>
      <MusicMobileScreenContainer>
        <MainContainer>
          <MainHeadingWrapper>
            <HeadingWrapper>
              {message === "morning" && (
                <>
                  <Heading>Good Morning</Heading>
                  <HeadingLogo>
                    <img src={goodMorning} alt="morning" />
                  </HeadingLogo>
                </>
              )}
              {message === "afternoon" && (
                <>
                  <Heading>Good Afternoon</Heading>
                  <HeadingLogo>
                    <img src={goodAfternoon} alt="afternoon" />
                  </HeadingLogo>
                </>
              )}
              {message === "evening" && (
                <>
                  <Heading>Good Evening</Heading>
                  <HeadingLogo>
                    <img src={goodEvening} alt="evening" />
                  </HeadingLogo>
                </>
              )}
            </HeadingWrapper>
            <SearchMenuWrapper>
              <SearchLogo onClick={() => setSearchOpen(!isSearchOpen)}>
                <img src={searchIcon} alt="search" />
              </SearchLogo>
              <HamBurgerMenuLogo onClick={() => setSideBarOpen(!isSideBarOpen)}>
                <img src={hamburgerMenu} alt="menuIcon" />
              </HamBurgerMenuLogo>
            </SearchMenuWrapper>
          </MainHeadingWrapper>
          <MusicCardMainContainer>
            <MusicCardHeader cardHeading="New Releases" />
            <HorizontalCardContainer>
              <MusicCard
                image="https://images.pexels.com/photos/15363536/pexels-photo-15363536.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                albumName="Star Boy"
                creatorName="@Imagine_dragon"
                topBar={false}
                width="140px"
              />
            </HorizontalCardContainer>
          </MusicCardMainContainer>
          <MusicCardMainContainer>
            <MusicCardHeader cardHeading="Discover Artist" />
            <HorizontalCardContainer>
              {Array.from({ length: 10 }, (x, v) => (
                <Fragment key={v}>
                  <ColorMusicCard width="140px" />
                </Fragment>
              ))}
            </HorizontalCardContainer>
          </MusicCardMainContainer>
          <MusicCardMainContainer>
            <MusicCardHeader cardHeading="Popular & Trending" />
            <HorizontalCardContainer>
              <MusicCard
                image="https://images.pexels.com/photos/11566305/pexels-photo-11566305.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                albumName="Star Boy"
                creatorName="@Imagine_dragon"
                topBar={false}
                width="140px"
              />
            </HorizontalCardContainer>
          </MusicCardMainContainer>
          <MusicCardMainContainer>
            <MusicCardHeader cardHeading="Artist Playlist" />
            <HorizontalCardContainer>
              <MusicCard
                image="https://images.pexels.com/photos/10957671/pexels-photo-10957671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                albumName="Nostalgic Journeys"
                creatorName="21 Music . 82:36"
                topBar={true}
                topBarHeading="Taylor Swift"
                width="140px"
              />
            </HorizontalCardContainer>
          </MusicCardMainContainer>
          <MusicCardMainContainer>
            <MusicCardHeader cardHeading="Articles" />
            <HorizontalCardContainer>
              <MusicArticleCard width="275px" />
            </HorizontalCardContainer>
          </MusicCardMainContainer>
          <MobileSideBar
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
          />
          <MusicSearch
            isSearchOpen={isSearchOpen}
            setSearchOpen={setSearchOpen}
          />
        </MainContainer>
      </MusicMobileScreenContainer>

      <MusicDesktopScreenContainer>
        <div style={{ fontSize: "30px", color: "#fff", textAlign: "center" }}>
          Desktop
        </div>
      </MusicDesktopScreenContainer>
    </>
  );
};

export default ExploreMusic;
//
const MainContainer = styled.div`
  padding: 0 24px;
  position: relative;
`;

//

const MainHeadingWrapper = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Heading = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
`;
const HeadingLogo = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
`;

const SearchMenuWrapper = styled.div`
  color: #fff;
  display: flex;
  gap: 16px;
`;

const SearchLogo = styled.div`
  display: flex;
`;

const HamBurgerMenuLogo = styled.div`
  display: flex;
`;

const HorizontalCardContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

//shared

const MusicCardMainContainer = styled.div`
  margin-bottom: 30px;
`;
