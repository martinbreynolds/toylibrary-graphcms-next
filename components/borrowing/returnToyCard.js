import Link from "next/link";
import { useRouter } from "next/router";

const ReturnToyCard = ({ toys }) => {
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
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {toys.map((toy) => {
        return (
          <>
            {toy.member && (
              <div
                className="flex flex-col rounded-xl bg-white border-blue-50 border-2"
                key={toy.id}
              >
                <img
                  src={toy.toyImage.url}
                  alt={toy.name}
                  className="object-cover rounded-t-xl h-48 "
                />
                <div className="bg-red-50">
                  <p className="text-orange text-m font-black text-center p-2 m-3 lowercase italic">
                    {toy.toyCategory}
                  </p>
                  <h2 className="h-10 text-2xl text-center font-medium">
                    {toy.name}
                  </h2>

                  <p className="text-l h-20 px-3 mb-2 text-center text-gray">
                    {toy.description.slice(0, 70) + "..."}
                  </p>
                </div>

                <div className=" bg-teal text-white text-center align-middle p-3 font-medium">
                  <form onSubmit={returnToy}>
                    <button name={toy.id} value={toy.id} type="submit">
                      Return Toy
                    </button>
                  </form>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default ReturnToyCard;
