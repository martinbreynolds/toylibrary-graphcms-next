import { GraphQLClient, gql } from "graphql-request";
import AdminSiteLayout from "../../../components/layouts/adminSiteLayout";

import ToyCard from "../../../components/toys/toyCard";

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

export default function Toys({ toys }) {
  console.log(toys);

  return <ToyCard toys={toys} />;
}

Toys.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
