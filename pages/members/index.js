import useSWR from "swr";
import MemberCard from "../../components/members/memberCard";
import AddMember from "../../components/members/addMember";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/fetchData", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <div className="p-10">
      <AddMember data={data} />
      <MemberCard data={data} />
    </div>
  );
}
