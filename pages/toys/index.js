import { GraphQLClient, gql } from "graphql-request";

import ToyCard from "../../components/toyCard";

const endpoint = process.env.ENDPOINT;

export async function getServerSideProps() {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query {
      toys {
        id
        borrowed
        name
        slug
        toyCategory
        description
        toyImage {
          url
        }
      }
    }
  `;

  const { toys } = await graphQLClient.request(query);

  return {
    props: {
      toys,
    },
  };
}

export default function Home({ toys }) {
  console.log(toys);

  return (
    <>
      <ToyCard toys={toys} />
    </>
  );
}
