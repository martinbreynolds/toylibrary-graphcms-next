import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar(props) {
  return (
    <nav className="bg-plum dark:bg-darkGray text-white flex-row flex h-14 p-3">
      <div className="h-2">
        <FontAwesomeIcon icon={faSearch} className="mr-2" />
        <input
          type="text"
          className=" bg-plum dark:bg-darkGray text-white"
          placeholder="Search All Toys..."
        />
      </div>
      <div className="flex flex-row ">
        <select
          placeholder="Search"
          className="bg-plum dark:bg-darkGray text-white"
        >
          <option>-- Categories --</option>
        </select>
      </div>
    </nav>
  );
}
