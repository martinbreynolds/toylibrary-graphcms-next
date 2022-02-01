import useSWR from "swr";
import Link from "next/link";
import CategoryOverview from "../components/categories/categoryOverview";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: data, error } = useSWR("/api/fetchData", fetcher);

  let toyIDList = [];

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const toys = data.toys;

  //Add all ID's into a Array
  for (let index = 0; index < toys.length; index++) {
    const element = {
      id: toys[index].id,
      name: toys[index].name,
      url: toys[index].toyImage.url,
    };
    toyIDList.push(element);
  }

  //Get array length
  let toyIDArrayLength = toys.length;

  //Get a random Number
  let randomNumber = Math.floor(Math.random() * toyIDArrayLength);

  console.log(randomNumber);

  return (
    <>
      <div className="grid grid-cols-12 bg-lightGray mx-5 mb-12 mt-9">
        <div className="md:col-span-5 col-span-12 ">
          <img
            className="object-cover h-48 md:h-96 min-w-full "
            alt={toyIDList[randomNumber].name}
            src={toyIDList[randomNumber].url}
          ></img>
        </div>
        <div className="md:col-span-7 col-span-12 p-5 md:p-16  rounded-tr-lg rounded-br-lg">
          <h1 className="font-black text-4xl lg:text-6xl">
            <span className=" text-orange">Sensory Toys and Aids </span>
            <h2 className="font-black text-2xl lg:text-4xl text-plum">
              to enrich your young persons life!
            </h2>
          </h1>
          <Link href="/toys" passHref>
            <button className="bg-plum hover:bg-teal transition hover:duration-500 hover:scale-105 text-white rounded-lg mt-10 p-3 md:p-5 font-bold text-xl uppercase">
              See Our Toys
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="bg-plum p-5">
          <h3 className=" text-3xl text-white font-bold mt-4">
            About our Toy Library
          </h3>
          <div className="h-2 bg-white my-4"></div>
          <p className="text-lightGray pb-4">
            The family room at Unique Ways HQ features our sensory aid library –
            which is exactly what it sounds like. Your child can try out as many
            of our aids as they like, and members can take them home for a small
            hire fee. Not only are these toys a lot of fun, they serve as
            excellent learning and development aids for children with additional
            needs. Many of these specialist aids can be very expensive, so our
            toy library provides a great opportunity to try before you buy. You
            might find your child responds really well to something you may
            never have thought of, so we fully recommend taking a look – whether
            you pop by specifically, or during one of our coffee mornings.
          </p>
        </div>
        <div className="p-5 bg-white">
          <h3 className=" text-3xl text-teal dark:text-orange font-bold my-2">
            Categories
          </h3>
          <div className="h-2 bg-plum my-4"></div>
          <p className="text-darkGray pb-4">
            Our toy library is split into different categories. Lorem ipsum
            dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet,
            consectetur adip.
          </p>
          <CategoryOverview toys={data.toys} />
        </div>
      </div>
    </>
  );
}

import Layout from "../components/layouts/SiteLayouts/siteLayout";

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
