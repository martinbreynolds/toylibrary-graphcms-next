import Header from "./header";
import NavBar from "./navigation/navBar";

import navButtons from "../../config/nav";

const SiteLayout = ({ children }) => {
  return (
    <>
      <NavBar navButtons={navButtons} />
      <Header />
      <main className="p-10">{children}</main>
    </>
  );
};

export default SiteLayout;
