import NavButton from "./buttons/navbutton";

export default function NavBar(props) {
  console.log(props);
  return (
    <nav className="bg-orange text-red-200 flex-row flex p-2">
      {props.navButtons.map((button) => (
        <NavButton key={button.path} path={button.path} label={button.label} />
      ))}
    </nav>
  );
}
