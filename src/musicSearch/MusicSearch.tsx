import { Fragment, useState } from "react";
import backArrow from "../assets/backArrow.svg";
import * as Styled from "./style";
import dotSearchIcon from "../assets/dotSearchIcon.svg";
import { tabData } from "./tabData";
import MusicTagCard from "../musicTagCard/MusicTagCard";
import MusicArtistCard from "../musicArtistCard/MusicArtistCard";
import SongCard from "../songCard/SongCard";
import MusicTopSection from "../musicTopSection/MusicTopSection";
import close from "../assets/close.svg";
interface I_Props {
  isSearchOpen: boolean;
  setSearchOpen(value: boolean): void;
}

const MusicSearch = ({ isSearchOpen, setSearchOpen }: I_Props) => {
  const [navTab, setNavTab] = useState<string>("top");
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Styled.MusicSearchLayout isSearchOpen={isSearchOpen}>
      <Styled.InputFieldWrapper>
        <Styled.MusicSearchBackIcon
          onClick={() => setSearchOpen(!isSearchOpen)}
        >
          <img src={backArrow} alt="arrow" />
        </Styled.MusicSearchBackIcon>
        <Styled.MusicSearchInputWrapper>
          <Styled.MusicSearchInputField
            type="text"
            placeholder="Search for music collectibles"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoComplete="new-password"
          />
          <Styled.InputSearchIcon>
            <img src={dotSearchIcon} alt="search" />
          </Styled.InputSearchIcon>
          {inputValue !== "" && (
            <Styled.CloseWrapper onClick={() => setInputValue("")}>
              <img src={close} alt="close" />
            </Styled.CloseWrapper>
          )}
        </Styled.MusicSearchInputWrapper>
      </Styled.InputFieldWrapper>
      {inputValue === "" ? (
        <div>
          <Styled.MessageHeading>Play what you love</Styled.MessageHeading>
          <Styled.MessageContent>
            Search for artists, music's, and more.
          </Styled.MessageContent>
        </div>
      ) : (
        <>
          <Styled.MusicSearchNavTabs>
            {tabData.map((tab) => (
              <Styled.MusicSearchNavTab
                tab={navTab === tab?.link}
                onClick={() => setNavTab(tab?.link)}
              >
                {tab?.label}
              </Styled.MusicSearchNavTab>
            ))}
          </Styled.MusicSearchNavTabs>
          {navTab === "top" && <MusicTopSection />}
          {navTab === "songs" && (
            <>
              {Array.from({ length: 10 }, (x, v) => (
                <Fragment key={v}>
                  <SongCard isSerialNumber={true} />
                </Fragment>
              ))}
            </>
          )}

          {navTab === "artists" && (
            <>
              {Array.from({ length: 10 }, (x, v) => (
                <Fragment key={v}>
                  <MusicArtistCard />
                </Fragment>
              ))}
            </>
          )}
          {navTab === "genre" && (
            <>
              {Array.from({ length: 8 }, (x, v) => (
                <Fragment key={v}>
                  <MusicTagCard />
                </Fragment>
              ))}
            </>
          )}
          {navTab === "tags" && (
            <>
              {Array.from({ length: 8 }, (x, v) => (
                <Fragment key={v}>
                  <MusicTagCard />
                </Fragment>
              ))}
            </>
          )}
        </>
      )}
    </Styled.MusicSearchLayout>
  );
};

export default MusicSearch;
