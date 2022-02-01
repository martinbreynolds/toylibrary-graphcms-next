import toyCategories from "../../config/toyCategories";
import Link from "next/link";

const CategoryOverview = () => {
  console.log(toyCategories);
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      {toyCategories.map((category) => (
        <Link key={category.title} href={`/categories/${category.slug}`}>
          <div className="flex flex-col rounded-lg hover:lg:bg-orange hover:bg-plum hover:lg:scale-100 hover:scale-105 transition hover:duration-500 text-darkGray hover:text-white">
            <h2 className="text-white text sm:text-lg text-center font-black bg-plum rounded-t-lg rounded-b-lg lg:rounded-b-none p-3">
              {category.title}
            </h2>

            <img
              alt={category.title}
              src={category.url}
              className="rounded-lg hidden lg:flex h-48 object-cover"
            />

            <p className=" px-3 my-3 lg:h-40 h-40 text-s">
              {category.description.slice(0, 150)}...
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default CategoryOverview;
