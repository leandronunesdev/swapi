import React from "react";
import { Movie } from "../icons/Movie";
import "./styles.scss";
import Link from "next/link";

type ItemCardProps = {
  title: string;
  releaseDate: string;
};

export const ItemCard = ({ title, releaseDate }: ItemCardProps) => {
  const releaseYear = new Date(releaseDate).getFullYear();

  return (
    <Link className="item-card" href={"/films/ZmlsbXM6MQ=="}>
      <Movie />
      <p>{title}</p>
      <p>{releaseYear}</p>
    </Link>
  );
};
