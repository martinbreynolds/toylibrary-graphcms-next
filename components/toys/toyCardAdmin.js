import Link from "next/link";

const ToyCard = ({ toys }) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {toys.map((toy) => {
        return (
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
              {toy.borrowed ? (
                <p className=" text-red-50">Sorry, already borrowed</p>
              ) : (
                <Link href="../admin/borrow/" passHref>
                  <button className="bg-orange text-white uppercase font-black p-3 italic text-lg rounded-b-xl">
                    Loan This Toy
                  </button>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToyCard;
