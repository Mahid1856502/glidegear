import { Button, styled } from "@mui/material";
import { useEffect, useState } from "react";

const PrimaryButton = ({
  className,
  label = "Shop Now",
  onClick,
  theme = "standard",
}) => {
  const [buttonStyle, setbuttonStyle] = useState(
    "bg-main hover:bg-blue-700 text-white"
  );

  useEffect(() => {
    if (theme === "light") {
      setbuttonStyle("bg-white hover:bg-gray text-black hover:text-white");
    }
  }, [theme]);

  return (
    <button
      onClick={() => onClick}
      type="button"
      className={`group relative overflow-hidden ${buttonStyle} ${className} font-bold py-2 px-6 md:px-8 shadow`}
    >
      <div className="absolute inset-0 w-0 bg-black transition-all duration-[150ms] ease-out group-hover:w-full" />
      <span className="relative text-white group-hover:text-white">
        {label}
      </span>
    </button>
  );
};

export default PrimaryButton;

export const MinimalButton = styled(Button)((props) => ({
  color: "#fff",
  backgroundColor: props?.primary ? "#022846" : "#000",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "#014175",
  },
  "&.Mui-disabled": {
    color: "#fff",
    backgroundColor: "#CFD6DE",
  },
}));

export const OutlinedButton = styled(Button)(() => ({
  color: "#fff", // Set text color to white
  border: "0.5px solid #fff",
  borderRadius: 0, // Set border color to white
  padding: "10px 20px",
  "&:hover": {
    border: "0.5px solid #fff", // Set border color to white on hover
    color: "#000",
    backgroundColor: "#fff",
  },
}));
