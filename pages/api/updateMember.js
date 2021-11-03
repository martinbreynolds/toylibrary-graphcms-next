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
    email: body.email,
  };

  const mutation = gql`
    mutation updateMember(
      $firstName: String!
      $lastName: String!
      $email: String!
    ) {
      updateMember(
        data: { firstName: $firstName, lastName: $lastName, email: $email }
        where: { email: $email }
      ) {
        firstName
        lastName
        email
      }
    }
  `;

  const publish = gql`
    mutation($email: String!) {
      publishMember(where: { email: $email }, to: PUBLISHED) {
        email
      }
    }
  `;

  await graphcms.request(mutation, variables);
  await graphcms.request(publish, variables);

  console.log(res.json());
  try {
  } catch (error) {
    console.log(error);
  }
};
