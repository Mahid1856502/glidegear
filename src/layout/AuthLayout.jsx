import PropTypes from "prop-types";
import { ReactNode } from "react";
import AuthNavbar from "../components/navbar/AuthNavbar";
import Footer from "../components/Footer";

function AuthLayout({ children }) {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex flex-col">
        <AuthNavbar />
        <main className="mt-26 md:mt-28">
          {/* <div className="px-5 md:px-20"> */}
          {children}
          {/* </div> */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthLayout;
