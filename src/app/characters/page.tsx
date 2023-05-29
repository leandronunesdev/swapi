import { CharacterCard } from "@/components";
import { CardsGrid } from "@/components/CardsGrid";
import { Character } from "@/constants/types";
import { getClient } from "@/lib/client";
import { GET_ALL_PEOPLE } from "@/lib/queries";
import React from "react";

const Characters = async () => {
  const { data } = await getClient().query({
    query: GET_ALL_PEOPLE,
  });

  return (
    <CardsGrid>
      {data.allPeople.people.map((character: Character) => {
        return <CharacterCard character={character} key={character.id} />;
      })}
    </CardsGrid>
  );
};

export default Characters;
