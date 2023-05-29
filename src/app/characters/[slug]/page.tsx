import { CharacterIcon, CustomLink, DetailsPage } from "@/components";
import { Character, Film } from "@/constants/types";
import { getClient } from "@/lib/client";
import { GET_PERSON } from "@/lib/queries";
import React from "react";
import Link from "next/link";

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
    filmConnection,
  } = data.person;

  return (
    <DetailsPage>
      <div>
        <CharacterIcon size={40} />
      </div>
      <h1>{name}</h1>
      <p>
        Homeworld:{" "}
        <strong>
          <Link href={`/planets/${homeworld.id}`}>{homeworld.name}</Link>
        </strong>
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
      <p>Films:</p>
      <ul>
        {filmConnection.films.map((film: Film) => (
          <CustomLink
            title={film.title}
            key={film.id}
            id={film.id}
            type={"films"}
          />
        ))}{" "}
      </ul>
    </DetailsPage>
  );
};

export default CharacterDetails;
