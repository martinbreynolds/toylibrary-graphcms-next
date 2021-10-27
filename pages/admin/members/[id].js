import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

export const getServerSideProps = async (pageContext) => {
  const endpoint = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const pageID = pageContext.query.id;

  const query = gql`
    query($pageID: ID!) {
      member(where: { id: $pageID }) {
        firstName
        lastName
        email
      }

      members {
        email
        firstName
        lastName
      }
    }
  `;

  const variables = {
    pageID,
  };

  const data = await graphQLClient.request(query, variables);
  const member = data.member;
  const members = data.members;

  return {
    props: {
      member,
      members,
    },
  };
};

const Member = ({ member }) => {
  console.log(member);
  return (
    <div>
      <p>{member.firstName}</p>
      <p>{member.lastName}</p>
      <p>{member.email}</p>
      <p>
        <Link href={`/members`}>Back</Link>
      </p>
    </div>
  );
};

export default Member;
