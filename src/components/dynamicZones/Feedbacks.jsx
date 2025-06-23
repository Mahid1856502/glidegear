import Slider from "react-slick";
import CKEditorRender from "../../common/CKEditor";

const Feedbacks = ({ heading, feedbacks }) => {
  const settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("feedbacks", feedbacks);

  return (
    <>
      <div className="mb-10">
        {heading && <CKEditorRender text={heading} />}
      </div>
      <Slider {...settings} className="w-full md:w-1/3">
        {feedbacks?.map((item, idx) => (
          <div key={idx} className="px-3 text-center">
            <div className="text-sm md:text-xl mb-5 text-graydark dark:text-lightgray">
              {item?.feedback}
            </div>
            <div className="text-sm md:text-xl dark:text-white font-bold text-black">
              {item?.name}
            </div>
            <div className="text-sm md:text-lg text-graydark dark:text-lightgray">
              {item?.company}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Feedbacks;
