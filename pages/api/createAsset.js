import { GraphQLClient, gql } from "graphql-request";
import { formidable, IncomingForm } from "formidable";
import FormData from "form-data";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function endpoint(req, res) {
  try {
    const endpoint = process.env.ENDPOINT;
    const graphcms = new GraphQLClient(endpoint, {
      headers: { Authorization: process.env.GRAPH_CMS_TOKEN },
    });
    console.log("Receiving", req.method);

    const data = await new Promise((res, rej) => {
      const form = new IncomingForm({ multiples: true });
      form.parse(req, (err, fields, files) => {
        if (err) return rej(err);
        res({ fields, files });
      });
    });

    console.log(data);
    const ImageForm = new FormData();
    ImageForm.append(
      "fileUpload",
      fs.createReadStream(data.files.fileUpload.filepath)
    );

    const response = await fetch(
      "https://api-eu-central-1.graphcms.com/v2/ckur2yww806x801z0gv7k68ee/master/upload",
      {
        method: "POST",
        headers: {
          Authorization: process.env.GRAPH_CMS_TOKEN,
        },
        body: ImageForm,
      }
    );
    const resData = await response.json();
    const resDataID = resData.id;
    console.log(resData);

    const variables = {
      id: resDataID,
      name: data.fields.name,
      description: data.fields.description,
      toyCategory: [data.fields.category],
      borrowed: false,
    };

    const publishAsset = gql`
      mutation($id: ID!) {
        publishAsset(where: { id: $id }, to: PUBLISHED) {
          id
        }
      }
    `;

    const publishAssetFile = await graphcms.request(publishAsset, variables);

    // Upload New Toy

    const createToy = gql`
      mutation createToy(
        $name: String!
        $description: String!
        $toyCategory: [Category!]
        $borrowed: Boolean
        $id: ID!
      ) {
        createToy(
          data: {
            name: $name
            description: $description
            toyCategory: $toyCategory
            borrowed: $borrowed
            toyImage: { connect: { id: $id } }
          }
        ) {
          id
          name
          description
          slug
        }
      }
    `;

    const createToyUpload = await graphcms.request(createToy, variables);

    const createToyUploadData = await createToyUpload;
    console.log(createToyUploadData);
    const toyUploadedID = createToyUploadData.createToy.id;
    console.log(toyUploadedID);

    const toyVariables = {
      id: toyUploadedID,
    };

    const toyPublish = gql`
      mutation($id: ID!) {
        publishToy(where: { id: $id }, to: PUBLISHED) {
          id
          name
        }
      }
    `;

    const publishToyUpload = await graphcms.request(toyPublish, toyVariables);

    res.status(200).json(publishAssetFile, createToyUpload, publishToyUpload);
  } catch (error) {
    res.status(500).send(console.error(error));
  }
}
