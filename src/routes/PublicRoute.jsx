import PropTypes from "prop-types";
import PublicLayout from "../layout/PublicLayout";
import { useNavigate } from "react-router-dom";
import PATH from "./path";
import { useAuthContext } from "../hooks/useAuthContext";
import Loader from "../common/Loader";
import { useLayoutEffect } from "react";

function PublicRoute({ element }) {
  // const navigate = useNavigate();
  // const { isLogged } = useAuthContext();

  // useLayoutEffect(() => {
  //   if (isLogged) {
  //     navigate(PATH.DASHBOARD);
  //   }
  // }, [isLogged]);

  // return isLogged === null || isLogged ? (
  //   <Loader />
  // ) : (
  return <PublicLayout>{element}</PublicLayout>;
  // );
}

PublicRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PublicRoute;
