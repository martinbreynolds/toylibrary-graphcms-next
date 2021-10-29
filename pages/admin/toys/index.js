import { GraphQLClient, gql } from "graphql-request";
import AdminSiteLayout from "../../../components/layouts/adminSiteLayout";
import useSWR from "swr";
import ToyCardAdmin from "../../../components/toys/toyCardAdmin";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Toys({ toys }) {
  const { data, error } = useSWR("/api/fetchData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <ToyCardAdmin toys={data.toys} />;
}

Toys.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
