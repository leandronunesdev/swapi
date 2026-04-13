import { CustomLink, DetailsPage, PlanetIcon } from "@/components";
import { Character, Film, Planet } from "@/constants/types";
import { getClient } from "@/lib/client";
import { GET_PLANET } from "@/lib/queries";
import React from "react";
import displayText from "@/utils/displayText";

type PlanetData = {
  data: {
    planet: Planet | null;
  };
};

const PlanetDetails = async ({ params }: { params: { slug: string } }) => {
  const id = params.slug.replace("%3D", "=");

  const { data }: PlanetData = await getClient().query({
    query: GET_PLANET,
    variables: { id: id },
  });

  const planet = data.planet;

  if (!planet) {
    return (
      <DetailsPage>
        <h1>Planet not found</h1>
      </DetailsPage>
    );
  }

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
  } = planet;

  return (
    <DetailsPage>
      <div>
        <PlanetIcon size={40} />
      </div>
      <h1>{displayText(name)}</h1>
      <p>
        Population:{" "}
        <strong>
          {population == null
            ? displayText(null)
            : population.toLocaleString("en-US")}
        </strong>
      </p>
      <p>
        Diameter:{" "}
        <strong>
          {diameter == null
            ? displayText(null)
            : diameter.toLocaleString("en-US")}
        </strong>
      </p>
      <p>
        Orbital Period:{" "}
        <strong>
          {orbitalPeriod == null
            ? displayText(null)
            : `${orbitalPeriod} days`}
        </strong>
      </p>
      <p>
        Rotation Period:{" "}
        <strong>
          {rotationPeriod == null
            ? displayText(null)
            : `${rotationPeriod} hours`}
        </strong>
      </p>
      <p>
        Surface Water:{" "}
        <strong>
          {surfaceWater == null
            ? displayText(null)
            : `${surfaceWater}%`}
        </strong>
      </p>
      <p>Climates:</p>
      {!climates || climates.length === 0 ? (
        <p>
          <strong>Unknown</strong>
        </p>
      ) : (
        <ul>
          {climates.map((climate: string) => (
            <li key={climate}>{displayText(climate)}</li>
          ))}
        </ul>
      )}
      <p>Terrains:</p>
      {!terrains || terrains.length === 0 ? (
        <p>
          <strong>Unknown</strong>
        </p>
      ) : (
        <ul>
          {terrains.map((terrain: string) => (
            <li key={terrain}>{displayText(terrain)}</li>
          ))}
        </ul>
      )}
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
      {residentConnection.residents.length > 0 && (
        <>
          <p>Characters:</p>
          <ul>
            {residentConnection.residents.map((character: Character) => (
              <CustomLink
                title={displayText(character.name)}
                key={character.id}
                id={character.id}
                type={"characters"}
              />
            ))}
          </ul>
        </>
      )}
    </DetailsPage>
  );
};

export default PlanetDetails;
