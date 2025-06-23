import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ key, productInfo }) => {
  return (
    <div key={key} className="px-3">
      {productInfo?.image?.data?.length > 0 ? (
        <img
          src={
            process.env.REACT_APP_API_URL +
            productInfo?.image?.data[0]?.attributes?.url
          }
          className="w-full h-full"
          alt="product card"
        />
      ) : (
        <img
          src={productInfo?.image}
          className="w-full h-full"
          alt="product card"
        />
      )}
      <div className="text-graydark dark:text-lightgray">
        {productInfo?.category}
      </div>
      <div className="dark:text-white text-black font-bold text-xl flex justify-between items-center">
        {productInfo?.title}
        {/* {favIcon && <FaRegHeart />} */}
      </div>
      <div className="text-graydark dark:text-lightgray">
        {`$${productInfo?.price}`}
      </div>
    </div>
  );
};

export default ProductCard;
