import React from "react";
import { getClient } from "../../lib/client";
import { FilmCard } from "../../components";
import "./styles.scss";
import { GET_FILMS } from "@/lib/queries";
import { Film } from "@/constants/types";

const Films = async () => {
  const { data } = await getClient().query({
    query: GET_FILMS,
  });

  return (
    <div className="films">
      {data.allFilms.films.map((film: Film) => {
        return <FilmCard film={film} key={film.id} />;
      })}
    </div>
  );
};

export default Films;
