import NavBar from "./NavBar/navBar";

const Header = ({ session, status }) => {
  return (
    <header className="bg-lightGray dark:bg-darkGray ">
      <div className="p-2">
        <img
          alt="Unique Ways Logo"
          className="p-3 bg-lightGray rounded-md border-white mx-auto border-2 border-white"
          src="./images/logo.png"
        />
      </div>
      <NavBar session={session} status={status} />
    </header>
  );
};

export default Header;
