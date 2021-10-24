import { GraphQLClient, gql } from "graphql-request";

export default async function fetchData(_req, res) {
  try {
    const endpoint = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.GRAPH_CMS_TOKEN,
      },
    });

    const query = gql`
      query {
        members {
          id
          firstName
          lastName
          email
          toys {
            id
            name
            slug
            description
            borrowed
            toyCategory
            toyImage {
              id
              url
            }
          }
        }
      }
    `;

    const data = await graphQLClient.request(query);
    const members = data.members;

    res.status(200).json(members);

    return {
      props: {
        members,
      },
    };
  } catch (error) {
    res.status(500).send(console.error());
  }
}
