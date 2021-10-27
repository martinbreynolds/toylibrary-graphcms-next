import useSWR from "swr";
import MemberCard from "../../../components/members/memberCard";
import AddMember from "../../../components/members/addMember";
import AdminSiteLayout from "../../../components/layouts/adminSiteLayout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Members() {
  const { data, error } = useSWR("/api/fetchData", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <>
      <AddMember data={data.members} />
      <MemberCard data={data.members} />
    </>
  );
}

Members.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
