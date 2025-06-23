import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IMAGES } from "../../../images";

const mockHeroContent = [
  {
    title: "Step Into Style",
    description:
      "Discover our exclusive summer collection made for trendsetters.",
    image: IMAGES.BOOT01,
  },
  {
    title: "Redefine Elegance",
    description:
      "A timeless fusion of design and craftsmanship. Only at ShowSite.",
    image: IMAGES.BOOT02,
  },
  {
    title: "Bold, Bright, Yours",
    description:
      "Be seen. Be remembered. Curated pieces for the bold at heart.",
    image: IMAGES.BOOT03,
  },
];

const Hero = () => {
  const [heroContent, setHeroContent] = useState([]);

  useEffect(() => {
    // Set mock data instead of fetching
    setHeroContent(mockHeroContent);
  }, []);

  const handleNext = () => {
    let lists = document.querySelectorAll(".item");
    document?.getElementById("slide")?.appendChild(lists[0]);
  };

  const handlePre = () => {
    let lists = document.querySelectorAll(".item");
    document?.getElementById("slide")?.prepend(lists[lists.length - 1]);
  };

  return (
    <div className="h-screen">
      <div className="slider-wrapper py-10 relative">
        <div id="slide">
          {heroContent.map((content, idx) => (
            <div className="item" key={idx}>
              <div className="image">
                <img src={content.image} alt="hero" />
              </div>
              <div className="content">
                <div className="left">
                  <h1>{content.title}</h1>
                  <div className="des">{content.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="directional">
          <button
            id="prev"
            className="previous text-white"
            onClick={handleNext}
          >
            <FiChevronLeft size={28} className="text-white" />
          </button>
          <button id="next" className="next text-white" onClick={handlePre}>
            <FiChevronRight size={28} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
