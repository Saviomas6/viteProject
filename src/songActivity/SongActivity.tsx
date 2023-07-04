import * as Styled from "./style";
import isVerified from "../assets/isVerified.svg";
import backArrow from "../assets/backArrow.svg";

const SongActivity = () => {
  return (
    <Styled.SongActivityLayout>
      <Styled.Title>View Song Activity</Styled.Title>
      <Styled.BackArrowWrapper>
        <img src={backArrow} alt="back" />
      </Styled.BackArrowWrapper>
      <Styled.SongActivityUserDetailContainer>
        <Styled.SongActivityUserImageContainer>
          <Styled.SongActivityUserImage
            src="https://images.pexels.com/photos/15647839/pexels-photo-15647839.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="img"
          />
        </Styled.SongActivityUserImageContainer>
        <Styled.SongDetailWrapper>
          <Styled.SongName>Tjärnheden Soul</Styled.SongName>
          <Styled.UserNameVerifiedWrapper>
            <Styled.UserName>@iddräs</Styled.UserName>
            <Styled.Verified>
              <img src={isVerified} alt="verified" />
            </Styled.Verified>
          </Styled.UserNameVerifiedWrapper>
          <Styled.SongTotalSupplyWrapper>
            <Styled.SongTotalSupply>Total Supply</Styled.SongTotalSupply>
            <Styled.SongTotalValue>10,000</Styled.SongTotalValue>
          </Styled.SongTotalSupplyWrapper>
          <Styled.SongTotalSupplyWrapper>
            <Styled.SongTotalSupply>Price</Styled.SongTotalSupply>
            <Styled.SongTotalValue>1.2 LNQ</Styled.SongTotalValue>
          </Styled.SongTotalSupplyWrapper>
        </Styled.SongDetailWrapper>
      </Styled.SongActivityUserDetailContainer>
      <Styled.HorizontalRow />
      <Styled.SongActivityTitle>Song Activity</Styled.SongActivityTitle>
      <Styled.SongActivityDescriptionWrapper>
        <Styled.SongActivityDescription>
          Here are the list of users that currently hold ownership in this song
        </Styled.SongActivityDescription>
        <Styled.SongActivityDescription>
          9,124 total owners <span>8768</span> slots open
        </Styled.SongActivityDescription>
      </Styled.SongActivityDescriptionWrapper>

      {Array.from({ length: 40 }, (x, v) => (
        <Styled.SongActivityDataWrapper key={v}>
          <Styled.ProfileWrapper>
            <Styled.ProfileImageContainer>
              <Styled.ProfileImage
                src="https://images.pexels.com/photos/15326426/pexels-photo-15326426.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt="img"
              />
            </Styled.ProfileImageContainer>
            <div>
              <Styled.UserNameVerifiedContainer>
                <Styled.ProfileUserName>@idrris_sandhu</Styled.ProfileUserName>
                <Styled.VerifiedIcon>
                  <img src={isVerified} alt="verified" />
                </Styled.VerifiedIcon>
              </Styled.UserNameVerifiedContainer>
              <Styled.SongTime>09.13.22</Styled.SongTime>
            </div>
          </Styled.ProfileWrapper>
          <Styled.SongActivityCount>#1</Styled.SongActivityCount>
        </Styled.SongActivityDataWrapper>
      ))}
    </Styled.SongActivityLayout>
  );
};

export default SongActivity;
