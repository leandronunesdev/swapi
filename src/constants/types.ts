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
  homeworld: Planet | null;
  birthYear: string | null;
  eyeColor: string | null;
  gender: string | null;
  hairColor: string | null;
  height: number | null;
  mass: number | null;
  skinColor: string | null;
  filmConnection: {
    films: Film[];
  };
};

export type Planet = {
  name: string;
  id: string;
  climates: string[] | null;
  diameter: number | null;
  orbitalPeriod: number | null;
  population: number | null;
  rotationPeriod: number | null;
  surfaceWater: number | null;
  terrains: string[] | null;
  filmConnection: {
    films: Film[];
  };
  residentConnection: {
    residents: Character[];
  };
};
