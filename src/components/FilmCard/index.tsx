import React from "react";
import { MovieIcon } from "../icons";
import "./styles.scss";
import Link from "next/link";
import { Film } from "@/constants/types";
import { convertToRoman } from "@/utils/convertToRoman";

type ItemCardProps = {
  film: Film;
};

export const FilmCard = ({ film }: ItemCardProps) => {
  const releaseYear = new Date(film.releaseDate).getFullYear();
  // const slug = film.id.slice(0, 10);

  return (
    <Link className="item-card" href={`/films/${film.id}`}>
      <MovieIcon />
      <p>Episode {convertToRoman(film.episodeID)}</p>
      <p>{film.title}</p>
      <p>{releaseYear}</p>
    </Link>
  );
};
