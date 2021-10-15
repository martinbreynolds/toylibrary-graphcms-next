import { GraphQLClient, gql } from "graphql-request";

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
      }
    }
  `;

  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const toy = data.toy;

  return {
    props: {
      toy,
    },
  };
};
const Toy = ({ toy }) => {
  console.log(toy);
  return (
    <div>
      <a href={toy.slug}>{toy.name}</a>
      <p>{toy.description}</p>
    </div>
  );
};

export default Toy;
