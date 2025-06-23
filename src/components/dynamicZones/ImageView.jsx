const ImageView = ({ image }) => {
  return (
    <div>
      {image?.data?.attributes?.url && (
        <img
          src={process.env.REACT_APP_API_URL + image?.data?.attributes?.url}
          alt="image-view"
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default ImageView;
