import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function MemberDetails({ member }) {
  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [email, setEmail] = useState(member.email);
  const [disabledInput, setDisabledInput] = useState(true);

  console.log(member);

  const handleEditClick = (event) => {
    const firstNameButton = document.getElementById("firstName");
    const lastNameButton = document.getElementById("lastName");
    const emailButton = document.getElementById("email");

    event.preventDefault();

    setDisabledInput(false);

    firstNameButton.disabled = disabledInput;
    lastNameButton.disabled = disabledInput;
    emailButton.disabled = disabledInput;
    firstNameButton.classList.add("bg-teal", "text-white");

    console.log(firstNameButton, lastNameButton, emailButton);
  };

  const handleSaveClick = (event) => {
    const firstNameButton = document.getElementById("firstName");
    const lastNameButton = document.getElementById("lastName");
    const emailButton = document.getElementById("email");

    event.preventDefault();

    setDisabledInput(true);

    firstNameButton.disabled = disabledInput;
    lastNameButton.disabled = disabledInput;
    emailButton.disabled = disabledInput;
    firstNameButton.classList.remove("bg-teal", "text-white");

    console.log(firstNameButton, lastNameButton, emailButton);
  };

  return (
    <>
      <form name="memberDetails" className="flex flex-col">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          className="  border-teal border-2 p-1 rounded-xl"
          name="firstName"
          type="text"
          disabled={disabledInput}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          disabled={disabledInput}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="text"
          disabled={disabledInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleSaveClick}>Save</button>
      </form>
    </>
  );
}
