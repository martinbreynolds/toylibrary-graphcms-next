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
      {
        __type(name: "Category") {
          enumValues {
            name
          }
        }
      }
    `;

    const categoryData = await graphQLClient.request(query);

    res.status(200).json(categoryData);

    return {
      props: {
        categoryData,
      },
    };
  } catch (error) {
    res.status(500).send(console.error(error));
  }
}
