import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  let hostPort;
  if (typeof window !== "undefined") {
    hostPort = window.location.origin;
  }
  console.log(hostPort);
  console.log(session, status);

  if (status === "loading") return <div>loading...</div>;

  return (
    <div className="font-sans bg-white flex lg:flex-row flex-col lg:justify-between uppercase p-3">
      {session ? (
        <button onClick={() => signOut(null, { callbackUrl: `${hostPort}/` })}>
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn(null, { callbackUrl: `${hostPort}/admin` })}
        >
          Sign in...
        </button>
      )}
      <h1 className="text-white lg:bg-white lg:text-plum bg-plum rounded-2xl p-2 lg:ml-6 my-auto text-xl sm:text-4xl lg:text-6xl lg:text-left text-center font-black">
        Sensory Toy Library
      </h1>
      <img
        alt="Unique Ways Logo"
        className="w-screen lg:w-1/5 p-3 self-center"
        src="https://www.uniqueways.org.uk/wp-content/themes/unique_ways/images/logo.png"
      />
    </div>
  );
};

export default Header;
