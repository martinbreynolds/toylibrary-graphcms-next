import { GraphQLClient, gql } from "graphql-request";

// eslint-disable-next-line import/no-anonymous-default-export
export default async ({ body }, res) => {
  const endpoint = process.env.ENDPOINT;
  const graphcms = new GraphQLClient(endpoint, {
    headers: { Authorization: process.env.GRAPH_CMS_TOKEN },
  });

  const variables = {
    id: body.id,
    email: body.email,
  };

  const mutation = gql`
    mutation updateToy($id: ID!, $email: String!) {
      updateToy(
        data: { borrowed: true, member: { connect: { email: $email } } }
        where: { id: $id }
      ) {
        name
        description
        slug
        toyCategory
        borrowed
      }
    }
  `;

  const publish = gql`
    mutation($id: ID!) {
      publishToy(where: { id: $id }, to: PUBLISHED) {
        slug
      }
    }
  `;

  await graphcms.request(mutation, variables);
  await graphcms.request(publish, variables);

  res.status(200).end();
};
