import React from "react";
import { Movie } from "../icons/Movie";
import "./styles.scss";

type ItemCardProps = {
  title: string;
  releaseDate: string;
};

export const ItemCard = ({ title, releaseDate }: ItemCardProps) => {
  const releaseYear = new Date(releaseDate).getFullYear();

  return (
    <div className="item-card">
      <Movie />
      <p>{title}</p>
      <p>{releaseYear}</p>
    </div>
  );
};
