import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NavButton = ({ path, label }) => (
  <>
    <Link href={path} passHref>
      <button className=" px-4 py-1 border-2 bg-plum border-white text-white rounded-lg">
        <FontAwesomeIcon className="mr-2 lg:hidden" icon={faArrowRight} />
        {label}
      </button>
    </Link>
  </>
);

export default NavButton;
