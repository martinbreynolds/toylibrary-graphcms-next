import Header from "./header";
import NavBar from "./navigation/navBar";
import Authorisation from "./signInsignOut/authorisation";
import navButtons from "../../config/nav";
import { getSession, useSession, signIn } from "next-auth/react";
import Footer from "./footer";

const SiteLayout = ({ children }) => {
  const { data: session, status } = useSession();
  return (
    <div>
      <div className="">
        <Header session={session} status={status} />
      </div>

      <main className="p-10">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
