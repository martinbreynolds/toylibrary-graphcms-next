import { GraphQLClient, gql } from "graphql-request";
import ToyCard from "../components/toyCard";

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
      members {
        id
        firstName
        lastName
        email
      }
    }
  `;

  const { toys, members } = await graphQLClient.request(query);

  return {
    props: {
      toys,
      members,
    },
  };
}

export default function Home({ toys, members }) {
  console.log(toys, members);

  return <>Landing Page</>;
}
