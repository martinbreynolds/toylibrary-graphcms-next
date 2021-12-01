import { useState } from "react";
import MobileNav from "./MobileNav/mobileNav";
import LargeNav from "./LargeNav/largeNav";

export default function NavBar({ session, status }) {
  const [hidden, setHidden] = useState("hidden");

  const hiddenFunction = () => {
    hidden === "hidden" ? setHidden("") : setHidden("hidden");
  };
  return (
    <div className="bg-plum  dark:bg-darkGray border-t-2 border-b-2 border-solid border-gray">
      {/* Start of Mobile Nav */}
      <MobileNav session={session} status={status} />
      {/* End of Mobile Nav */}
      {/* nav above md:  */}
      <nav className="hidden lg:flex">
        <LargeNav session={session} status={status} />
      </nav>
    </div>
  );
}
