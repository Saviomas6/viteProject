import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { opacityAnimation } from "./DynamicPath";
import Header from "./Header";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import { useCharacter } from "./UseCharacter";
import axios from "axios";
import { NavLink } from "react-router-dom";
type MovieResponseType = {
  Poster?: string;
  Title?: string | undefined;
  Type?: string;
  Year?: string;
  imdbID?: string;
};
type CharacterType = {
  id: string;
  name: string;
  image: string;
};
type FormType = {
  name: string;
  address: string;
  pinCode: string;
};
type StatusType = {
  id: number;
  label: string;
};
interface PostType {
  body: string;
  id: number;
  title: string;
  userId: number;
}
const layout: StatusType[] = [
  {
    id: 1,
    label: "Contained",
  },
  {
    id: 2,
    label: "Padded",
  },
  {
    id: 3,
    label: "Cover",
  },
];
const Movie = () => {
  const [movieResponse, setMovieResponse] = useState<MovieResponseType[]>([]);
  const [searchText, setSearchText] = useState<string>("titanic");
  const [error, setError] = useState(false);
  const [isStatus, setStatus] = useState<any>("Cover");
  const [formInput, setFormInput] = useState<FormType>({
    name: "",
    address: "",
    pinCode: "",
  });
  const { loading, data, error: errorCharacter } = useCharacter();
  const postQuery = useQuery(["post"], async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return result?.data;
  });
  console.log("postQuery", postQuery.data);

  const movieApiFetch = async () => {
    try {
      const response = await fetch(
        `https://omdbapi.com/?apikey=1a492dc5&s=${searchText}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovieResponse(data?.Search);
        setError(false);
      } else {
        setError(true);
        setMovieResponse([]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const debounce = setTimeout(() => {
      movieApiFetch();
    }, 1500);
    return () => clearTimeout(debounce);
  }, [searchText]);

  const handleCheck = (val: StatusType) => {
    setStatus(val?.label);
  };
  console.log(isStatus);
  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
  };
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  console.log(formInput);

  return (
    <Container>
      {/* <h1>Savio</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} /> */}

      {/* <MovieGridLayout>
        {movieResponse.map((val: MovieResponseType, index: number) => (
          <MovieCard
            key={index}
            poster={val?.Poster}
            title={val?.Title}
            year={val?.Year}
            imdbID={val?.imdbID}
          />
        ))}
        {error && (
          <div
            style={{
              marginTop: "200px",
              fontSize: "32px",

              display: "flex",
              justifyContent: "center",
            }}
          >
            Movie not found
          </div>
        )}
      </MovieGridLayout>
      <MovieGridLayout>
        {loading && <div>Loading</div>}
        {errorCharacter && <div>Something went wrong</div>}
        {data?.characters?.results?.map((val: CharacterType) => (
          <div key={val?.id} style={{ backgroundColor: "red" }}>
            <div style={{ backgroundColor: "red", height: "250px" }}>
              <img
                src={val?.image}
                alt={val?.name}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div>{val?.name}</div>
          </div>
        ))}
      </MovieGridLayout> */}
      <GridLayout>
        <GridContainer>
          {layout.length === 0 && <h1>No data found</h1>}
          {layout?.map((val, index: number) => (
            <Button
              isStatus={isStatus === val?.label}
              key={index}
              onClick={() => handleCheck(val)}
            >
              {val?.label}
            </Button>
          ))}
        </GridContainer>
      </GridLayout>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="address"
          name="name"
          value={formInput.name}
          onChange={handleForm}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="pin"
          name="address"
          value={formInput.address}
          onChange={handleForm}
        />
        <label htmlFor="name">PinCode</label>
        <input
          type="text"
          id="pin"
          name="pinCode"
          value={formInput.pinCode}
          onChange={handleForm}
        />
      </div>
      <div
        style={{ marginTop: "50px", backgroundColor: "red", height: "50px" }}
      >
        <label
          htmlFor="file"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            backgroundColor: "green",
          }}
        >
          <input id="file" type="file" style={{ display: "none" }} />
        </label>
      </div>
      {/* <div>
        {postQuery.isLoading && <div>Loading...</div>}
        {postQuery?.data?.map((post: PostType) => (
          <div key={post?.id}>{post.title}</div>
        ))}
      </div> */}
    </Container>
  );
};
export default Movie;

export const MovieGridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 15px;
  padding: 15px;
  animation: ${opacityAnimation} 1s;
`;
export const Container = styled.div<any>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  padding: 0 10px;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
export const Button = styled.button<any>`
  height: 40px;
  width: 100%;
  background-color: ${(props) => (props.isStatus ? "green" : "transparent")};
  border: 1px solid black;
  outline: none;
  border-radius: 50px;
  cursor: pointer;
`;
export const GridLayout = styled.div`
  margin-top: 10px;
  width: 500px;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
export const StyledLink = styled(NavLink)`
  /* ... */
`;
