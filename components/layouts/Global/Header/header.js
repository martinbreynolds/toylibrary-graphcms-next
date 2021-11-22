import NavBar from "../../navigation/navBar";
import navButtons from "../../../../config/nav";
import Authorisation from "./signInsignOut/authorisation";

const Header = ({ session, status }) => {
  return (
    <>
      <div className="dark:bg-darkGray">
        <Authorisation session={session} status={status} />
        <div className="flex flex-row w-screen p-3 justify-between">
          <div className=" flex flex-col">
            <p className="text-plum dark:text-orange font-black align-middle text-5xl">
              Sensory
            </p>
            <p className="text-plum dark:text-orange font-bold align-middle text-3xl">
              Toy Library
            </p>
          </div>
          <div className="my-auto ">
            <img
              alt="Unique Ways Logo"
              className=" w-full "
              src="https://www.uniqueways.org.uk/wp-content/themes/unique_ways/images/logo_footer.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
