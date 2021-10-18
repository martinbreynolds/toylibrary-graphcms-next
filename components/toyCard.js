import Link from "next/link";

const ToyCard = ({ toys }) => {
  return (
    <div className="grid grid-cols-4 gap-3 m-3 p-3">
      {toys.map((toy) => {
        return (
          <div key={toy.slug} className="flex-row flex m-3 p-3 bg-red-200">
            <div className="flex flex-col" key={toy.id}>
              <h2 className="h-10 text-2xl">{toy.name}</h2>

              <p className="text-l h-20">
                {toy.description.slice(0, 50) + "..."}
              </p>
              <img
                className="w-100 max-h-48 object-contain p-2"
                src={toy.toyImage.url}
                alt={toy.name}
              />
              <div className="h-10">
                {toy.borrowed ? (
                  <p>Sorry, already borrowed</p>
                ) : (
                  <p>You Can Borrow Me</p>
                )}
              </div>
              <button className="bg-red-600 text-white">
                <Link href={`/toys/${toy.slug}`}>See More</Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToyCard;
