import styled from "styled-components";

import ExploreAllHeader from "./exploreAllHeader/ExploreAllHeader";
import MusicCard from "./musicCard/MusicCard";
import {
  MainContainer,
  MusicDesktopScreenContainer,
  MusicMobileScreenContainer,
} from "./sharedMusicStyles";

const ExploreAllMusic = () => {
  return (
    <>
      <MusicMobileScreenContainer>
        <MainContainer>
          <ExploreAllHeader heading="New Releases">
            <MobileExploreAllGridLayout>
              <MusicCard
                image="https://images.pexels.com/photos/11566305/pexels-photo-11566305.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                albumName="Star Boy"
                creatorName="@Imagine_dragon"
                topBar={false}
              />
            </MobileExploreAllGridLayout>
          </ExploreAllHeader>
        </MainContainer>
      </MusicMobileScreenContainer>
      <MusicDesktopScreenContainer
        style={{ backgroundColor: "#fff", fontSize: "20px" }}
      >
        <div>Hello</div>
      </MusicDesktopScreenContainer>
    </>
  );
};

export default ExploreAllMusic;

export const MobileExploreAllGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 30px;
  padding: 40px 0;
`;
