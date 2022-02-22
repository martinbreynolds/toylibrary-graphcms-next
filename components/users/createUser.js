import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateUser() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const newUser = async (event) => {
    console.log(event, email, password, userType);
    event.preventDefault();
    await fetch("../../api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        userType,
      }),
    });
    setEmail("");
    setPassword("");
    setUserType("");
    router.push("../admin/users");
  };

  return (
    <div>
      <form onSubmit={newUser}>
        <input
          className="text-plum font-bold border-2 rounded-lg mr-3 h-9 p-5"
          name="email"
          autoComplete="Email"
          type="text"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          className="text-plum font-bold border-2 rounded-lg mr-3 h-9 p-5"
          name="password"
          autoComplete="Password"
          type="password"
          required
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <select
          className="text-plum "
          name="userType"
          onChange={(event) => setUserType(event.target.value)}
          value={userType}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button
          type="submit"
          className="text-white bg-plum font-bold rounded-lg py-2 px-3"
        >
          Add User
        </button>
      </form>
    </div>
  );
}
