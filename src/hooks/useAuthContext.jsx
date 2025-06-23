import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";

export const useAuthContext = () => {
  const { onLoggingOut, isLogged, onLogging } = useContext(AuthContext);
  return { onLoggingOut, isLogged, onLogging };
};
