import About from "./Components/About";
import BestSeller from "./Components/BestSeller";
import Hero from "./Components/Hero";
import Marketing from "./Components/Marketing";
import FeaturedProducts from "./Components/FeaturedProducts";
import Testimonials from "./Components/Testimonials";

const Index = () => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <Hero />
      <About />
      <BestSeller />
      <Marketing />
      <FeaturedProducts />
      <Testimonials />
    </div>
  );
};

export default Index;
