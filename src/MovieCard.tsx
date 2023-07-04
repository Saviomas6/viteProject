import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
type MovieResponseType = {
  poster?: string;
  title?: any;
  year?: string;
  imdbID?: string;
};
const MovieCard = ({ poster, title, year, imdbID }: MovieResponseType) => {
  return (
    <Link to={`/movie/${imdbID}`}>
      <MovieCardContainer>
        <MovieCardImageContainer>
          <MovieCardImage src={poster} />
        </MovieCardImageContainer>
        <MovieName title={title}>
          Movie Name :{" "}
          {title?.length > 10 ? title?.slice(0, 10) + "..." : title}
        </MovieName>
        <MovieReleaseYear>Release Year : {year}</MovieReleaseYear>
      </MovieCardContainer>
    </Link>
  );
};

export default MovieCard;
export const MovieCardContainer = styled.div`
  cursor: pointer;
  background-color: #1c1c24;
  border-radius: 10px;
  padding: 10px;
  transition: transform 450ms;
  :hover {
    transform: scale(1.03);
  }
`;
export const MovieCardImageContainer = styled.div``;
export const MovieCardImage = styled.img`
  width: 100%;
  aspect-ratio: 3/5;
  object-fit: cover;
  border-radius: 10px;
`;
export const MovieName = styled.div`
  font-size: 18px;
  margin: 5px 0;
  color: #fff;
`;
export const MovieReleaseYear = styled.div`
  color: #fff;
  font-size: 18px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
`;
