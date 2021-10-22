import { GraphQLClient, gql } from "graphql-request";

// eslint-disable-next-line import/no-anonymous-default-export
export default async ({ body }, res) => {
  const endpoint = process.env.ENDPOINT;
  const graphcms = new GraphQLClient(endpoint, {
    headers: { Authorization: process.env.GRAPH_CMS_TOKEN },
  });


  const variables = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email
  };

  const mutation = gql`
  mutation($firstName: String!, $lastname: String!, $email: String!) {
    createMember data: { firstName: $firstName, lastName: $lastName, email: $email }) {
      firstName
      lastName
      email
    }
  }
`;

  await graphcms.request(mutation, variables);
  await graphcms.request(publish, variables);

}