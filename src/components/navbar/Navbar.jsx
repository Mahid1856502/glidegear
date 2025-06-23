import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkModeSwitcher from "../DarkModeSwitcher";
import { FaBars, FaRegHeart, FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import Sider from "./Sider";
import { IoIosArrowForward } from "react-icons/io";
import PATH from "../../routes/path";
import { IMAGES } from "../../images";

const NAV_OPTIONS = [
  {
    name: "profile",
    icon: <FaRegUser />,
    link: PATH.LOGIN,
  },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const header = [
    {
      label: "Products",
      link: "/products",
    },
  ];

  return (
    <div>
      <nav className="fixed z-10 w-full">
        <div className="bg-white drop-shadow-1 dark:bg-black dark:drop-shadow-none flex justify-between items-center px-4 md:px-10 py-4 md:py-6 w-full border-0 border-neutral-200">
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* <Lottie options={defaultOptions} height={70} width={210} /> */}
            <Link to={PATH.HOME} className="flex items-center">
              <img
                src={isDark ? IMAGES.WHITE_LOGO : IMAGES.LOGO}
                alt="LOGO"
                className="w-40 h-auto"
              />
            </Link>
            <FaBars
              className="text-black dark:text-white block md:hidden mr-5 bg-transparent hover:bg-primary-800  active:bg-primary-900 "
              onClick={() => setIsOpen(true)}
            />
          </div>

          <nav className="hidden md:flex items-center">
            {header?.map((nav, idx) => (
              <Link
                key={idx}
                to={nav?.link}
                className="p-2 rounded text-black dark:text-white hover:!bg-main  hover:text-white hover:-translate-y-1 transition-transform font-semibold bg-white dark:bg-black active:!bg-white"
              >
                {nav?.label}
              </Link>
            ))}
          </nav>
          <nav className="hidden flex-nowrap justify-end items-center md:ml-10 gap-x-1 md:flex">
            <ul className="flex items-center gap-2 2xsm:gap-4 mr-2">
              <DarkModeSwitcher setIsDark={setIsDark} />
            </ul>
            {NAV_OPTIONS?.map((item, idx) => (
              <span
                className="p-3 mx-1 bg-main text-white cursor-pointer rounded"
                key={idx}
                onClick={() => navigate(item?.link)}
              >
                {item?.icon}
              </span>
            ))}
          </nav>
        </div>
        {/* Mobile drawer */}
      </nav>
      {isOpen && (
        <>
          <Sider
            anchor="left"
            closeMenu={() => setIsOpen(false)}
            isSiderOpen={isOpen}
          >
            <>
              <hr />
              {header?.map((nav, idx) => (
                <Link key={idx} to={nav?.link}>
                  <h4 className="flex items-center w-full justify-between my-3">
                    {nav?.label} <IoIosArrowForward className="ml-2" />
                  </h4>
                </Link>
              ))}
            </>
          </Sider>
        </>
      )}
    </div>
  );
}
