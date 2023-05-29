import { CustomLink, DetailsPage, PlanetIcon } from "@/components";
import { Character, Film, Planet } from "@/constants/types";
import { getClient } from "@/lib/client";
import { GET_PLANET } from "@/lib/queries";
import React from "react";

type PlanetData = {
  data: {
    planet: Planet;
  };
};

const PlanetDetails = async ({ params }: { params: { slug: string } }) => {
  const id = params.slug.replace("%3D", "=");

  const { data }: PlanetData = await getClient().query({
    query: GET_PLANET,
    variables: { id: id },
  });

  const {
    name,
    population,
    diameter,
    orbitalPeriod,
    rotationPeriod,
    surfaceWater,
    climates,
    terrains,
    filmConnection,
    residentConnection,
  } = data.planet;

  return (
    <DetailsPage>
      <div>
        <PlanetIcon size={40} />
      </div>
      <h1>{name}</h1>
      {population && (
        <p>
          Population: <strong>{population.toLocaleString("en-US")}</strong>
        </p>
      )}
      {diameter && (
        <p>
          Diameter: <strong>{diameter.toLocaleString("en-US")}</strong>
        </p>
      )}
      <p>
        Orbital Period: <strong>{orbitalPeriod} days</strong>
      </p>
      <p>
        Rotation Period: <strong>{rotationPeriod} hours</strong>
      </p>
      <p>
        Surface Water: <strong>{surfaceWater}%</strong>
      </p>
      <p>Climates:</p>
      <ul>
        {climates.map((climate: string) => (
          <li key={climate}>{climate}</li>
        ))}{" "}
      </ul>
      <p>Terrains:</p>
      <ul>
        {terrains.map((terrains: string) => (
          <li key={terrains}>{terrains}</li>
        ))}{" "}
      </ul>
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
      {residentConnection.residents.length > 0 && (
        <>
          <p>Characters:</p>
          <ul>
            {residentConnection.residents.map((character: Character) => (
              <CustomLink
                title={character.name}
                key={character.id}
                id={character.id}
                type={"characters"}
              />
            ))}{" "}
          </ul>
        </>
      )}
    </DetailsPage>
  );
};

export default PlanetDetails;
