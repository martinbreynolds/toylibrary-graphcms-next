import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import BorrowedToysMember from "./borrowedToys";
import MemberDetails from "./memberDetails";

export default function MemberCard({ member }) {
  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [email, setEmail] = useState(member.email);
  console.log(member);

  return (
    <>
      <MemberDetails member={member} />
      <BorrowedToysMember member={member} />
    </>
  );
}
