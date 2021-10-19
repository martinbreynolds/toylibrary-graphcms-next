import { GraphQLClient, gql } from "graphql-request";
import { useState } from "react";

export const getServerSideProps = async (pageContext) => {
  const endpoint = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const pageSlug = pageContext.query.slug;

  const query = gql`
    query($pageSlug: String!) {
      toy(where: { slug: $pageSlug }) {
        slug
        name
        description
        id
        borrowed
      }
    }
  `;

  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const toy = data.toy;

  return {
    props: {
      toy,
    },
  };
};

const changeToBorrowed = async (slug, borrowed) => {
  await fetch("/api/borrowed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug, borrowed }),
  });
  console.log(slug, borrowed);
};

const Toy = ({ toy }) => {
  const [borrowed, setBorrowed] = useState(toy.borrowed);

  return (
    <div>
      <a href={toy.slug}>{toy.name}</a>
      <p>{toy.description}</p>
      <p>{borrowed.toString()}</p>

      <button
        onClick={() => {
          changeToBorrowed(toy.slug, borrowed);
          borrowed ? setBorrowed(false) : setBorrowed(true);
        }}
      >
        BORROW
      </button>
    </div>
  );
};

export default Toy;
