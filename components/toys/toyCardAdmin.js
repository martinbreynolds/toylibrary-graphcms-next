import Link from "next/link";

const ToyCard = ({ toys }) => {
  return (
    <div className="p-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
      {toys.map((toy) => {
        return (
          <div
            className="flex flex-col rounded-xl bg-white border-blue-50 border-2 transition hover:duration-500 hover:transform hover:scale-105"
            key={toy.id}
          >
            <p className="text-white bg-orange font-black py-3 text-center lowercase italic rounded-t-xl">
              {toy.toyCategory}
            </p>
            <div className=" bg-teal text-white text-center align-middle p-3 font-medium">
              {toy.borrowed ? (
                <p className=" text-white">Sorry, already borrowed</p>
              ) : (
                <p>You Can Borrow Me</p>
              )}
            </div>
            <img
              src={toy.toyImage.url}
              alt={toy.name}
              className="object-cover h-48 "
            />
            <div className="bg-white">
              <h2 className="text-xl font-medium p-3 overflow-clip bg-white text-plum">
                {toy.name}
              </h2>
              <div className="h-2 bg-plum"></div>

              <p className="text-l h-20 p-3 mb-3 text-gray">
                {toy.description.slice(0, 70) + "..."}
              </p>
            </div>

            <Link href={`/toys/${toy.slug}`}>
              <button className="bg-plum text-white rounded-xl uppercase font-black p-3 italic text-lg">
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
