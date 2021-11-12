import Header from "./header";
import NavBar from "./navigation/navBar";

import navButtons from "../../config/navAdmin";

const AdminSiteLayout = ({ children }) => {
  return (
    <div>
      <NavBar navButtons={navButtons} />
      <Header />
      <main className="p-10">{children}</main>
    </div>
  );
};

export default AdminSiteLayout;
