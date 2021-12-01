import Header from "../Global/Header/header";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Footer from "../Global/Footer/footer";
const fetcher = (url) => fetch(url).then((res) => res.json());

const SiteLayout = ({ children }) => {
  const { data, error } = useSWR("/api/fetchData", fetcher);
  const { data: session, status } = useSession();
  return (
    <div className=" ">
      <div className="sticky top-0 z-10 dark:bg-darkGray bg-plum">
        <Header session={session} status={status} />
      </div>
      <main className="p-3">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
