import useSWR from "swr";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ToyCard from "../../components/toys/toyCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ToyHome() {
  const [category, setCategory] = useState("-- Categories --");
  const [search, setSearch] = useState("");
  const { data: data, error } = useSWR("/api/fetchData", fetcher);
  const { data: categoryData, categoryError } = useSWR(
    "/api/fetchEnums",
    fetcher
  );
  if (error || categoryError) return <div>failed to load</div>;
  if (!data || !categoryData) return <div>loading...</div>;
  const categoryDataValues = categoryData.__type.enumValues;
  const toys = data.toys;
  console.log(category, search, categoryDataValues, toys);

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

  console.log(filterByCategory, filterBySearch, filtered);
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
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div className="flex flex-col justify-around">
          <label className="my-auto">Category: </label>
          <select
            placeholder="Search"
            className="bg-plum dark:bg-darkGray text-white border-2 p-2 rounded-lg mb-2 w-full"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>-- Categories --</option>
            {categoryDataValues.map((value) => {
              return (
                <option key={value.name} value={value.name} label={value.name}>
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

import Layout from "../../components/layouts/SiteLayout/siteLayout";

ToyHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
