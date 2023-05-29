import { Card, CardsGrid } from "@/components";
import { Planet } from "@/constants/types";
import { getClient } from "@/lib/client";
import { GET_PLANETS } from "@/lib/queries";
import React from "react";

const Planets = async () => {
  const { data } = await getClient().query({
    query: GET_PLANETS,
  });

  console.log(data.allPlanets.planets);
  return (
    <CardsGrid>
      {data.allPlanets.planets.map((planet: Planet) => {
        return (
          <Card
            cardType={"planets"}
            name={planet.name}
            id={planet.id}
            key={planet.id}
          />
        );
      })}
    </CardsGrid>
  );
};

export default Planets;
