import AdminSiteLayout from "../../../../components/layouts/adminSiteLayout";
import AddToy from "../../../../components/toys/addToy";

export default function CreateToy() {
  return <AddToy />;
}

CreateToy.getLayout = function getLayout(page) {
  return <AdminSiteLayout>{page}</AdminSiteLayout>;
};
