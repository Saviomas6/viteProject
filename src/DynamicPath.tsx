import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MovieDetailsCard from "./MovieDetailsCard";
type MoviesDetailsType = {
  Title: any;
  Director: string;
  imdbRating: string;
  Year: string;
  Language: string;
  Runtime: string;
  Poster: string;
};
const DynamicPath = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MoviesDetailsType>(
    {} as MoviesDetailsType
  );
  const [loading, setLoading] = useState(false);
  const movieApiFetch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://omdbapi.com/?apikey=1a492dc5&i=${id}`
      );
      const data = await response.json();
      if (data) {
        setLoading(false);
        setMovieDetails(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    movieApiFetch();
  }, [id]);
  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "40px",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <Container>
      {movieDetails && (
        <MovieDetailsCard
          Title={movieDetails?.Title}
          Director={movieDetails?.Director}
          imdbRating={movieDetails?.imdbRating}
          Year={movieDetails?.Year}
          Language={movieDetails?.Language}
          Runtime={movieDetails?.Runtime}
          Poster={movieDetails?.Poster}
        />
      )}
    </Container>
  );
};

export default DynamicPath;
export const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${opacityAnimation} 1s;
  @media (max-width: 650px) {
    padding: 0px 10px;
  }
`;
