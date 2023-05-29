import { CustomLink, DetailsPage, PlanetIcon } from "@/components";
import { Character, Film, Planet } from "@/constants/types";
import { getClient } from "@/lib/client";
import { GET_PLANET } from "@/lib/queries";
import React from "react";
import "./styles.scss";

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
    <DetailsPage className="planet">
      <div>
        <PlanetIcon size={40} />
      </div>
      <h1>{name}</h1>
      <p>
        Population: <strong>{population}</strong>
      </p>
      <p>
        Diameter: <strong>{diameter}</strong>
      </p>
      <p>
        Orbital Period: <strong>{orbitalPeriod}</strong>
      </p>
      <p>
        Rotation Period: <strong>{rotationPeriod}</strong>
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
    </DetailsPage>
  );
};

export default PlanetDetails;
