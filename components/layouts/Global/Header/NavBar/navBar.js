import Authorisation from "../signInsignOut/authorisation";
import Link from "next/link";
import navLinks from "../../../../../config/nav";
import navAdminLinks from "../../../../../config/navAdmin";
import { useState } from "react";
import MobileNav from "./MobileNav/mobileNav";

export default function NavBar({ session, status }) {
  const [hidden, setHidden] = useState("hidden");

  const hiddenFunction = () => {
    hidden === "hidden" ? setHidden("") : setHidden("hidden");
  };
  return (
    <div className="bg-plum">
      {/* Start of Mobile Nav */}
      <MobileNav session={session} status={status} />
      {/* End of Mobile Nav */}
      {/* nav above md:  */}
      <nav className="hidden md:flex">
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
              <Link key={button.label} href={button.path} passHref>
                <button className="px-4 py-1 mx-2 border-2 bg-white border-plum text-plum rounded-lg">
                  {button.label}
                </button>
              </Link>
            ))}
          </>
        )}

        <Authorisation session={session} status={status} />
      </nav>
    </div>
  );
}
