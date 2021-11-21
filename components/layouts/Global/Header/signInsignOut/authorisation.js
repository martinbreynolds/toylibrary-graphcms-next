import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const Authorisation = ({ session, status }) => {
  // const { data: session, status } = useSession();

  let hostPort;
  if (typeof window !== "undefined") {
    hostPort = window.location.origin;
  }
  console.log(hostPort);
  console.log(session, status);

  if (status === "loading") return <div>loading...</div>;

  return (
    <div className="bg-plum w-full px-3 py-3 dark:bg-darkGray">
      <div className="flex justify-end text-xs">
        {session ? (
          <button
            className=" px-4 py-1 border-2 mx-2 bg-plum dark:bg-darkGray border-white text-white shadow-sm rounded-xl uppercase"
            onClick={() => signOut(null, { callbackUrl: `/` })}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="mx-2 px-4 py-1 shadow-sm border-2 bg-plum dark:bg-darkGray border-white text-white rounded-xl uppercase"
            onClick={() => signIn(null, { callbackUrl: `${hostPort}/admin` })}
          >
            Admin
          </button>
        )}
      </div>
    </div>
  );
};

export default Authorisation;
