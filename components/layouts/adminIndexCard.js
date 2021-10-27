import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEdit,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const AdminIndexCard = ({ title, single }) => {
  return (
    <div className="flex flex-col bg-white m-3 rounded-xl filter drop-shadow-2xl">
      <div className="bg-orange p-3 text-white font-bold rounded-t-xl">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="bg-white p-3 rounded-b-xl flex flex-col">
        <Link href={`/admin/${title}/create`} className="cursor-pointer">
          <a className="py-1">
            <FontAwesomeIcon className="text-plum mr-2" icon={faPlusCircle} />
            Create a {single}
          </a>
        </Link>
        <Link href="/admin/toys/" className="cursor-pointer">
          <a className="py-1">
            <FontAwesomeIcon className="text-plum mr-2" icon={faEdit} />
            Edit a {single}
          </a>
        </Link>
        <Link href="/admin/toys/" className="cursor-pointer">
          <a className="py-1">
            <FontAwesomeIcon className="text-plum mr-2" icon={faTrash} />
            Delete a {single}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AdminIndexCard;
