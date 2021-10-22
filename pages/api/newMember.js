import { GraphQLClient, gql } from "graphql-request";

// eslint-disable-next-line import/no-anonymous-default-export
export default async ({ body, res }) => {
  console.log(body);
  const endpoint = process.env.ENDPOINT;
  const graphcms = new GraphQLClient(endpoint, {
    headers: { Authorization: process.env.GRAPH_CMS_TOKEN },
  });

  const variables = {
    firstName: body.fName,
    lastName: body.lName,
    email: body.email,
  };

  console.log(variables);

  const mutation = gql`
    mutation createMember(
      $firstName: String!
      $lastName: String!
      $email: String!
    ) {
      createMember(
        data: { firstName: $firstName, lastName: $lastName, email: $email }
      ) {
        id
      }
    }
  `;

  const publish = gql`
    mutation($email: String) {
      publishMember(where: { email: $email }, to: PUBLISHED) {
        id
        email
      }
    }
  `;

  await graphcms.request(mutation, variables);
  await graphcms.request(publish, variables);
};
