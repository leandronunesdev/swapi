import { getClient } from "@/app/lib/client";
import { gql } from "@apollo/client";
import React from "react";

const query = gql`
  query Film($id: ID) {
    film(id: $id) {
      title
    }
  }
`;

const FilmDetails = async ({ slug }: any) => {
  console.log(slug);

  const { data } = await getClient().query({
    query,
    variables: { id: "ZmlsbXM6MQ==" },
  });

  console.log(data.film.title);

  return <div>{data.film.title}</div>;
};

export async function getServerSideProps({ params }: any) {
  const { slug } = params;

  // You can also fetch data based on the slug here
  // const data = await fetchData(slug);

  return {
    props: {
      slug,
      // data
    },
  };
}

export default FilmDetails;
