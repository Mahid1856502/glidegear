import Button from "../../../common/Button";
import Slider from "react-slick";
import { useState } from "react";
import { IMAGES } from "../../../images";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const mockSliderData = [
  {
    title: "Top Quality Sneakers",
    description: "Experience unmatched comfort and style.",
    image: IMAGES.BOOT01,
  },
  {
    title: "Stylish Backpacks",
    description: "Carry your world with confidence.",
    image: IMAGES.BOOT02,
  },
  {
    title: "Minimalist Watches",
    description: "Elegance that keeps you on time.",
    image: IMAGES.BOOT03,
  },
];

const BestSeller = () => {
  const settings = {
    autoplay: true,
    dots: false,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow className="arrow-btn" />,
    prevArrow: <PrevArrow className="arrow-btn" />,
  };

  const [sliderContent] = useState(mockSliderData);

  return (
    <div
      className="relative bg-black"
      style={{ height: "calc(100vh - 120px)" }}
    >
      <Slider {...settings} className="slider-wrapper">
        {sliderContent.map((item, index) => (
          <div
            key={index}
            className="slider-content relative !flex justify-center items-center"
          >
            <img
              src={item?.image}
              className="w-1/3 animate-up-down"
              alt="slider"
            />
            <div className="text-white absolute flex flex-col items-center justify-between text-center p-8 w-full md:w-1/2 h-full">
              <div className="transition duration-500 ease-in-out">
                <h1 className="text-base md:text-3xl font-bold mb-4 animate-slideInUp">
                  {item.title}
                </h1>
                <h4 className="text-xs md:text-sm lg:text-xl text-accent mb-6 animate-fadeIn">
                  {item.description}
                </h4>
              </div>
              <div>
                <p className="text-xs md:text-sm lg:text-xl text-accent mb-6 animate-fadeIn">
                  {item.description}
                </p>
                <Button />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BestSeller;
