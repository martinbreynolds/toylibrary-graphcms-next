import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MemberCard = (props) => {
  console.log(props);
  return (
    <div className=" text-white">
      <div className="grid grid-cols-11 gap-4 text-plum bg-orange border-orange border-2 p-3 font-bold">
        <p className="col-span-3">First Name</p>
        <p className="col-span-3">Last Name</p>
        <p className="col-span-3">Email</p>
        <p className="text-center">Edit</p>
        <p className="text-center">Delete</p>
      </div>
      {props.data.map((data) => (
        <div
          className="grid grid-cols-11 gap-4 border-orange border-2 p-3 bg-white text-gray"
          key={data.id}
        >
          <p className="col-span-3 font-bold">{data.firstName}</p>
          <p className="col-span-3 font-bold">{data.lastName}</p>
          <a href={`mailto:${data.email}`} className="col-span-3 font-bold">
            {data.email}
          </a>
          <Link href={`/members/${data.id}`}>
            <button className="text-center font-black rounded-lg text-white bg-orange border-2 border-orange">
              <FontAwesomeIcon icon={faUserEdit} />
            </button>
          </Link>
          <button className="text-center font-black rounded-lg text-white bg-red-500 border-2 border-red-500">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
