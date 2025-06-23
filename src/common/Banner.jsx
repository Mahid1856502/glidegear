const Banner = ({ image, text }) => {
  return (
    <div className="relative flex justify-center">
      <img
        src={image}
        className="object-cover w-full"
        alt="Banner"
        style={{ height: "calc(100vh - 400px)" }}
      />
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <h2 className="text-white text-4xl font-bold w-1/3 text-center">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
