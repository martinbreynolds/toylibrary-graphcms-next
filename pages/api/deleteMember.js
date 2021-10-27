import { GraphQLClient, gql } from "graphql-request";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const endpoint = process.env.ENDPOINT;
  const graphcms = new GraphQLClient(endpoint, {
    headers: { Authorization: process.env.GRAPH_CMS_TOKEN },
  });

  const variables = {
    id: req.body.e,
  };

  console.log(variables);

  const mutation = gql`
    mutation deleteMember($id: ID!) {
      deleteMember(where: { id: $id }) {
        id
        firstName
        lastName
        email
      }
    }
  `;

  await graphcms.request(mutation, variables);

  res.status(200).send("ok");
};
