import Header from "../Global/Header/header";
import NavBar from "../navigation/navBar";

import { getSession, useSession, signIn } from "next-auth/react";
import Footer from "../Global/Footer/footer";
import NavigationBar from "./Navigation/navigationBar";

const SiteLayout = ({ children }) => {
  console.log(children.type.name);
  const { data: session, status } = useSession();
  return (
    <div className="dark:bg-darkGray bg-white">
      <div>
        <Header session={session} status={status} />
      </div>
      {children.type.name === "ToyHome" ? (
        <NavigationBar />
      ) : (
        <nav className="bg-plum dark:bg-darkGray text-white flex-row flex h-14 p-3"></nav>
      )}
      <main className="p-3 dark:bg-gray">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
