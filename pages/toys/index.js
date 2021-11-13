import useSWR from "swr";
import ToyCard from "../../components/toys/toyCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/fetchData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <ToyCard toys={data.toys} />;
}

import Layout from "../../components/layouts/siteLayout";

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};