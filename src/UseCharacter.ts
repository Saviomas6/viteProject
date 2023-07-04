import { gql, useQuery } from "@apollo/client";
const GET_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
export const useCharacter = () => {
  const { loading, error, data } = useQuery(GET_CHARACTER);
  return { loading, data, error };
};
