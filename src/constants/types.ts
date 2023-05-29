export type Film = {
  title: string;
  episodeID: number;
  releaseDate: string;
  director: string;
  openingCrawl: string;
  characterConnection: {
    characters: Character[];
  };
  planetConnection: {
    planets: Planet[];
  };
  id: string;
};

export type Character = {
  name: string;
  id: string;
  homeworld: Planet;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: number;
  mass: number;
  skinColor: string;
  filmConnection: {
    films: Film[];
  };
};

export type Planet = {
  name: string;
  id: string;
  climates: string[];
  diameter: number;
  orbitalPeriod: number;
  population: number;
  rotationPeriod: number;
  surfaceWater: number;
  terrains: string[];
  filmConnection: {
    films: Film[];
  };
  residentConnection: {
    residents: Character[];
  };
};
