import React from "react";
import { getClient } from "../../lib/client";
import { ItemCard } from "../../components";
import "./styles.scss";
import { GET_FILMS } from "@/lib/queries";

type Film = {
  title: string;
  releaseDate: string;
};

const Films = async () => {
  const { data } = await getClient().query({
    query: GET_FILMS,
  });

  return (
    <div className="films">
      {data.allFilms.films.map((film: Film) => {
        return (
          <ItemCard
            key={film.title}
            title={film.title}
            releaseDate={film.releaseDate}
          />
        );
      })}
    </div>
  );
};

export default Films;
