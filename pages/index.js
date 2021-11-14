import useSWR from "swr";
import Link from "next/link";
import ToyCard from "../components/toys/toyCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/fetchData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <p className="z-50">dfashfgashj</p>
      <p className="z-50">dfashfgashj</p>
      <p className="z-50">dfashfgashj</p>
      <p className="z-50">dfashfgashj</p>
      <p className="z-50">dfashfgashj</p>
      <p className="z-50">dfashfgashj</p>
      <p className="z-50">dfashfgashj</p>

      {/* <h1>Welcome</h1>
      <Link href="/toys">See Toys</Link> */}
    </div>
  );
}

import Layout from "../components/layouts/siteLayout";

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
