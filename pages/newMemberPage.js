import { useState } from "react";

export default function NewMember() {
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
    console.log(fName, lName, email);
  };

  return (
    <div>
      <h1 className="text-blue-600 text-6xl text-center">New Member</h1>
      <form onSubmit={newMember}>
        <label htmlFor="fName">First Name</label>
        <input
          name="fName"
          autoComplete="First Name"
          type="text"
          required
          onChange={(event) => setFName(event.target.value)}
          value={fName}
        />
        <label htmlFor="lName">Last Name</label>
        <input
          name="lName"
          autoComplete="Last Name"
          type="text"
          required
          onChange={(event) => setLName(event.target.value)}
          value={lName}
        />
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          autoComplete="Email Address"
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <button type="submit">Create New Member</button>
      </form>
    </div>
  );
}
