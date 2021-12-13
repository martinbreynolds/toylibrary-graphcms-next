import useSWR, { useSWRConfig } from "swr";
import { useState } from "react";
import ToyCard from "../../components/toys/toyCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ToyHome() {
  const { mutate } = useSWRConfig();
  const [category, setCategory] = useState("-- Categories --");
  const [search, setSearch] = useState("");
  const { data: data, error, isValidating } = useSWR("/api/fetchData", fetcher);
  const { data: categoryData, categoryError } = useSWR(
    "/api/fetchEnums",
    fetcher
  );

  if (error || categoryError) return <div>failed to load</div>;
  if (!data || !categoryData) return <div>loading...</div>;
  if (isValidating) return <div>validating...</div>;
  const categoryDataValues = categoryData.__type.enumValues;
  const toys = data.toys;

  let categories = categoryDataValues.map((a) => a.name);
  let uniqueCategories = [...new Set(categories)];
  let categoriesObject = [];

  let filterBySearch = [];
  let filterByCategory = [];
  let filtered = [];

  filterBySearch = toys.filter((toy) =>
    toy.name.toLowerCase().includes(search.toLowerCase())
  );

  filterByCategory = toys.filter((toy) => toy.toyCategory[0] === category);

  if (search.length === 0 && category !== "-- Categories --") {
    filtered = toys.filter((toy) => toy.toyCategory[0] === category);
  } else if (search.length >= 0 && category === "-- Categories --") {
    filtered = toys.filter((toy) =>
      toy.name.toLowerCase().includes(search.toLowerCase())
    );
  } else if (search.length >= 0 && category !== "-- Categories --") {
    filtered = filterByCategory.filter((toy) =>
      toy.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  let total = 0;

  for (let i = 0; i < uniqueCategories.length; i++) {
    let count = filterBySearch.filter(
      (obj) => obj.toyCategory[0] === uniqueCategories[i]
    ).length;
    total = total + count;
    categoriesObject.push({ name: uniqueCategories[i], number: count });
  }

  return (
    <>
      <nav className="bg-plum dark:bg-darkGray text-white flex-col flex p-3">
        <div className="flex flex-col justify-around">
          <label className="my-auto">Search: </label>

          <input
            type="text"
            className=" bg-plum dark:bg-darkGray text-white border-2 p-2 rounded-lg mb-2 w-full"
            placeholder="Search..."
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              mutate("api/fetchData");
            }}
          />
        </div>
        <div className="flex flex-col justify-around">
          <label className="my-auto">Category: </label>
          <select
            placeholder="Search"
            className="bg-plum dark:bg-darkGray text-white border-2 p-2 rounded-lg mb-2 w-full"
            onChange={(event) => {
              setCategory(event.target.value);
              mutate("api/fetchData");
            }}
          >
            <option label={`-- Categories -- Total Items: (${total})`}>
              -- Categories --
            </option>
            {categoriesObject.map((value) => {
              return (
                <option
                  key={value.name}
                  value={value.name}
                  label={`${value.name} (${value.number})`}
                >
                  {value.name}
                </option>
              );
            })}
          </select>
        </div>
      </nav>
      {filtered.length === 0 && "Sorry, No Toys in this Category to Display"}
      <ToyCard toys={filtered} />
    </>
  );
}

import Layout from "../../components/layouts/SiteLayouts/siteLayout";

ToyHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
