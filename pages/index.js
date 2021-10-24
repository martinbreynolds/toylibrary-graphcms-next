import useSWR from "swr";
import HomePage from "../components/homePage";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/fetchData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <div>
      hello {data.firstName}!
      <HomePage data={data} />
    </div>
  );
}
