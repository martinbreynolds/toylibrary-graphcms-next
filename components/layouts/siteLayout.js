import Header from "./header";
import NavBar from "./navigation/navBar";
import Authorisation from "./authorisation";
import navButtons from "../../config/nav";
import { getSession, useSession, signIn } from "next-auth/react";

const SiteLayout = ({ children }) => {
  const { data: session, status } = useSession();
  return (
    <>
      <Authorisation session={session} status={status} />
      <NavBar navButtons={navButtons} />
      <Header />

      <main className="p-10">{children}</main>
    </>
  );
};

export default SiteLayout;
