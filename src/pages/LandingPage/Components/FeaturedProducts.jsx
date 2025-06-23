import Carousel from "../../../components/dynamicZones/Carousel";
import { IMAGES } from "../../../images"; // Assume this holds sneaker product images

const mockFeaturedProducts = [
  {
    title: "Trending Now",
    prodcut: [
      {
        id: 1,
        title: "AirMax Pulse Phantom",
        image: IMAGES.PRODUCT01,
        price: "180",
      },
      {
        id: 2,
        title: "Yeezy Boost 350 V2",
        image: IMAGES.PRODUCT02,
        price: "220",
      },
      {
        id: 3,
        title: "Nike Dunk Low Panda",
        image: IMAGES.PRODUCT03,
        price: "110",
      },
    ],
  },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-white dark:bg-black px-12 pb-40">
      {mockFeaturedProducts.map((content, idx) => (
        <Carousel
          key={idx}
          title={content.title}
          products={content.prodcut}
          slidesToShow={4}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
