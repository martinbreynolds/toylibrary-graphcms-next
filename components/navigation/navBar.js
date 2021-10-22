import NavButton from "./buttons/navbutton";

export default function NavBar(props) {
  console.log(props);
  return (
    <div>
      {props.navButtons.map((button) => (
        <NavButton
          key={button.path}
          path={button.path}
          label={button.label}
          icon={button.icon}
        />
      ))}
    </div>
  );
}
