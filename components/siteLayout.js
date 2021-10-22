import Header from "./header";
import NavBar from "./navigation/navBar";

import navButtons from "../config/nav";

const SiteLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar navButtons={navButtons} />
      <main>{children}</main>
    </div>
  );
};

export default SiteLayout;
