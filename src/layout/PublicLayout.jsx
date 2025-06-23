import PropTypes from "prop-types";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

function PublicLayout({ children }) {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex flex-col">
        <Navbar />
        <main className="">
          {/* <div className="px-5 md:px-20"> */}
          {children}
          {/* </div> */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PublicLayout;
