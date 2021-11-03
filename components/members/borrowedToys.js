import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function BorrowedToysMember({ member }) {
  const [firstName, setFirstName] = useState(member.firstName);
  const [lastName, setLastName] = useState(member.lastName);
  const [email, setEmail] = useState(member.email);
  console.log(member);

  return (
    <>
      {member.toys.length !== 0 ? (
        member.toys.map((toy) => {
          return (
            <div key={toy.slug}>
              <p>{toy.name}</p>
              <p>{toy.description}</p>
              <img src={toy.toyImage.url} alt={toy.name} />
            </div>
          );
        })
      ) : (
        <p>No Toys Borrowed</p>
      )}
    </>
  );
}
