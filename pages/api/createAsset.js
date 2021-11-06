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

    const form = new FormData();
    form.append(
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
        body: form,
      }
    );
    const resData = await response.json();
    const resDataID = resData.id;
    console.log(resData);

    const variables = {
      id: resDataID,
    };

    const publish = gql`
      mutation($id: ID!) {
        publishAsset(where: { id: $id }, to: PUBLISHED) {
          id
        }
      }
    `;

    const publishData = await graphcms.request(publish, variables);
    res.status(200).json(publishData);
  } catch (error) {
    res.status(500).send(console.error(error));
  }
}
