import { IoMdClose } from "react-icons/io";
import React, { ReactNode } from "react";
import { Drawer } from "@mui/material";

function Sider({ isSiderOpen, closeMenu, children, anchor }) {
  return (
    <React.Fragment key={anchor}>
      <Drawer
        anchor={anchor}
        open={isSiderOpen ? true : false}
        onClose={() => closeMenu()}
      >
        <div className="w-[320px] p-4">
          <div
            className={`flex ${
              anchor === "right" ? "justify-start" : "justify-end"
            }`}
          >
            <span
              onClick={() => closeMenu()}
              className="text-black cursor-pointer mb-5"
            >
              <IoMdClose size={18} />
            </span>
          </div>
          {children}
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default Sider;
