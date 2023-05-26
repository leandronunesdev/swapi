import React from "react";
import { MovieIcon } from "../icons";
import "./styles.scss";
import Link from "next/link";
import { Film } from "@/constants/types";
import { convertToRoman } from "@/utils/convertToRoman";

type ItemCardProps = {
  film: Film;
};

export const ItemCard = ({ film }: ItemCardProps) => {
  const releaseYear = new Date(film.releaseDate).getFullYear();
  const slug = film.id.slice(0, 10);

  return (
    <Link className="item-card" href={`/films/${slug}`}>
      <MovieIcon />
      <p>Episode {convertToRoman(film.episodeID)}</p>
      <p>{film.title}</p>
      <p>{releaseYear}</p>
    </Link>
  );
};
