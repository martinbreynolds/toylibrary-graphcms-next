import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AdminButton = ({ label }) => {
  return (
    <div className="flex flex-col  m-3 rounded-xl filter drop-shadow-2xl">
      <button className="bg-white p-3 text-plum border-plum border-2 font-bold rounded-xl text-2xl text-center">
        <Link href="/" className="cursor-pointer">
          <a className="py-1 uppercase">{label}</a>
        </Link>
      </button>
    </div>
  );
};

export default AdminButton;
