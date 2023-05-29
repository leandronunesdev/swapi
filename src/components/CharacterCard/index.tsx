import React from "react";
import { CharacterIcon } from "../icons";
import "./styles.scss";
import Link from "next/link";
import { Character } from "@/constants/types";

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const slug = character.id;

  return (
    <Link className="item-card" href={`/characters/${slug}`}>
      <CharacterIcon />
      <p>{character.name}</p>
    </Link>
  );
};
