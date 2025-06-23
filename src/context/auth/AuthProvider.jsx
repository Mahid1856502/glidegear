import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import PATH from "../../routes/path";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [isLogged, setIsLogged] = useState(null);

  const onLogging = (code) => {
    debugger;
    if (code) {
      setIsLogged(true);
      localStorage.removeItem("provider");
      localStorage.setItem("token", JSON.stringify(code || ""));
    }
  };

  const onLoggingOut = () => {
    setIsLogged(false);
    localStorage.removeItem("token");
    navigate(PATH.LOGIN);
  };

  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        onLogging,
        onLoggingOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
