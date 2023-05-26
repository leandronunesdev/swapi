import React from "react";
import { getClient } from "@/lib/client";
import { GET_FILM } from "@/lib/queries";
import "./styles.scss";
import { Character, Film } from "@/constants/types";
import { convertToRoman } from "@/utils/convertToRoman";
import { MovieIcon } from "@/components/icons";

type FilmData = {
  data: {
    film: Film;
  };
};

const FilmDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const { data }: FilmData = await getClient().query({
    query: GET_FILM,
    variables: { id: slug },
  });

  const {
    title,
    episodeID,
    releaseDate,
    director,
    openingCrawl,
    characterConnection,
  } = data.film;

  console.log("here", characterConnection.characters);

  const releaseYear = new Date(releaseDate).getFullYear();

  return (
    <div className="film">
      <div>
        <MovieIcon size={40} />
      </div>
      <h1>
        Episode {convertToRoman(episodeID)} - {title}
      </h1>
      <h2>Year: {releaseYear}</h2>
      <h2>Director: {director}</h2>
      <p>{openingCrawl}</p>
      <h2>Characters:</h2>
      <ul>
        {characterConnection.characters.map((character): JSX.Element => {
          return <li key={character.name}>{character.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FilmDetails;
