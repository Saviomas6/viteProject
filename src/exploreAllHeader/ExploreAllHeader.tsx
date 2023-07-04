import * as Styled from "./style";
import searchIcon from "../assets/searchIcon.svg";
import filterIcon from "../assets/filterIcon.svg";
import backArrow from "../assets/backArrow.svg";
import blueDownArrow from "../assets/blueDownArrow.svg";
import {
  MusicDesktopScreenContainer,
  MusicMobileScreenContainer,
} from "../sharedMusicStyles";

interface I_Props {
  heading: string;
  children: React.ReactNode;
}

const ExploreAllHeader = ({ heading, children }: I_Props) => {
  return (
    <>
      <MusicMobileScreenContainer>
        <Styled.ExploreAllHeaderLayout>
          <Styled.ExploreAllHeaderHeading>
            {heading}
          </Styled.ExploreAllHeaderHeading>
          <Styled.ExploreAllHeaderInputWrapper>
            <Styled.ExploreAllHeaderInputField
              type="text"
              placeholder="Search Collectibles"
            />
            <Styled.ExploreAllHeaderSearchIcon>
              <img src={searchIcon} alt="search" />
            </Styled.ExploreAllHeaderSearchIcon>
          </Styled.ExploreAllHeaderInputWrapper>
          <Styled.ExploreAllHeaderFilterWrapper>
            <Styled.ExploreAllHeaderFilterIcon>
              <img src={filterIcon} alt="filter" />
            </Styled.ExploreAllHeaderFilterIcon>
            <Styled.ExploreAllHeaderFilter>
              Filter
            </Styled.ExploreAllHeaderFilter>
            <Styled.ExploreAllHeaderDropDown>
              <img src={blueDownArrow} alt="arrow" />
            </Styled.ExploreAllHeaderDropDown>
          </Styled.ExploreAllHeaderFilterWrapper>
          {children}
          <Styled.ExploreAllHeaderBackIcon>
            <img src={backArrow} alt="back" />
          </Styled.ExploreAllHeaderBackIcon>
        </Styled.ExploreAllHeaderLayout>
      </MusicMobileScreenContainer>
      <MusicDesktopScreenContainer>
        <Styled.ExploreAllHeaderHeading>
          {heading}
        </Styled.ExploreAllHeaderHeading>
      </MusicDesktopScreenContainer>
    </>
  );
};

export default ExploreAllHeader;
