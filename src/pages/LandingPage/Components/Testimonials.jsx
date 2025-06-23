import Feedbacks from "../../../components/dynamicZones/Feedbacks";
import { IMAGES } from "../../../images";

const mockTestimonials = [
  {
    heading: "What Sneakerheads Are Saying",
    feedbacks: [
      {
        name: "Alex M.",
        avatar: IMAGES.USER01,
        title: "Sneaker Collector",
        company: "Flight Club",
        feedback:
          "The Jordan 1 Retro I got from here is 100% legit. Great packaging, quick shipping!",
      },
      {
        name: "Taylor S.",
        avatar: IMAGES.USER02,
        company: "Hypebeast",
        title: "Athlete",
        feedback:
          "These new Nike runners gave me the edge in my last track meet. Super comfy and durable.",
      },
      {
        name: "Jordan K.",
        avatar: IMAGES.USER03,
        title: "Style Influencer",
        company: "Nike",
        feedback:
          "Love the variety. From Yeezys to classic Vans, this site has it all!",
      },
    ],
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray dark:bg-black px-12 flex flex-col justify-center items-center py-25">
      {mockTestimonials.map((content, idx) => (
        <Feedbacks
          key={idx}
          heading={content.heading}
          feedbacks={content.feedbacks}
        />
      ))}
    </div>
  );
};

export default Testimonials;
