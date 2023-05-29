import { CharacterIcon, DetailsPage } from "@/components";
import { Character } from "@/constants/types";
import { getClient } from "@/lib/client";
import { GET_PERSON } from "@/lib/queries";
import React from "react";
import "./styles.scss";

type CharacterData = {
  data: {
    person: Character;
  };
};

const CharacterDetails = async ({ params }: { params: { slug: string } }) => {
  const id = params.slug.replace("%3D", "=");

  const { data }: CharacterData = await getClient().query({
    query: GET_PERSON,
    variables: { id: id },
  });

  const {
    name,
    homeworld,
    birthYear,
    eyeColor,
    gender,
    hairColor,
    height,
    mass,
    skinColor,
  } = data.person;

  return (
    <DetailsPage className="character">
      <div>
        <CharacterIcon size={40} />
      </div>
      <h1>{name}</h1>
      <p>
        Homeworld: <strong>{homeworld.name}</strong>
      </p>
      <p>
        Birth Year: <strong>{birthYear}</strong>
      </p>
      <p>
        Gender: <strong>{gender}</strong>
      </p>
      <p>
        Height: <strong>{height / 100}m</strong>
      </p>
      <p>
        Weight: <strong>{mass}kg</strong>
      </p>
      <p>
        Eye Color: <strong>{eyeColor}</strong>
      </p>
      <p>
        Hair color: <strong>{hairColor}</strong>
      </p>
      <p>
        Skin Color: <strong>{skinColor}</strong>
      </p>
    </DetailsPage>
  );
};

export default CharacterDetails;
