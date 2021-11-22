import useSWR from "swr";
import Link from "next/link";
import Hero from "../components/layouts/hero";
import CategoryOverview from "../components/categories/categoryOverview";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/fetchData", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div>
        <div className="rounded-lg shadow-lg">
          <ToyCarousel toys={data.toys} />
          <Link passHref href="./toys">
            <button className="w-full text-white font-black text-2xl uppercase  bg-orange rounded-b-lg py-3">
              See All Our Toys
            </button>
          </Link>
        </div>
        <div className="my-4">
          <h3 className=" text-3xl text-teal dark:text-orange font-bold my-2">
            About our Toy Library
          </h3>
          <div className="h-2 bg-plum my-4"></div>
          <p className="text-darkGray dark:text-white">
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
        <h3 className=" text-3xl text-teal dark:text-orange font-bold my-2">
          Categories
        </h3>
        <div className="h-2 bg-plum my-4"></div>
        <CategoryOverview toys={data.toys} />
      </div>
    </>
  );
}

import Layout from "../components/layouts/SiteLayout/siteLayout";
import Categories from "../components/categories";
import ToyCarousel from "../components/carousel/toyCarousel";

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
