import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function MemberModal({ member }) {
  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [email, setEmail] = useState(member.email);
  console.log(member);

  return (
    <>
      <div className=" h-full w-full bg-opacity-60 left-0 top-0 bg-gray absolute z-20">
        <div className="w-1/2 h-1/2 bg-white flex-row flex bg-opacity-100 z-10 absolute rounded-xl left-1/4 top-1/4 shadow-lg">
          <div className="w-1/5 bg-plum h-full">
            <button>Edit</button>
          </div>
          <div className="w-4/5 bg-teal ">
            <div className="h-10 text-right">
              <button className="p-3">
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>
            <div className="p-3">
              <form>
                <input
                  disabled={true}
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <input
                  disabled={true}
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
                <input
                  disabled={true}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </form>
              {member.toys.length !== 0 ? (
                member.toys.map((toy) => {
                  return (
                    <div key={toy.id}>
                      <p>{toy.name}</p>
                    </div>
                  );
                })
              ) : (
                <p>No Toys Borrowed</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
