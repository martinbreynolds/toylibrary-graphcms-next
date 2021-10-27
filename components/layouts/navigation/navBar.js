import { useState } from "react";
import NavButton from "./buttons/navbutton";

export default function NavBar(props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  console.log(props);
  return (
    <nav className="lg:py-3 bg-teal flex-col lg:flex-row flex p-2 justify-end lg:justify-between border-b-2 border-white">
      <button
        onClick={handleClick}
        className="inline-flex hover:bg-white rounded lg:hidden text-white ml-auto hover:text-teal border-white border-2 m-1 outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:justify-around lg:flex-grow lg:w-auto`}
      >
        {props.navButtons.map((button) => (
          <NavButton
            key={button.path}
            path={button.path}
            label={button.label}
          />
        ))}
      </div>
    </nav>
  );
}
