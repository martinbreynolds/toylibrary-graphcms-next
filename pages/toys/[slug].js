import { GraphQLClient, gql } from "graphql-request";
import { useRouter } from "next/router";
import Link from "next/link";

export const getServerSideProps = async (pageContext) => {
  const endpoint = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const pageSlug = pageContext.query.slug;

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

const Toy = ({ toy, members }) => {
  console.log(toy);
  console.log(members);

  const router = useRouter();

  const changeToBorrowed = async (slug, borrowed) => {
    await fetch("/api/borrowed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug, borrowed }),
    });
    router.reload(window.location.pathname);
  };

  const newMemberSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  return (
    <div>
      <a href={toy.slug}>{toy.name}</a>
      <p>{toy.description}</p>
      <p>{toy.borrowed.toString()}</p>

      {toy.borrowed ? (
        <div>
          <button
            onClick={() => {
              changeToBorrowed(toy.slug, false);
            }}
          >
            UNBORROW
          </button>

          {toy.member ? (
            <div>
              <p>Borrowed by:</p>
              <p>{toy.member.firstName}</p>
              <p>{toy.member.lastName}</p>
              <p>{toy.member.email}</p>
            </div>
          ) : (
            <p>Borrow Form</p>
          )}
        </div>
      ) : (
        <button
          onClick={() => {
            changeToBorrowed(toy.slug, true);
          }}
        >
          BORROW
        </button>
      )}
      <p>
        <Link href={`/`}>Back</Link>
      </p>

      <form onSubmit={newMemberSubmit}>
        <input id="email" className="bg-blue-200" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Toy;
