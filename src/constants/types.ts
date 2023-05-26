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
};

export type Planet = {
  name: string;
};
