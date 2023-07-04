import React from "react";
import styled from "styled-components";
const imagUrl =
  "https://images.pexels.com/photos/15127594/pexels-photo-15127594.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load";
const GridLayout = () => {
  return (
    <MainContainer>
      {Array.from({ length: 20 }, (x, v) => (
        <ImageMainContainer key={v}>
          <ImageContainer
            src={imagUrl}
            alt="A beautiful landscape with mountains and a lake"
          />
        </ImageMainContainer>
      ))}
    </MainContainer>
  );
};

export default React.memo(GridLayout);

export const MainContainer = styled.div`
  padding: 30px 24px;
  display: grid;
  grid-template-columns: repeat(5, minmax(70px, 1fr));
  grid-gap: 10px;
`;
export const ImageMainContainer = styled.div``;

export const ImageContainer = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 1;
`;
