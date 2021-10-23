import { useState } from "react";
import Link from "next/link";

export default function BorrowMemberSearch({ members }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundMember, setFoundMember] = useState();

  const memberSearch = async (event) => {
    event.preventDefault();
    let searchingMember = members.find((o) => o.email === searchTerm);
    setFoundMember(searchingMember);
    console.log(foundMember);
  };

  return (
    <>
      <div className="flex flex-col bg-white mt-10 w-1/6 my-auto mx-auto rounded-xl">
        <div className="bg-teal p-3 my-auto rounded-t-xl">
          <p className="my-2 text-white font-bold text-center">
            Find Existing or Create New Borrower
          </p>
        </div>
        <div className="mt-3 px-3 font-bold">
          <p className="text-center">Find Existing Borrower</p>
        </div>
        <form className="flex flex-col p-2" onSubmit={memberSearch}>
          <input
            className=" bg-white px-2 rounded-md border-2 border-plum placeholder-plum text-center"
            type="text"
            name="email"
            placeholder="Enter Email Address"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <button className="bg-plum px-2 mt-3 rounded-xl w-max mx-auto border-2 border-plum text-white uppercase font-bold">
            Search
          </button>
        </form>
        <hr className="border-orange m-2 border-1" />
        {foundMember ? (
          <div className="bg-teal p-3 m-2 rounded-lg">
            <p className="bg-white rounded-md px-2 font-bold text-center uppercase">
              User Found
            </p>
            <div className="flex flex-row mt-2 justify-around">
              <p className=" text-white">{foundMember.firstName}</p>
              <p className=" text-white">{foundMember.lastName}</p>
            </div>

            <p className="mx-auto mb-2 text-center text-white">
              {foundMember.email}
            </p>
            <div className="text-center">
              <button className="bg-orange rounded-xl text-white px-3 py-2 uppercase font-bold">
                Borrow Toy
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-3 px-3 font-bold">
              <p className="text-center mb-2">Create New Member</p>
            </div>

            <div className="text-center">
              <button className="bg-teal rounded-xl text-white px-3 py-2 uppercase font-bold mb-3">
                <Link passHref href="/borrow/">
                  Create Member
                </Link>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
