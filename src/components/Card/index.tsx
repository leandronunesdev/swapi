import React from "react";
import { CharacterIcon, FilmIcon, PlanetIcon } from "../icons";
import "./styles.scss";
import Link from "next/link";
import { convertToRoman } from "@/utils/convertToRoman";

type CardProps = {
  cardType: "films" | "characters" | "planets";
  name: string;
  id: string;
  episodeID?: number;
  releaseDate?: string;
};

export const Card = ({
  cardType,
  name,
  id,
  episodeID,
  releaseDate,
}: CardProps) => {
  const slug = id;

  return (
    <Link className="item-card" href={`/${cardType}/${slug}`}>
      {cardType === "films" && <FilmIcon />}
      {cardType === "characters" && <CharacterIcon />}
      {cardType === "planets" && <PlanetIcon />}
      {episodeID && <p>Episode {convertToRoman(episodeID)}</p>}
      <p>{name}</p>
      {releaseDate && <p>{new Date(releaseDate).getFullYear()}</p>}
    </Link>
  );
};
