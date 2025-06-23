import { Grid, InputAdornment, TextField } from "@mui/material";
import { IoMdArrowForward } from "react-icons/io";
import { BUTTON } from "../images/buttons";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const NAV_CONTENT = [
    {
      heading: "CONTACT",
      content: [
        { label: "30993 Huntwood Ave Suite 202 Hayward, CA. 94544", link: "/" },
        { label: "1-845-893-3942", link: "/" },
        { label: "info@rockerz.biz", link: "/" },
      ],
    },
    {
      heading: "QUICK LINKS",
      content: [
        { label: "Home", link: "/" },
        { label: "About Us", link: "/" },
        { label: "Testimonials", link: "/" },
        { label: "Support", link: "/" },
        { label: "Contact Us", link: "/" },
        { label: "FAQ/Knowledge Base", link: "/" },
      ],
    },
    {
      heading: "QUICK LINKS",
      content: [
        { label: "Media", link: "/" },
        { label: "Center Photo", link: "/" },
        { label: "Gallery", link: "/" },
        { label: "Become a Dealer", link: "/" },
      ],
    },
    {
      heading: "POLICY",
      content: [
        {
          label: "Privacy Policy",
          link: "/",
        },
        {
          label: "Referral Policy",
          link: "/",
        },
        {
          label: "Shipping Policy",
          link: "/",
        },
        {
          label: "Return Policy & Refund Policy",
          link: "/",
        },
        {
          label: "Terms & Conditions",
          link: "/",
        },
      ],
    },
  ];

  const NAV_ICONS = [
    {
      label: "Facebook",
      icon: <FaFacebookF />,
    },
    {
      label: "Linkedin",
      icon: <FaLinkedinIn />,
    },
    {
      label: "x",
      icon: <BsTwitterX />,
    },
    {
      label: "Google",
      icon: <FaGoogle />,
    },
    {
      label: "Youtube",
      icon: <FaYoutube />,
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
    },
    {
      label: "Telegram",
      icon: <FaTelegramPlane />,
    },
  ];
  return (
    <>
      <div className="bg-blue w-full">
        <Grid container className="flex justify-between p-5 md:px-20">
          <Grid md={6} item>
            <h4 className="font-bold text-white mb-0">APP Coming Soon</h4>
            <h5 className="font-light text-white">
              In both <span className="font-semibold">Android</span> and{" "}
              <span className="font-semibold">iOS</span>
            </h5>
            <div className="flex items-center justify-start">
              <img
                src={BUTTON.GOOGLE_PLAY}
                alt="google play button"
                className="h-10 mr-2"
              />
              <img
                src={BUTTON.APPLE_STORE}
                alt="apple store button"
                className="h-12"
              />
            </div>
          </Grid>
          <Grid md={6} item>
            <h5 className="font-bold text-white mb-0">
              Sign Up For Our Newsletter
            </h5>
            <p className="text-white mb-3">
              Sign up to get the latest on sales, new releases and more...
            </p>
            <TextField
              size="small"
              className="w-full md:w-2/3 email-input"
              placeholder="Email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IoMdArrowForward size={18} className="text-black" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div className="bg-white h-[1px] w-full" />
      <div className="bg-darkblue w-full">
        <Grid container className="flex justify-between p-5 md:py-10 md:px-20">
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            lg={4}
            className="pr-0 md:pr-10 lg:pr-20"
          >
            <h5 className="font-light text-white pb-3">
              About
              <br /> Rockerz Skate Guards
            </h5>
            <p className="font-semibold text-white">
              Skaters Charles Sinek and Beata Handra founded Penguin Specialty
              Products (dba Rockerz) in 1997 with their first product,
              Sk8tape®, which they created to protect their skating boots
              during rigorous training and give their skates a polished look
              during competitions. Read more
            </p>
            <div className="flex mt-5">
              {NAV_ICONS?.map((navIcon, idx) => (
                <span key={idx} className="me-2 text-white">
                  {navIcon.icon}
                </span>
              ))}
            </div>
          </Grid>
          {NAV_CONTENT.map((navs, idx) => (
            <Grid
              key={idx}
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              className="pr-5 mt-5 lg:mt-0"
            >
              <>
                <h5 className="font-light text-white pb-3">{navs?.heading}</h5>
                {navs?.content?.map((subNavs, subIdx) => (
                  <p
                    className="text-white hover:cursor-pointer font-semibold"
                    key={subIdx}
                  >
                    {subNavs?.label}
                  </p>
                ))}
              </>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="bg-darkblue w-full text-center">
        <div className="text-xs py-3 text-white font-extralight">
          Copyright 2024 Rockerz Skatewear. All Right Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
