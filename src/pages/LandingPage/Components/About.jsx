import CKEditorRender from "../../../common/CKEditor";
import { IMAGES } from "../../../images";

const mockPowerOfThree = {
  heading:
    "<h2>Why Choose Our Products</h2><p>Experience the power of three key benefits.</p>",
  Product: [
    {
      title: "Premium Quality",
      description:
        "Our products are crafted with top-grade materials ensuring long-lasting performance.",
      image: IMAGES.BOOT04, // Place this image in your public/images folder
    },
    {
      title: "Innovative Design",
      description:
        "Sleek, modern aesthetics blended with functionality for everyday use.",
      image: IMAGES.BOOT05,
    },
    {
      title: "Sustainable Choices",
      description:
        "We prioritize eco-friendly materials and ethical manufacturing practices.",
      image: IMAGES.BOOT06,
    },
  ],
};

const About = () => {
  const { heading, Product } = mockPowerOfThree;

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="md:px-24 px-6 md:my-8 md:w-2/3">
          {heading && <CKEditorRender text={heading} />}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {Product.map((content, idx) => (
          <div
            key={idx}
            className="flex flex-col text-center items-center mb-5"
          >
            <img
              alt="product"
              src={content.image}
              className="h-[420px] w-full object-cover transition-all duration-300 hover:scale-95"
            />
            <h3 className="text-main text-sm md:text-lg font-bold pt-5">
              {content.title}
            </h3>
            <p className="text-xs text-darkgray">{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
