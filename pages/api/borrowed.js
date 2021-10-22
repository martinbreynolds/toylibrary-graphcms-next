import { GraphQLClient, gql } from "graphql-request";

// eslint-disable-next-line import/no-anonymous-default-export
export default async ({ body }, res) => {
  const endpoint = process.env.ENDPOINT;
  const graphcms = new GraphQLClient(endpoint, {
    headers: { Authorization: process.env.GRAPH_CMS_TOKEN },
  });

  const variables = {
    slug: body.slug,
    borrow: body.borrowed,
  };

  const mutation = gql`
    mutation($slug: String!, $borrow: Boolean!) {
      updateToy(where: { slug: $slug }, data: { borrowed: $borrow }) {
        name
        slug
      }
    }
  `;

  const publish = gql`
    mutation($slug: String) {
      publishToy(where: { slug: $slug }, to: PUBLISHED) {
        slug
      }
    }
  `;

  await graphcms.request(mutation, variables);
  await graphcms.request(publish, variables);

  res.status(201).json({ slug: body.slug });
};
