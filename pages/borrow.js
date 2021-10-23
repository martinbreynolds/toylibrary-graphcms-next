import { GraphQLClient, gql } from "graphql-request";
import { useState } from "react";
import BorrowMemberSearch from "../components/borrowing/borrowMemberSearch";

export const getServerSideProps = async () => {
  const endpoint = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query {
      members {
        id
        firstName
        lastName
        email
      }
    }
  `;

  const { members } = await graphQLClient.request(query);

  return {
    props: {
      members,
    },
  };
};

export default function ItemBorrow({ members }) {
  return (
    <div>
      <BorrowMemberSearch members={members} />
    </div>
  );
}
