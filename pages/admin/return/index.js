import Returns from "../../../components/borrowing/returns";
import AdminSiteLayout from "../../../components/layouts/SiteLayouts/adminSiteLayout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Return() {
  const { data, error } = useSWR("../../api/fetchData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <Returns members={data.members} toys={data.toys} />;
}

Return.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
