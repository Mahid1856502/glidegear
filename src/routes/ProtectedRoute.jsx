import { useEffect, useLayoutEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import ProtectedLayout from "../layout/ProtectedLayout";
import { useAuthContext } from "../hooks/useAuthContext";
import { QueryClient } from "react-query";
import PATH from "./path.js";
import Loader from "../common/Loader";
import { tokenVerification } from "../services/auth";

function ProtectedRoute({ element }) {
  const navigate = useNavigate();

  const { isLogged, onLogging } = useAuthContext();

  // const mutation = useMutationHandler();

  useEffect(() => {
    if (!isLogged && isLogged !== null) {
      navigate(PATH.LOGIN);
    }
  }, [isLogged]);

  const [queryParameters] = useSearchParams();
  const code = queryParameters?.get("code");
  const queryClient = new QueryClient();

  const getToken = async () => {
    try {
      debugger;

      const response = await queryClient.fetchQuery({
        queryKey: ["user", code],
        queryFn: () => tokenVerification(code || ""),
        // onSuccess: (data) => console.log("data", data),
      });

      if (response) {
        debugger;
        onLogging(response?.elightwalkCreateSocialLogin);
        navigate(PATH.DASHBOARD);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const authenticateToken = async () => {
  //   try {
  //     const socialLogin = gql`
  //   mutation ElightwalkCreateSocialLogin {
  //     elightwalkCreateSocialLogin(
  //       input: {
  //         code: "${code}"
  //         provider: "google"
  //       }
  //     )
  //   }
  // `;

  //     const onSuccess = () => navigate("/");

  //     const mutation = useMutationHandler({ gqlQuery: socialLogin, onSuccess });
  //   } catch (error) {}
  // };

  useLayoutEffect(() => {
    // if (code) sociallogin(code);
    if (code) getToken();
  }, [code]);

  // return <ProtectedLayout>{element}</ProtectedLayout>;
  return !isLogged ? <Loader /> : <ProtectedLayout>{element}</ProtectedLayout>;
}

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
