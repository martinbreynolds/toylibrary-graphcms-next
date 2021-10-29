import { useRouter } from "next/router";

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

  return (
    <div>
      {toys.map((toy) => {
        return (
          <div key={toy.id}>
            {toy.member && (
              <div>
                <img alt={toy.name} src={toy.toyImage.url} />
                <p value={toy.name}>{toy.name}</p>
                <p>{toy.description}</p>
                <form onSubmit={returnToy}>
                  <button name={toy.id} value={toy.id} type="submit">
                    Return Toy
                  </button>
                </form>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
