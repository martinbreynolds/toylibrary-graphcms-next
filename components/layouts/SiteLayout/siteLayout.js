import Header from "../Global/Header/header";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Footer from "../Global/Footer/footer";
import NavigationBar from "./Navigation/navigationBar";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SiteLayout = ({ children }) => {
  const { data, error } = useSWR("/api/fetchData", fetcher);
  const { data: session, status } = useSession();
  return (
    <div className="dark:bg-darkGray bg-white">
      <div>
        <Header session={session} status={status} />
      </div>

      <main className="p-3 dark:bg-gray">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
