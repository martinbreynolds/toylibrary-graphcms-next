import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import useSWR from "swr";

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  return {
    props: {
      pageSlug,
    },
  };
};

async function fetcher(url, pageSlug) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageSlug,
    }),
  });
  return res.json();
}

const Toy = ({ pageSlug }) => {
  const { data, error } = useSWR(["/api/fetchToy", pageSlug], { fetcher });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const toy = data.toy;

  return (
    <div className="p-5">
      <div className="flex flex-row justify-between">
        <h2
          className="bg-plum text-white p-2 font-black text-2xl rounded-t-xl"
          href={toy.slug}
        >
          {toy.name}
        </h2>
        <Link href={`/toys`} passHref>
          <button className="text-xl bg-orange text-plum p-3 rounded-xl mb-2">
            back
          </button>
        </Link>
      </div>
      <div className="border-2 border-plum p-2 rounded-b-xl md:grid rounded-tr-xl flex flex-col  md:grid-cols-12">
        <img
          src={toy.toyImage.url}
          alt={toy.name}
          className="object-cover h-96 col-span-4"
        />
        <div className="col-span-8 p-6">
          <p className="text-lg text-darkGray">{toy.description}</p>
          <button className="bg-teal text-white text-lg py-1 mt-6 px-3 rounded-lg">
            {toy.toyCategory}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toy;

import Layout from "../../components/layouts/SiteLayouts/siteLayout";

Toy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
