import toyCategories from "../config/toyCategories";

const Categories = () => {
  return (
    <div className="mt-6">
      <h2 className=" text-teal text-3xl font-bold">Toy categories</h2>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit
        amet
      </p>
      <div className="grid grid-cols-4 gap-3 ">
        {toyCategories.map((category) => (
          <div
            className="flex flex-col rounded-xl bg-teal bg-opacity-20"
            key={category.title}
          >
            <img
              src={category.url}
              alt={category.title}
              className="object-cover rounded-t-xl h-48 "
            />
            <div className="p-4 mt-4">
              <h2 className="h-10 text-2xl text-orange text-center font-medium">
                {category.title}
              </h2>

              <p className="text-l h-20 px-3 mb-2 text-center text-gray">
                {category.description.slice(0, 70) + "..."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
