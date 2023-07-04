import * as Styled from "./style";
import smallBackArrow from "../assets/smallBackArrow.svg";
import backArrow from "../assets/mobileSideBar/backArrow.svg";
import { sidebarData } from "./sideBarData";
interface I_Props {
  isSideBarOpen: boolean;
  setSideBarOpen(value: boolean): void;
}

const MobileSideBar = ({ isSideBarOpen, setSideBarOpen }: I_Props) => {
  return (
    <Styled.MobileSideBarLayout isSideBarOpen={isSideBarOpen}>
      <Styled.MobileSideBarHeadingWrapper>
        <Styled.MobileSideBarHeading>My Library</Styled.MobileSideBarHeading>
        <Styled.MobileSideBarBackArrow
          onClick={() => setSideBarOpen(!isSideBarOpen)}
        >
          <img src={backArrow} alt="back" />
        </Styled.MobileSideBarBackArrow>
      </Styled.MobileSideBarHeadingWrapper>
      {sidebarData.map((sidebar, index) => (
        <Styled.MobileSideBarContainer key={index}>
          <Styled.MobileSideBarIconWrapper>
            <Styled.MobileSideBarIcon>
              <img src={sidebar?.image} alt={sidebar?.label} />
            </Styled.MobileSideBarIcon>
            <Styled.MobileSideBarLabel>
              {sidebar?.label}
            </Styled.MobileSideBarLabel>
          </Styled.MobileSideBarIconWrapper>
          <Styled.MobileSideBarIconWrapper>
            <Styled.MobileSideBarCount>
              {sidebar?.count}
            </Styled.MobileSideBarCount>
            <Styled.MobileSideBarNextArrow>
              <img src={smallBackArrow} alt="next" />
            </Styled.MobileSideBarNextArrow>
          </Styled.MobileSideBarIconWrapper>
        </Styled.MobileSideBarContainer>
      ))}
    </Styled.MobileSideBarLayout>
  );
};

export default MobileSideBar;
