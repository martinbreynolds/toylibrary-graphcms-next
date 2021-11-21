import NavButton from "./buttons/navbutton";
import Authorisation from "../signInsignOut/authorisation";
import Link from "next/link";
import navLinks from "../../../config/nav";
import navAdminLinks from "../../../config/navAdmin";

export default function NavBar({ session, status }) {
  return (
    <>
      <nav className="flex flex-row p-2">
        {session ? (
          <>
            {navAdminLinks.map((button) => (
              <Link key={button.path} href={button.path} passHref>
                <button className="px-4 py-1 mx-2 border-2 bg-white border-plum text-plum rounded-lg">
                  {button.label}
                </button>
              </Link>
            ))}
          </>
        ) : (
          <>
            {navLinks.map((button) => (
              <Link key={button.id} href={button.path} passHref>
                <button className="px-4 py-1 mx-2 border-2 bg-white border-plum text-plum rounded-lg">
                  {button.label}
                </button>
              </Link>
            ))}
          </>
        )}

        <Authorisation session={session} status={status} />
      </nav>
    </>
  );
}
