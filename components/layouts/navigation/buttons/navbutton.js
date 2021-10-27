import Link from "next/link";

const NavButton = (props) => (
  <Link href={props.path} passHref>
    <div>
      <button className="px-8 py-3 mx-3 align-middle text-blue-50 uppercase font-bold rounded-3xl border-blue-50 border-2 bg-teal">
        {props.label}
      </button>
    </div>
  </Link>
);

export default NavButton;
