import { CharacterIcon, CustomLink, DetailsPage } from "@/components";
import { Character, Film } from "@/constants/types";
import { getClient } from "@/lib/client";
import { GET_PERSON } from "@/lib/queries";
import React from "react";
import Link from "next/link";
import displayText from "@/utils/displayText";

type CharacterData = {
  data: {
    person: Character | null;
  };
};

const CharacterDetails = async ({ params }: { params: { slug: string } }) => {
  const id = params.slug.replace("%3D", "=");

  const {
    data: { person },
  }: CharacterData = await getClient().query({
    query: GET_PERSON,
    variables: { id: id },
  });

  if (!person) {
    return (
      <DetailsPage>
        <h1>Character not found</h1>
      </DetailsPage>
    );
  }

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
  } = person;

  return (
    <DetailsPage>
      <div>
        <CharacterIcon size={40} />
      </div>
      <h1>{displayText(name)}</h1>
      <p>
        Homeworld:{" "}
        {homeworld ? (
          <strong>
            <Link href={`/planets/${homeworld.id}`}>
              {displayText(homeworld.name)}
            </Link>
          </strong>
        ) : (
          <strong>Unknown</strong>
        )}
      </p>
      <p>
        Birth Year: <strong>{displayText(birthYear)}</strong>
      </p>
      <p>
        Gender: <strong>{displayText(gender)}</strong>
      </p>
      <p>
        Height:{" "}
        <strong>
          {height == null ? displayText(null) : `${height / 100}m`}
        </strong>
      </p>
      <p>
        Weight:{" "}
        <strong>{mass == null ? displayText(null) : `${mass}kg`}</strong>
      </p>
      <p>
        Eye Color: <strong>{displayText(eyeColor)}</strong>
      </p>
      <p>
        Hair color: <strong>{displayText(hairColor)}</strong>
      </p>
      <p>
        Skin Color: <strong>{displayText(skinColor)}</strong>
      </p>
      <p>Films:</p>
      {filmConnection.films.length === 0 ? (
        <p>
          <strong>Unknown</strong>
        </p>
      ) : (
        <ul>
          {filmConnection.films.map((film: Film) => (
            <CustomLink
              title={displayText(film.title)}
              key={film.id}
              id={film.id}
              type={"films"}
            />
          ))}
        </ul>
      )}
    </DetailsPage>
  );
};

export default CharacterDetails;
