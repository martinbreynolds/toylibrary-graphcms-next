import { GraphQLClient, gql } from "graphql-request";
import bcrypt from "bcrypt";

export default async function createUser(req, res) {
  try {
    const endpoint = process.env.ENDPOINT;
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.GRAPH_CMS_TOKEN,
      },
    });

    const hashedPassword = bcrypt.hashSync(req.body.password, 12);

    const query = gql`
      mutation createPractitioner(
        $emailAddress: String!
        $password: String!
        $userType: UserTypes!
      ) {
        createPractitioner(
          data: {
            emailAddress: $emailAddress
            password: $password
            userType: $userType
          }
        ) {
          id
          emailAddress
        }
      }
    `;

    const variables = {
      emailAddress: req.body.email,
      password: hashedPassword,
      userType: req.body.userType,
    };

    const createUserUpload = await graphQLClient.request(query, variables);

    const createUserUploadData = await createUserUpload;
    console.log(createUserUpload);
    const userUploadedID = createUserUploadData.createPractitioner.id;
    console.log(userUploadedID);

    const userVariables = {
      id: userUploadedID,
    };

    const userPublish = gql`
      mutation($id: ID!) {
        publishPractitioner(where: { id: $id }, to: PUBLISHED) {
          id
          emailAddress
        }
      }
    `;

    const publishUserUpload = await graphQLClient.request(
      userPublish,
      userVariables
    );

    res.status(200).json(createUserUpload, publishUserUpload);
  } catch (error) {
    res.status(500).send(console.error(error));
  }
}
