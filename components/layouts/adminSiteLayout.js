import Header from "./header";
import NavBar from "./navigation/navBar";

import navButtons from "../../config/navAdmin";

const AdminSiteLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar navButtons={navButtons} />
      <main className="p-10">{children}</main>
    </div>
  );
};

export default AdminSiteLayout;
