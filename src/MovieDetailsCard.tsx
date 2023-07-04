import { NavLink } from "react-router-dom";
import styled from "styled-components";
type MoviesDetailsType = {
  Title: any;
  Director: string;
  imdbRating: string;
  Year: string;
  Language: string;
  Runtime: string;
  Poster: string;
};

const MovieDetailsCard = ({
  Director,
  Title,
  imdbRating,
  Runtime,
  Language,
  Year,
  Poster,
}: MoviesDetailsType) => {
  const array = [
    {
      name: "mohan",
      age: 20,
    },
    {
      name: "vaikunda",
      age: 23,
    },
    {
      name: "savio",
      age: 26,
    },
  ];
  const result = array.map((val) => val);
  console.log(result);
  return (
    <MovieDetailsCardContainer>
      <MovieDetailsCardPosterContainer>
        <MovieDetailsCardPoster src={Poster} />
      </MovieDetailsCardPosterContainer>
      <MovieDetailsContainer>
        <MovieDetailsTextContent>
          Movie Name :{" "}
          {Title && Title?.length > 15 ? Title.slice(0, 15) + "..." : Title}
        </MovieDetailsTextContent>
        <MovieDetailsTextContent>Director : {Director}</MovieDetailsTextContent>
        <MovieDetailsTextContent>
          Ratings : {imdbRating}/10
        </MovieDetailsTextContent>
        <MovieDetailsTextContent>Release Year : {Year}</MovieDetailsTextContent>
        <MovieDetailsTextContent>Language : {Language}</MovieDetailsTextContent>
        <MovieDetailsTextContent>Runtime : {Runtime}</MovieDetailsTextContent>
        <Link to="/">
          <ButtonWrapper>
            <Button>Go Back</Button>
          </ButtonWrapper>
        </Link>
      </MovieDetailsContainer>
    </MovieDetailsCardContainer>
  );
};

export default MovieDetailsCard;

export const MovieDetailsCardContainer = styled.div`
  width: 600px;
  cursor: pointer;
  background-color: #1c1c24;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  transition: transform 450ms;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
  :hover {
    transform: scale(1.03);
  }
`;
export const MovieDetailsCardPosterContainer = styled.div``;
export const MovieDetailsCardPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
export const MovieDetailsContainer = styled.div``;
export const MovieDetailsTextContent = styled.div`
  margin: 10px 0px;
  padding: 0px 10px;
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 160px;
  height: 45px;
  background: #29ab87;
  border-radius: 50px;
  border: 0;
  font-family: "Roboto", sans-serif;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
`;
