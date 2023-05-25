import React, { useState } from "react";
import { getClient } from "../lib/client";
import { gql } from "@apollo/client";
import { ItemCard } from "../components";
import "./styles.scss";

const query = gql`
  query Films {
    allFilms {
      films {
        title
        releaseDate
      }
    }
  }
`;

type Film = {
  title: string;
  releaseDate: string;
};

const Films = async () => {
  const { data } = await getClient().query({
    query,
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
