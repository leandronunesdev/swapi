import React from "react";
import { getClient } from "@/lib/client";
import { GET_FILM } from "@/lib/queries";
import { Character, Film, Planet } from "@/constants/types";
import { convertToRoman } from "@/utils/convertToRoman";
import { CustomLink, DetailsPage, FilmIcon } from "@/components";

type FilmData = {
  data: {
    film: Film;
  };
};

const FilmDetails = async ({ params }: { params: { slug: string } }) => {
  const id = params.slug.replace("%3D", "=");

  const { data }: FilmData = await getClient().query({
    query: GET_FILM,
    variables: { id: id },
  });

  const {
    title,
    episodeID,
    releaseDate,
    director,
    openingCrawl,
    characterConnection,
    planetConnection,
  } = data.film;

  const releaseYear = new Date(releaseDate).getFullYear();

  return (
    <DetailsPage>
      <div>
        <FilmIcon size={40} />
      </div>
      <h1>
        Episode {convertToRoman(episodeID)} - {title}
      </h1>
      <h2>Year: {releaseYear}</h2>
      <h2>Director: {director}</h2>
      <p>{openingCrawl}</p>
      <h2>Characters:</h2>
      <ul>
        {characterConnection.characters.map((character: Character) => (
          <CustomLink
            title={character.name}
            key={character.id}
            id={character.id}
            type={"characters"}
          />
        ))}
      </ul>
      <h2>Planets:</h2>
      <ul>
        {planetConnection.planets.map((planet: Planet) => (
          <CustomLink
            title={planet.name}
            key={planet.id}
            id={planet.id}
            type={"planets"}
          />
        ))}
      </ul>
    </DetailsPage>
  );
};

export default FilmDetails;
