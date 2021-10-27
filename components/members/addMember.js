import { useState } from "react";
import { useRouter } from "next/router";

export default function AddMember() {
  const router = useRouter();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  const newMember = async (event) => {
    console.log(event, fName, lName, email);
    event.preventDefault();
    await fetch("../api/newMember", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fName,
        lName,
        email,
      }),
    });
    setFName("");
    setLName("");
    setEmail("");
    router.reload(window.location.pathname);
  };

  return (
    <div className="mb-3 bg-teal p-3 rounded-lg">
      <p className="text-white text-md font-bold mb-3">Create a New Member</p>
      <form onSubmit={newMember}>
        <div className="grid grid-cols-4">
          <label className="text-white" htmlFor="fName">
            First Name
          </label>
          <label className="text-white" htmlFor="lName">
            Last Name
          </label>
          <label className="text-white" htmlFor="email">
            Email Address
          </label>
        </div>
        <div className="grid grid-cols-4 ">
          <input
            className="text-plum font-bold rounded-lg mr-3"
            name="fName"
            autoComplete="First Name"
            type="text"
            required
            onChange={(event) => setFName(event.target.value)}
            value={fName}
          />

          <input
            className="text-plum font-bold mr-3 rounded-lg"
            name="lName"
            autoComplete="Last Name"
            type="text"
            required
            onChange={(event) => setLName(event.target.value)}
            value={lName}
          />

          <input
            className="text-plum font-bold mr-3 rounded-lg max-w-md"
            name="email"
            autoComplete="Email Address"
            type="email"
            required
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <button
            type="submit"
            className="text-white bg-plum font-bold rounded-lg py-2 px-3"
          >
            Create New Member
          </button>
        </div>
      </form>
    </div>
  );
}
