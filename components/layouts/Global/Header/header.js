import NavBar from "./NavBar/navBar";

const Header = ({ session, status }) => {
  return (
    <header className=" bg-white pb-2">
      <img
        alt="Unique Ways Logo"
        className="p-3 mx-auto"
        src="./images/logo.png"
      />

      <NavBar session={session} status={status} />
    </header>
  );
};

export default Header;
