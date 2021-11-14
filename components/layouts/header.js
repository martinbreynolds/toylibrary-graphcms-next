import Authorisation from "./signInsignOut/authorisation";
import Image from "next/image";
import NavBar from "./navigation/navBar";
import navButtons from "../../config/nav";

const Header = ({ session, status }) => {
  return (
    <div className="mx-10 my-2 flex flex-row justify-between">
      <p className="text-plum font-extrabold align-middle text-5xl">
        Sensory Toy Library
      </p>
      <NavBar navButtons={navButtons} session={session} status={status} />
      <img
        alt="Unique Ways Logo"
        className=" h-12"
        src="https://www.uniqueways.org.uk/wp-content/themes/unique_ways/images/logo_footer.png"
      />
    </div>
  );
};

export default Header;
