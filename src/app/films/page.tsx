import React from "react";
import { getClient } from "../../lib/client";
import { Card, CardsGrid } from "../../components";
import { GET_FILMS } from "@/lib/queries";
import { Film } from "@/constants/types";

const Films = async () => {
  const { data } = await getClient().query({
    query: GET_FILMS,
  });

  return (
    <CardsGrid>
      {data.allFilms.films.map((film: Film) => {
        return (
          <Card
            name={film.title}
            cardType={"films"}
            episodeID={film.episodeID}
            releaseDate={film.releaseDate}
            id={film.id}
            key={film.id}
          />
        );
      })}
    </CardsGrid>
  );
};

export default Films;
