import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import AdminSiteLayout from "../../components/layouts/siteLayout";

export const getServerSideProps = async (pageContext) => {
  const endpoint = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const pageSlug = pageContext.query.slug;
  console.log(pageSlug);

  const query = gql`
    query($pageSlug: String!) {
      toy(where: { slug: $pageSlug }) {
        slug
        name
        description
        id
        borrowed
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
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const toy = data.toy;
  const members = data.members;

  return {
    props: {
      toy,
      members,
    },
  };
};

const Toy = ({ toy }) => {
  return (
    <div>
      <a href={toy.slug}>{toy.name}</a>
      <p>{toy.description}</p>

      <p>
        <Link href={`/toys`}>Back</Link>
      </p>
    </div>
  );
};

export default Toy;

Toy.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
