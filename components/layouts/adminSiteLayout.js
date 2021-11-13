import Header from "./header";
import NavBar from "./navigation/navBar";
import { getSession, useSession, signIn } from "next-auth/react";
import navButtons from "../../config/navAdmin";
import { useRouter } from "next/dist/client/router";

const AdminSiteLayout = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  console.log(session, status);
  if (status === "loading") return <div>loading...</div>;
  if (!isUser) router.push("./");
  return (
    <div>
      <NavBar navButtons={navButtons} />
      <Header />
      {session && <main className="p-10">{children}</main>}
    </div>
  );
};

export default AdminSiteLayout;
