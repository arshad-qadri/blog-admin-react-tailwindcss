import { useState } from "react";

const useAuthServices = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("login") !== null
  );
  const login = () => {
    // Your login logic here
    localStorage.setItem("login", "login");
    setAuthenticated(true);
  };

  const logout = () => {
    // Your logout logic here
    localStorage.removeItem("login");
    setAuthenticated(false);
  };

  return {
    authenticated,
    login,
    logout,
  };
};
export default useAuthServices;
