import React, { createContext, useContext, useEffect, useState } from "react";
import DoLoginRefresh from "../Auth/DoLoginRefresh";

const AuthContext = createContext({});

const AuthProvider = ({ child }) => {
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    role: "",
    isAuthenticated: true,
    accessExpiration: "",
    refreshExpiration: "",
  });
  const { validateAndRefresh } = DoLoginRefresh();

  const refresh = async () => {
    const data = await validateAndRefresh();
    console.log(data)
    const user = {
      userId: data.userId,
      username: data.username,
      role: data.userRole,
      isAuthenticated: data.authenticated,
      accessExpiration: data.accessExpiration,
      refreshExpiration: data.refreshExpiration,
    };
    setAuth(user);
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {child}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
