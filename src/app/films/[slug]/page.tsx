import { getClient } from "@/lib/client";
import { GET_FILM } from "@/lib/queries";
import React from "react";

const FilmDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const { data } = await getClient().query({
    query: GET_FILM,
    variables: { id: slug },
  });

  return <div>{data.film.title}</div>;
};

export default FilmDetails;
