import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const MemberList = (props) => {
  const router = useRouter();

  const deleteMember = async (e) => {
    await fetch("/api/deleteMember", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        e,
      }),
    });
    router.reload(window.location.pathname);
  };

  return (
    <div>
      <div className="hidden overflow-clip text-sm lg:grid grid-cols-2 lg:grid-cols-11 gap-4 text-plum bg-orange border-orange border-2 p-3 font-bold rounded-t-lg">
        <p className="lg:col-span-3">First Name</p>
        <p className="lg:col-span-3">Last Name</p>
        <p className="col-span-2 lg:col-span-3">Email</p>
        <p className="text-center">Edit</p>
        <p className="text-center">Delete</p>
      </div>
      {props.data.map((data) => (
        <div
          className="text-sm overflow-clip overflow-hidden md:text-left text-center grid grid-cols-2 lg:grid-cols-11 gap-4 border-orange border-2 p-3 bg-white text-gray"
          key={data.id}
        >
          <p className="lg:col-span-3  font-bold">{data.firstName}</p>
          <p className="lg:col-span-3 font-bold">{data.lastName}</p>
          <a
            href={`mailto:${data.email}`}
            className="col-span-2 lg:col-span-3 font-bold"
          >
            {data.email}
          </a>
          <Link passHref href={`/admin/members/${data.id}`}>
            <button className="text-center flex flex-row justify-around py-1 px-2 rounded-lg text-white bg-orange border-2 border-orange">
              <FontAwesomeIcon icon={faUserEdit} />
              <span className="lg:hidden flex">Edit</span>
            </button>
          </Link>

          <button
            onClick={(event) => deleteMember(data.id)}
            value={data.id}
            className="text-center font-black rounded-lg text-white bg-red-500 border-2 border-red-500"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
