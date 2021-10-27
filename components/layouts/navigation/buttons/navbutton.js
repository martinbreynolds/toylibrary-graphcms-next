import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NavButton = (props) => (
  <Link href={props.path} passHref>
    <div className="flex flex-row">
      <button className="text-xs lg:mx-2 py-1 px-2 lg:px-8 align-middle text-white lowercase md:normal-case rounded-3xl lg:border-white lg:border-2">
        <FontAwesomeIcon className="mr-2 lg:hidden" icon={faArrowRight} />
        {props.label}
      </button>
    </div>
  </Link>
);

export default NavButton;
