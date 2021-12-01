import toyCategories from "../../config/toyCategories";

const CategoryOverview = () => {
  console.log(toyCategories);
  return (
    <div className="grid grid-cols-2 gap-1">
      {toyCategories.map((category) => (
        <div
          className="flex flex-col rounded-lg mb-3 dark:border-white shadow-md border-1 border-white border-solid"
          key={category.title}
        >
          <img alt={category.title} src={category.url} className="rounded-lg" />

          <h2 className="text-orange dark:text-orange my-2 text-sm text-center font-medium">
            {category.title}
          </h2>

          <p className=" px-3 mb-2 text-xs text-center text-darkGray dark:text-white">
            {category.description.slice(0, 100) + "..."}
          </p>
        </div>
      ))}
    </div>
  );
};
export default CategoryOverview;