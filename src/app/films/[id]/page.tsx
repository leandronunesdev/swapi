import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import React from "react";

const query = gql`
  query Film($id: ID) {
    film(id: $id) {
      title
    }
  }
`;

const FilmDetails = async () => {
  const { data } = await getClient().query({
    query,
    variables: { id: "ZmlsbXM6MQ==" },
  });

  console.log(data.film.title);

  return <div>{data.film.title}</div>;
};

export default FilmDetails;
