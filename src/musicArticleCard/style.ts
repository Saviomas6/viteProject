import styled from "styled-components";
export const MusicArticleCardContainer = styled.div`
  cursor: pointer;
  /* transition: transform 450ms;
  :hover {
    transform: scale(1.03);
  } */
`;
export const MusicArticleCardImageContainer = styled.div<any>`
  position: relative;
  height: 273px;
  @media (max-width: 480px) {
    height: 125px;
    width: ${(props) => props.width || "100%"};
  }
`;
export const MusicArticleCardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0px 0px;
`;
export const MusicArticleCardFooter = styled.div`
  height: 58px;
  background: #171b1e;
  border-radius: 0px 0px 4px 4px;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const MusicArticleStatus = styled.div`
  padding: 4px 14px;
  border-radius: 44px;
  background-color: #000;
  position: absolute;
  bottom: 15px;
  left: 15px;
  font-size: 10px;
  color: #fff;
  font-weight: 600;
`;
