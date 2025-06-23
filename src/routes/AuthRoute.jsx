import PropTypes from "prop-types";
import AuthLayout from "../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
import PATH from "./path";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLayoutEffect } from "react";
import Loader from "../common/Loader";

function AuthRoute({ element }) {
  const navigate = useNavigate();
  const { isLogged } = useAuthContext();

  useLayoutEffect(() => {
    if (isLogged) {
      navigate(PATH.DASHBOARD);
    }
  }, [isLogged]);

  return isLogged === null ? <Loader /> : <AuthLayout>{element}</AuthLayout>;
}

AuthRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default AuthRoute;
