import Header from "./header";
import NavBar from "./navigation/navBar";
import Authorisation from "./signInsignOut/authorisation";
import navButtons from "../../config/nav";
import { getSession, useSession, signIn } from "next-auth/react";

const SiteLayout = ({ children }) => {
  const { data: session, status } = useSession();
  return (
    <>
      <Header session={session} status={status} />
      <main className="p-10">{children}</main>
    </>
  );
};

export default SiteLayout;
