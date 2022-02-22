import { GraphQLClient, gql } from "graphql-request";

export default async function fetchPractitioners(_req, res) {
  try {
    const endpoint = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.GRAPH_CMS_TOKEN,
      },
    });

    const query = gql`
      query {
        practitioners {
          id
          emailAddress
          userType
        }
      }
    `;

    const data = await graphQLClient.request(query);

    res.status(200).json(data);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    res.status(500).send(console.error(error));
  }
}
