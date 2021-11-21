import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-plum p-4 flex flex-col text-white dark:bg-darkGray">
      <p className="text-3xl font-bold dark:text-orange">Contact Us</p>
      <p className="text-xl">Unique Ways</p>
      <p>Hanson Lane Enterprise Centre, Hanson Lane, Halifax, HX1 5PG</p>
      <p className="">T: 01422 343 090</p>
      <p>E: hi@uniqueways.org.uk</p>
      <p>Company Number: 05098716</p>
      <p>Charity Number: 1109413</p>
      <br />
      <div className="flex flex-row text-base">
        <div className="w-5">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <Link href="https://www.facebook.com/uniquewayscharity">
          <p className="ml-3 underline">facebook.com/UniqueWaysCharity</p>
        </Link>
      </div>
      <div className="flex flex-row text-base">
        <div className="w-5">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <Link href="https://www.twitter.com/uniquewaysuk">
          <p className="ml-3 underline">@UniqueWaysUK</p>
        </Link>
      </div>
      <div className="flex flex-row text-base">
        <div className="w-5">
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <Link href="https://www.uniqueways.org.uk">
          <p className="ml-3 underline">www.uniqueways.org.uk</p>
        </Link>
      </div>
      <br />
      <p className="text-xs">© 2021 Unique Ways</p>
    </div>
  );
};

export default Footer;
