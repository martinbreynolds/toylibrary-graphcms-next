import { GraphQLClient, gql } from "graphql-request";

export default async function fetchMember(req, res) {
  try {
    console.log("Body into fetchUser: ");
    console.log(req.body);
    const endpoint = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.GRAPH_CMS_TOKEN,
      },
    });

    const query = gql`
      query($emailAddress: String!) {
        practitioner(where: { emailAddress: $emailAddress }) {
          password
          emailAddress
          id
        }
      }
    `;

    const variables = {
      emailAddress: req.body.email,
      password: req.body.password,
    };

    const data = await graphQLClient.request(query, variables);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(console.error(error));
  }
}
