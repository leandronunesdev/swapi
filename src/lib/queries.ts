import { gql } from "@apollo/client";

export const GET_FILMS = gql`
  query Films {
    allFilms {
      films {
        title
        releaseDate
      }
    }
  }
`;

export const GET_FILM = gql`
  query Film($id: ID) {
    film(id: $id) {
      title
    }
  }
`;
