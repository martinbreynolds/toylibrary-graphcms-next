import { GraphQLClient, gql } from "graphql-request";
import { useState } from "react";
import BorrowMemberSearch from "../components/borrowing/borrow";

export const getServerSideProps = async () => {
  const endpoint = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query {
      toys(where: { borrowed: false }) {
        id
        borrowed
        name
        description
      }
      members {
        id
        firstName
        lastName
        email
      }
    }
  `;

  const { members, toys } = await graphQLClient.request(query);

  return {
    props: {
      members,
      toys,
    },
  };
};

export default function ItemBorrow({ members, toys }) {
  return (
    <div>
      <BorrowMemberSearch members={members} toys={toys} />
    </div>
  );
}
