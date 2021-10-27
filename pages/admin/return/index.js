import AdminSiteLayout from "../../../components/layouts/adminSiteLayout";

export default function Return() {
  return <p>Returns</p>;
}

Return.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
