import Header from "../Global/Header/header";
import { getSession, useSession, signIn } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Footer from "../Global/Footer/footer";
import User from "../../users/createUser";

const AdminSiteLayout = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  //Get type of user
  console.log(session?.type);
  let isAdminUser;
  if (session?.type === "admin") {
    isAdminUser = true;
  } else {
    isAdminUser = false;
  }
  const isUser = !!session?.user;
  console.log(session, status);
  if (status === "loading") return <div>loading...</div>;
  if (!isAdminUser) router.push("./");
  return (
    <div className=" bg-lightGray">
      <div className="sticky top-0 overflow-hidden z-10">
        <Header session={session} status={status} />
      </div>
      {session?.type === "admin" && <main className="p-3">{children}</main>}
      <Footer />
    </div>
  );
};

export default AdminSiteLayout;
