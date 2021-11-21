import Header from "./Global/Header/header";
import NavBar from "./navigation/navBar";
import { getSession, useSession, signIn } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Footer from "./Global/Footer/footer";

const AdminSiteLayout = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  console.log(session, status);
  if (status === "loading") return <div>loading...</div>;
  if (!isUser) router.push("./");
  return (
    <div>
      <Header session={session} status={status} />
      {session && <main className="p-10 dark:bg-gray">{children}</main>}
      <Footer />
    </div>
  );
};

export default AdminSiteLayout;
