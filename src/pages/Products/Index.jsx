import React from "react";
import Banner from "../../common/Banner";
import ProductCard from "../../common/ProductCard";
import SideFilter from "../../common/SideFilters";
import Breadcrumb from "../../components/Breadcrumb";
import { IMAGES } from "../../images";

const Index = () => {
  const categories = [
    {
      header: "Tops",
      subOptions: [
        { label: "Jackets", qty: 120 },
        { label: "Shirts", qty: 100 },
        { label: "T-Shirts", qty: 80 },
        { label: "Crew Neck", qty: 90 },
        { label: "Sweater", qty: 70 },
      ],
    },
    {
      header: "Bottoms",
      subOptions: [
        { label: "Jeans", qty: 150 },
        { label: "Pants", qty: 120 },
        { label: "Shorts", qty: 100 },
      ],
    },
    {
      header: "Accessories",
      subOptions: [
        { label: "Hats", qty: 80 },
        { label: "Bags", qty: 60 },
        { label: "Belts", qty: 70 },
        { label: "Socks", qty: 100 },
      ],
    },
  ];

  const PRODUCTS = [
    {
      title: "Product Name 01",
      category: "category",
      image: IMAGES.PRODUCT01,
      price: "$564",
      // rating: 4,
    },
    {
      title: "Product Name 02",
      category: "category",
      image: IMAGES.PRODUCT02,
      price: "$564",
      // rating: 4.2,
    },
    {
      title: "Product Name 03",
      category: "category",
      image: IMAGES.PRODUCT03,
      price: "$564",
      // rating: 3.8,
    },
    {
      title: "Product Name 02",
      category: "category",
      image: IMAGES.PRODUCT02,
      price: "$564",
      // rating: 4.8,
    },
    {
      title: "Product Name 03",
      category: "category",
      image: IMAGES.PRODUCT03,
      price: "$564",
      // rating: 4,
    },
    {
      title: "Product Name 04",
      category: "category",
      image: IMAGES.BOOT04,
      price: "$564",
      // rating: 4.8,
    },
    {
      title: "Product Name 05",
      category: "category",
      image: IMAGES.BOOT07,
      price: "$564",
      // rating: 4,
    },
    {
      title: "Product Name 04",
      category: "category",
      image: IMAGES.BOOT06,
      price: "$564",
      // rating: 4.8,
    },
    {
      title: "Product Name 05",
      category: "category",
      image: IMAGES.BOOT07,
      price: "$564",
      // rating: 4,
    },
    {
      title: "Product Name 05",
      category: "category",
      image: IMAGES.BOOT08,
      price: "$564",
      // rating: 4,
    },
  ];

  return (
    <div>
      <Banner
        image={IMAGES.PRODUCT_BANNER}
        text="IF YOU HAVE A BODY YOU ARE AN ATHELETE"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 bg-white dark:bg-black">
        <div className="lg:col-span-1 bg-gray-300 p-4">
          <SideFilter label="Category" options={categories} />
        </div>
        <div className="lg:col-span-3 bg-gray-300 ">
          <Breadcrumb pageName="Men" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
            {PRODUCTS.map((item, idx) => (
              <div className="lg:col-span-1 mb-5">
                <ProductCard key={idx} productInfo={item} favIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
