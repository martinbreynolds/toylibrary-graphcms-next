import useSWR from "swr";
import { useState } from "react";
import ToyCard from "../../components/toys/toyCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ToyHome() {
  const [category, setCategory] = useState("-- Categories --");
  const [search, setSearch] = useState("");
  const [borrowed, setBorrowed] = useState(false);
  const [hidden, setHidden] = useState("hidden");
  const hiddenFunction = () => {
    hidden === "hidden" ? setHidden("") : setHidden("hidden");
  };
  const { data: data, error } = useSWR("/api/fetchData", fetcher);
  const { data: categoryData, categoryError } = useSWR(
    "/api/fetchEnums",
    fetcher
  );

  if (error || categoryError) return <div>failed to load</div>;
  if (!data || !categoryData) return <div>loading...</div>;
  const categoryDataValues = categoryData.__type.enumValues;
  const toys = data.toys;

  let categories = categoryDataValues.map((a) => a.name);
  let uniqueCategories = [...new Set(categories)];
  let categoriesObject = [];

  let filterBySearch = [];
  let filterByCategory = [];
  let filterByBorrowed = [];
  let filterByBorrowedAndCategory;
  let filtered = [];

  //Set filterBySearch to be an array of items that match the search term entered
  filterBySearch = toys.filter((toy) =>
    toy.name.toLowerCase().includes(search.toLowerCase())
  );

  filterByCategory = toys.filter((toy) => toy.toyCategory[0] === category);

  filterByBorrowed = toys.filter((toy) => toy.borrowed !== borrowed);

  filterByBorrowedAndCategory = filterByBorrowed.filter(
    (toy) => toy.toyCategory[0] === category
  );

  //  @todo make into switch statement??

  //Show all toys
  //IF  SEARCH = empty && CATEGORY = not chosen && borrowed = not selected

  if (
    search.length === 0 &&
    category === "-- Categories --" &&
    borrowed === false
  ) {
    filtered = toys;

    //Show all available toys Only
    //IF  SEARCH = empty && CATEGORY = not chosen && borrowed = selected
  } else if (
    search.length === 0 &&
    category === "-- Categories --" &&
    borrowed === true
  ) {
    filtered = filterByBorrowed;

    // Show all toys under selected category
    //IF  SEARCH = empty && CATEGORY = chosen && borrowed = not selected
  } else if (
    search.length === 0 &&
    category !== "-- Categories --" &&
    borrowed === false
  ) {
    filtered = toys.filter((toy) => toy.toyCategory[0] === category);

    // Show only toys available under selected category
    //IF  SEARCH = empty && CATEGORY = chosen && borrowed = selected
  } else if (
    search.length === 0 &&
    category !== "-- Categories --" &&
    borrowed === true
  ) {
    filtered = filterByCategory.filter((toy) => toy.borrowed !== borrowed);

    // Show all toys available under selected category and within search range
    //IF  SEARCH = value && CATEGORY = chosen && borrowed = not selected
  } else if (
    search.length >= 0 &&
    category !== "-- Categories --" &&
    borrowed === false
  ) {
    filtered = filterByCategory.filter((toy) =>
      toy.name.toLowerCase().includes(search.toLowerCase())
    );

    // Show only toys available under selected category and within search range
    //IF  SEARCH = value && CATEGORY = chosen && borrowed = selected
  } else if (
    search.length >= 0 &&
    category !== "-- Categories --" &&
    borrowed === true
  ) {
    filtered = filterByBorrowedAndCategory.filter((toy) =>
      toy.name.toLowerCase().includes(search.toLowerCase())
    );

    // Show all toys available with no selected category and within search range
    //IF  SEARCH = value && CATEGORY = not chosen && borrowed = not selected
  } else if (
    search.length >= 0 &&
    category === "-- Categories --" &&
    borrowed === false
  ) {
    filtered = filterBySearch;
  }

  // Show only toys available with no selected category and within search range
  //IF  SEARCH = value && CATEGORY = not chosen && borrowed = selected
  else if (
    search.length >= 0 &&
    category === "-- Categories --" &&
    borrowed === true
  ) {
    filtered = filterByBorrowed.filter((toy) =>
      toy.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Numbers on end of categories
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
      <div className="bg-plum my-5 text-white flex-col flex p-3">
        <div className="flex flex-row justify-end">
          <button
            onClick={hiddenFunction}
            className=" p-2 hover:bg-orange bg-white text-plum rounded-2xl text-center font-bold"
          >
            Filter
          </button>
        </div>
        {/* Area to hide on click */}
        <div className={hidden}>
          <div className="grid grid-cols-12">
            <div className=" col-span-5">
              <label className="my-auto">Search: </label>
            </div>
            <div className=" col-span-2">
              <label className="my-auto"> Only Show Available? </label>
            </div>
            <div className=" col-span-5">
              <label className="my-auto">Category: </label>
            </div>
          </div>

          <div className="grid grid-cols-12">
            <div className=" col-span-5">
              {/* Search Area */}
              <div className="flex flex-col justify-around">
                <input
                  type="text"
                  className=" bg-plum  text-white border-2 p-2 rounded-lg mb-2 w-full"
                  placeholder="Search..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>
            <div className=" col-span-2">
              {/* Borrowed? Area */}
              <div className="flex flex-row justify-left">
                <input
                  type="checkbox"
                  id="accept"
                  name="accept"
                  value="yes"
                  onChange={(event) => setBorrowed(event.target.checked)}
                />
              </div>
            </div>
            <div className=" col-span-5">
              {/* Category Area */}
              <div className="flex flex-col justify-around">
                <select
                  placeholder="Search"
                  className="bg-plum  text-white border-2 p-2 rounded-lg mb-2 w-full"
                  onChange={(event) => setCategory(event.target.value)}
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
            </div>
          </div>
        </div>
      </div>

      {/* `Display` Area */}
      {filtered.length === 0 && "Sorry, No Toys to Display"}
      <ToyCard toys={filtered} />
    </>
  );
}

import Layout from "../../components/layouts/SiteLayouts/siteLayout";

ToyHome.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
