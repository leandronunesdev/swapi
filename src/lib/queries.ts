import { gql } from "@apollo/client";

export const GET_FILMS = gql`
  query Films {
    allFilms {
      films {
        title
        releaseDate
        id
        episodeID
      }
    }
  }
`;

export const GET_FILM = gql`
  query Film($id: ID) {
    film(id: $id) {
      title
      episodeID
      releaseDate
      director
      openingCrawl
      characterConnection {
        characters {
          name
        }
      }
      planetConnection {
        planets {
          name
        }
      }
    }
  }
`;

export const GET_ALL_PEOPLE = gql`
  query allPeople {
    allPeople {
      people {
        name
        id
      }
    }
  }
`;
