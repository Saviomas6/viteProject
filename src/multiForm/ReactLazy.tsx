import styled from "styled-components";

const ReactLazy = () => {
  return (
    <>
      <Heading>Lazy Loading Applied</Heading>
      <Container>
        {Array.from({ length: 30 }, (x, v) => (
          <Wrapper key={v}>
            <ImageContainer>
              <Image
                src="https://images.pexels.com/photos/13060249/pexels-photo-13060249.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt="img"
              />
            </ImageContainer>
            <Text>Name</Text>
          </Wrapper>
        ))}
      </Container>
    </>
  );
};

export default ReactLazy;
const Heading = styled.h1`
  padding: 0 10px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  padding: 10px;
`;
const Wrapper = styled.div`
  background-color: #808080;
  border-radius: 10px;
  padding: 10px;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 10px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 0;
`;
