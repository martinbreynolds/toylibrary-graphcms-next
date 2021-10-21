import { GraphQLClient, gql } from "graphql-request";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

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

const Toy = ({ toy }) => {
  const [borrowed, setBorrowed] = useState(toy.borrowed);
  const router = useRouter();

  const changeToBorrowed = async (slug, borrowed) => {
    const toyMutated = await fetch("/api/borrowed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug, borrowed }),
    });
    console.log(toyMutated);

    router.reload(window.location.pathname);
  };

  console.log(toy);
  return (
    <div>
      <a href={toy.slug}>{toy.name}</a>
      <p>{toy.description}</p>
      <p>{borrowed.toString()}</p>

      {borrowed ? (
        <button
          onClick={() => {
            changeToBorrowed(toy.slug, false);
          }}
        >
          UNBORROW
        </button>
      ) : (
        <button
          onClick={() => {
            changeToBorrowed(toy.slug, true);
          }}
        >
          BORROW
        </button>
      )}
      <Link href={`/`}>Back</Link>
    </div>
  );
};

export default Toy;
