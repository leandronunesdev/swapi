import { getClient } from "@/lib/client";
import { GET_FILM } from "@/lib/queries";
import React from "react";

const FilmDetails = async () => {
  const { data } = await getClient().query({
    query: GET_FILM,
    variables: { id: "ZmlsbXM6MQ==" },
  });

  return <div>{data.film.title}</div>;
};

export default FilmDetails;
