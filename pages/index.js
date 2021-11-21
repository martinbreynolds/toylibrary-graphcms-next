import useSWR from "swr";
import Link from "next/link";
import Hero from "../components/layouts/hero";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/fetchData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div></div>
    </>
  );
}

import Layout from "../components/layouts/SiteLayout/siteLayout";
import Categories from "../components/categories";

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
