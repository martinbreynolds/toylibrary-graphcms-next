import { GraphQLClient, gql } from "graphql-request";
import { useState } from "react";

export const getServerSideProps = async () => {
  const endpoint = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const query = gql`
    query {
      members {
        id
        firstName
        lastName
        email
      }
    }
  `;

  const { members } = await graphQLClient.request(query);

  return {
    props: {
      members,
    },
  };
};

export default function ItemBorrow({ members }) {
  console.log(members);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundMember, setFoundMember] = useState();

  const memberSearch = async (event) => {
    event.preventDefault();
    let searchingMember = members.find((o) => o.email === searchTerm);
    setFoundMember(searchingMember);
    console.log(foundMember);
  };

  return (
    <div>
      <h1 className="text-blue-600 text-6xl text-center">Item Borrow</h1>
      <p>Existing Borrower</p>
      <form onSubmit={memberSearch}>
        <input
          type="text"
          name="email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button>Search</button>
      </form>
      {foundMember ? (
        <div>
          <p>{foundMember.firstName}</p>
          <p>{foundMember.lastName}</p>
          <p>{foundMember.email}</p>
          <button>Borrow Toy</button>
        </div>
      ) : (
        console.log("No Member Found")
      )}

      <p>Create New Member</p>
      <button>Create Member</button>
    </div>
  );
}
