import { useState } from "react";
import { FaMinus } from "react-icons/fa";

const SideFilter = ({ label, options, className }) => {
  const [show, setShow] = useState(true);
  return (
    <div className={`bg-gray-3 p-5 text-black ${className}`}>
      <div className="flex justify-between items-center text-lg font-bold">
        {label}
        <FaMinus
          onClick={() => setShow(!show)}
          className="hover:text-white cursor-pointer hover:bg-black p-1"
          size={26}
        />
      </div>
      <div
        className={`transition-all duration-500 ${
          show ? "h-auto opacity-100" : "h-0 opacity-0"
        } overflow-hidden`}
      >
        {options &&
          options?.map((option, idx) => (
            <div className="text-xs mt-3" key={idx}>
              <div className="mb-3">{option?.header}</div>
              {option?.subOptions &&
                option?.subOptions?.map((subOption, index) => (
                  <div key={index} className="ms-3 flex justify-between">
                    <div className="hover:bg-black cursor-pointer duration-700 hover:text-white p-1 ease-out transition-all">
                      {subOption?.label}
                    </div>
                    <div className="hover:bg-black cursor-pointer duration-700 hover:text-white p-1 ease-out transition-all">
                      {subOption?.qty}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideFilter;
