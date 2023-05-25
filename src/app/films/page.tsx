import React, { useState } from "react";
import { getClient } from "../lib/client";
import { gql } from "@apollo/client";

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
    // context: {
    //   fetchOptions: {
    //     next: { revalidate: 5 },
    //   },
    // },
  });

  // console.log(data.allFilms.films[0].title);

  // const [films, setFilms] = useState<Film[]>([]);

  // if (data) {
  //   setFilms(data.allFilms.films);
  // }

  return (
    <div>
      {data.allFilms.films.map((film: Film) => {
        return (
          <li key={film.title}>
            {film.title} - {film.releaseDate}
          </li>
        );
      })}
    </div>
  );
};

export default Films;
