import useSWR from "swr";
import AdminIndexCard from "../../components/layouts/adminIndexCard";
import AdminButton from "../../components/layouts/adminButton";

export default function Admin() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      <AdminButton label="Borrow a Toy" />
      <AdminButton label="Return a Toy" />
      <AdminIndexCard title="toys" single="Toy" />
      <AdminIndexCard title="members" single="Member" />
    </div>
  );
}

import AdminSiteLayout from "../../components/layouts/adminSiteLayout";

Admin.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
