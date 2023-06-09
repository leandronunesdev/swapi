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
          id
        }
      }
      planetConnection {
        planets {
          name
          id
        }
      }
    }
  }
`;

export const GET_PEOPLE = gql`
  query allPeople {
    allPeople {
      people {
        name
        id
      }
    }
  }
`;

export const GET_PERSON = gql`
  query person($id: ID) {
    person(id: $id) {
      name
      homeworld {
        name
        id
      }
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      filmConnection {
        films {
          title
          id
        }
      }
    }
  }
`;

export const GET_PLANETS = gql`
  query allPlanets {
    allPlanets {
      planets {
        name
        id
      }
    }
  }
`;

export const GET_PLANET = gql`
  query planet($id: ID) {
    planet(id: $id) {
      name
      climates
      diameter
      orbitalPeriod
      population
      rotationPeriod
      surfaceWater
      terrains
      filmConnection {
        films {
          title
          id
        }
      }
      residentConnection {
        residents {
          name
          id
        }
      }
    }
  }
`;
