import { GraphQLClient, gql } from "graphql-request";
import { useState } from 'react';

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

const changeToBorrowed = async (slug) => {
    await fetch('/api/changeToBorrowed', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug })
    })
}

const Toy = ({ toy }) => {
  
   const [borrowed, setBorrowed] = useState(toy.borrowed)
   
   
  console.log(toy);
  return (
    <div>
      <a href={toy.slug}>{toy.name}</a>
      <p>{toy.description}</p>

 <button
                    
                    onClick={() => {
                        changeToBorrowed(toy.slug)
                        borrowed ? setBorrowed(false): setBorrowed(true)
                    }}
                >BORROW</button>
    </div>
  );
};

export default Toy;
