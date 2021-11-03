import { GraphQLClient, gql } from "graphql-request";

export default async function fetchMember(req, res) {
  try {
    console.log(req.body.pageID);
    const endpoint = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.GRAPH_CMS_TOKEN,
      },
    });

    const query = gql`
      query($pageID: ID!) {
        member(where: { id: $pageID }) {
          firstName
          lastName
          email
          toys {
            name
            slug
            toyCategory
            toyImage {
              fileName
              url
            }
          }
        }
      }
    `;

    const variables = {
      pageID: req.body.pageID,
    };

    const data = await graphQLClient.request(query, variables);
    const member = data.member;

    res.status(200).json(data);

    return {
      props: {
        member,
      },
    };
  } catch (error) {
    res.status(500).send(console.error(error));
  }
}
