import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";

const endpoint = process.env.ENDPOINT;

export async function getStaticProps() {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query {
      toys {
        id
        name
        slug
        toyCategory
        description
        toyImage {
          url
        }
      }
    }
  `;

  const { toys } = await graphQLClient.request(query);

  return {
    props: {
      toys,
    },
  };
}

export default function Home({ toys }) {
  console.log(toys);

  return (
    <div>
      {toys.map((toy) => {
        return (
          <div key={toy.slug}>
            <img src={toy.toyImage.url} alt={toy.name} />
            <a href={toy.slug}>{toy.name}</a>
            <p>{toy.description}</p>
            <Link key={toy.slug} href={`/toys/${toy.slug}`}>
              <a>{toy.name}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
