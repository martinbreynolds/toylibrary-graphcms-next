/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CarouselComponent from "./carousel";
import NavButton from "./navigation/buttons/navbutton";

const Hero = ({ toys }) => {
  console.log(toys);
  return (
    <div className="flex flex-row bg-red-50 rounded-r-xl shadow-md ring-plum">
      <CarouselComponent toys={toys} />
      <div className="my-12 mx-24 max-w-3xl">
        <h1 className="text-6xl font-black text-plum uppercase">
          Sensory Toy library
        </h1>
        <p className="whitespace-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <NavButton className path="/toys" label="See Our Toys" />
      </div>
    </div>
  );
};

export default Hero;
