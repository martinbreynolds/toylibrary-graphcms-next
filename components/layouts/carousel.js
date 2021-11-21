/* eslint-disable @next/next/no-img-element */
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = ({ toys }) => {
  return (
    <div className="w-96 h-96 rounded-3xl bg-gray bg-opacity-25">
      <Carousel>
        {toys.map((toy) => (
          <Carousel.Item key={toy.id} className="w-96 h-96">
            <img
              className="object-cover w-96 h-96 rounded-l-xl"
              src={toy.toyImage.url}
              alt={toy.name}
            />
            <Carousel.Caption className="h-1/3">
              <h3 className="text-orange text-2xl font-black truncate">
                {toy.name}
              </h3>
              <p className="text-white truncate capitalize">
                {toy.toyCategory}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
