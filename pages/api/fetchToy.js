import { GraphQLClient, gql } from "graphql-request";

export default async function fetchMember(req, res) {
  try {
    const endpoint = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.GRAPH_CMS_TOKEN,
      },
    });

    const query = gql`
      query($pageSlug: String!) {
        toy(where: { slug: $pageSlug }) {
          slug
          name
          description
          id
          borrowed
          toyCategory
          toyImage {
            url
          }
          member {
            firstName
            lastName
            email
          }
        }
        members {
          email
          firstName
          lastName
        }
      }
    `;

    const variables = {
      pageSlug: req.body.pageSlug,
    };

    const data = await graphQLClient.request(query, variables);
    const toy = data.toy;

    res.status(200).json(data);

    return {
      props: {
        toy,
      },
    };
  } catch (error) {
    res.status(500).send(console.error(error));
  }
}
