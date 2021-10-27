import AdminSiteLayout from "../../../../components/layouts/adminSiteLayout";
import AddMember from "../../../../components/members/addMember";

export default function CreateToy() {
  return <AddMember />;
}

CreateToy.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
