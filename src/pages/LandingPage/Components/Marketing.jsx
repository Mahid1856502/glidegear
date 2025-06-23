import ImageView from "../../../components/dynamicZones/ImageView";
import Carousel from "../../../components/dynamicZones/Carousel";
import CTA from "../../../components/dynamicZones/CTA";
import { IMAGES } from "../../../images";

const About = () => {
  return (
    <div className="bg-white dark:bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:p-6 lg:p-12">
      <img
        src={IMAGES.MARKETING01}
        alt="image-view"
        className="w-full h-full"
      />

      <Carousel
        title="Featured Products"
        products={[
          {
            id: 1,
            title: "AirMax Pulse Phantom",
            image: IMAGES.PRODUCT01,
            price: "25",
          },
          {
            id: 2,
            title: "Yeezy Boost 350 V2",
            image: IMAGES.PRODUCT02,
            price: "120",
          },
          {
            id: 3,
            title: "Nike Dunk Low Panda",
            image: IMAGES.PRODUCT03,
            price: "90",
          },
        ]}
      />

      <CTA
        cta="Join our newsletter and get 10% off your first purchase!"
        button={{
          label: "Sign Up",
          link: "/signup",
        }}
      />
    </div>
  );
};

export default About;
