import { useRouter } from "next/router";
import ReturnToyCard from "./returnToyCard";

export default function Returns({ members, toys }) {
  const router = useRouter();
  const returnToy = async (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target[0].value);

    await fetch("../api/returns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: event.target[0].value,
      }),
    });
    router.reload(window.location.pathname);
  };

  return <ReturnToyCard toys={toys} />;
}
