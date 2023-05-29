import { Card, CardsGrid } from "@/components";
import { Character } from "@/constants/types";
import { getClient } from "@/lib/client";
import { GET_PEOPLE } from "@/lib/queries";
import React from "react";

const Characters = async () => {
  const { data } = await getClient().query({
    query: GET_PEOPLE,
  });

  return (
    <CardsGrid>
      {data.allPeople.people.map((character: Character) => {
        return (
          <Card
            name={character.name}
            cardType={"characters"}
            id={character.id}
            key={character.id}
          />
        );
      })}
    </CardsGrid>
  );
};

export default Characters;
