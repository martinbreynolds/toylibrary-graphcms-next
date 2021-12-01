import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";

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
    <>
      {session ? (
        <div
          className="text-white font-medium text-left px-3 py-1  bg-gray"
          onClick={() => signOut(null, { callbackUrl: `/` })}
        >
          <FontAwesomeIcon
            className="text-teal mr-2"
            icon={faGripLinesVertical}
          />
          Sign Out
        </div>
      ) : (
        <div
          className="text-white font-medium text-left px-3 py-1  bg-gray"
          onClick={() => signIn(null, { callbackUrl: `${hostPort}/admin` })}
        >
          <FontAwesomeIcon
            className="text-teal mr-2"
            icon={faGripLinesVertical}
          />
          Admin
        </div>
      )}
    </>
  );
};

export default Authorisation;
