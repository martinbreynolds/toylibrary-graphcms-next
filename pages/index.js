import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import ToyCard from "../components/toyCard";

const endpoint = process.env.ENDPOINT;

export async function getStaticProps() {
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
    <div>
      <h1 className="text-blue-600 text-6xl text-center">
        Sensory Toy Library
      </h1>
      <ToyCard toys={toys} />
    </div>
  );
}
