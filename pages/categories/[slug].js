import { GraphQLClient, gql } from "graphql-request";

export const getServerSideProps = async (pageContext) => {
  const endpoint = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const pageSlug = [pageContext.query.slug];
  console.log(pageSlug);

  const query = gql`
    query($pageSlug: [Category!]) {
      toys(where: { toyCategory: $pageSlug }) {
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
    }
  `;

  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const toys = data.toys;

  return {
    props: {
      toys,
    },
  };
};

const Category = ({ toys }) => {
  console.log(toys);
  return <ToyCard toys={toys} />;
};

export default Category;

import Layout from "../../components/layouts/SiteLayouts/siteLayout";
import ToyCard from "../../components/toys/toyCard";

Category.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
