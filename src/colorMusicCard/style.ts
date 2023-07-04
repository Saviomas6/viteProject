import styled from "styled-components";
export const ColorCardContainer = styled.div`
  height: 140px;
  background: linear-gradient(
    319deg,
    #373b44 0%,
    #879693 43.24%,
    #535b82 101.75%
  );
  border-radius: 3px;
  padding: 4px;
  cursor: pointer;
`;

export const ColorImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColorImage = styled.img`
  height: 140px;
  width: ${(props) => props.width || "100%"};
  object-fit: cover;
  border-radius: 50%;
`;
export const ColorCardSingerName = styled.div`
  font-weight: 500;
  /* font-family: ProMedium; */
  font-size: 14px;
  color: #fff;
  margin-top: 8px;
`;
