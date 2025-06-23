import React from "react";
import Slider from "react-slick";
import ProductCard from "../../common/ProductCard";

const Carousel = ({ title, products, slidesToShow = 3 }) => {
  const settings = {
    autoplay: true,
    dots: true,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-300 p-6 md:p-10">
      <div className="flex items-center justify-center md:justify-start">
        <div className="bg-lightgray h-px flex-grow mx-3" />
        <h1 className="text-3xl font-extrabold text-black dark:text-white py-6 md:py-10">
          {title}
        </h1>
        <div className="bg-lightgray h-px flex-grow mx-3" />
      </div>
      <Slider {...settings} className="py-5">
        {products?.map((item, idx) => (
          <ProductCard key={idx} productInfo={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
