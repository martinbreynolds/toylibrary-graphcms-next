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
    <div className=" text-center p-2">
      {session ? (
        <button
          className=" px-4 py-1 border-2 border-teal text-teal rounded-lg"
          onClick={() => signOut(null, { callbackUrl: `/` })}
        >
          Sign Out
        </button>
      ) : (
        <button
          className=" px-4 py-1 border-2 border-teal text-teal rounded-lg"
          onClick={() => signIn(null, { callbackUrl: `${hostPort}/admin` })}
        >
          Sign in...
        </button>
      )}
    </div>
  );
};

export default Authorisation;
