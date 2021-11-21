import Authorisation from "./signInsignOut/authorisation";
import Image from "next/image";
import NavBar from "./navigation/navBar";

const Footer = ({ session, status }) => {
  return (
    <div className="bg-plum p-10 mt-4 flex flex-col text-white">
      <p>Tel: 01422 343 090</p>
      <p>email: hi@uniqueways.org.uk</p>
      <p>Company Number: 05098716| Charity Number: 1109413</p>
      <p>
        © 2021 Unique Ways, Hanson Lane Enterprise Centre, Hanson Lane, Halifax,
        HX1 5PG
      </p>
    </div>
  );
};

export default Footer;
