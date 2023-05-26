import React from "react";
import { Movie } from "../icons/Movie";
import "./styles.scss";
import Link from "next/link";
import { Film } from "@/constants/types";

type ItemCardProps = {
  film: Film;
};

export const ItemCard = ({ film }: ItemCardProps) => {
  const releaseYear = new Date(film.releaseDate).getFullYear();
  const slug = film.id.slice(0, 10);

  return (
    <Link className="item-card" href={`/films/${slug}`}>
      <Movie />
      <p>{film.title}</p>
      <p>{releaseYear}</p>
    </Link>
  );
};
