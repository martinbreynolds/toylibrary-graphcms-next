import { GraphQLClient, gql } from "graphql-request";

// eslint-disable-next-line import/no-anonymous-default-export
export default async ({ body }, res) => {
  try {
    const endpoint = process.env.ENDPOINT;
    const graphcms = new GraphQLClient(endpoint, {
      headers: { Authorization: process.env.GRAPH_CMS_TOKEN },
    });

    const variables = {
      id: body.id,
    };

    const mutation = gql`
      mutation updateToy($id: ID!) {
        updateToy(
          data: { borrowed: false, member: { disconnect: true } }
          where: { id: $id }
        ) {
          slug
        }
      }
    `;

    const publish = gql`
      mutation publishToy($id: ID!) {
        publishToy(where: { id: $id }, to: PUBLISHED) {
          slug
        }
      }
    `;

    await graphcms.request(mutation, variables);
    const data = await graphcms.request(publish, variables);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(console.error(error));
  }
};
