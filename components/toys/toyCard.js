import Link from "next/link";
import Image from "next/image";

const ToyCard = ({ toys }) => {
  return (
    <div className="grid grid-cols-5 gap-3 m-3 p-3">
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
                <p>You Can Borrow Me</p>
              )}
            </div>

            <Link href={`/toys/${toy.slug}`}>
              <button className="bg-orange text-white uppercase font-black p-3 italic text-lg rounded-b-xl">
                See More
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ToyCard;