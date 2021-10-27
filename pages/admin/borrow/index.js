import { GraphQLClient, gql } from "graphql-request";
import BorrowMemberSearch from "../../../components/borrowing/borrow";
import AdminSiteLayout from "../../../components/layouts/adminSiteLayout";

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

export default function Borrow({ members, toys }) {
  console.log(members, toys);
  return (
    <>
      <BorrowMemberSearch members={members} toys={toys} />
    </>
  );
}

Borrow.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
