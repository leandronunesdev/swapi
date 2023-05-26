import React from "react";
import { getClient } from "../../lib/client";
import { FilmCard } from "../../components";
import { GET_FILMS } from "@/lib/queries";
import { Film } from "@/constants/types";
import { CardsGrid } from "@/components/CardsGrid";

const Films = async () => {
  const { data } = await getClient().query({
    query: GET_FILMS,
  });

  return (
    <CardsGrid>
      {data.allFilms.films.map((film: Film) => {
        return <FilmCard film={film} key={film.id} />;
      })}
    </CardsGrid>
  );
};

export default Films;
