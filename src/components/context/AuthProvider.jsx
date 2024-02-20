import React, { createContext, useContext, useEffect, useState } from "react";
import DoLoginRefresh from "../Auth/DoLoginRefresh";

const AuthContext = createContext({});

const AuthProvider = ({ child }) => {
  const [auth, setAuth] = useState({
    userId: "",
    username: "",
    role: "",
    isAuthenticated: false,
    accessExpiration: "",
    refreshExpiration: "",
  });
  const { validateAndRefresh } = DoLoginRefresh();

  const refresh = async () => {
    const user = await validateAndRefresh();
    console.log(user)
    if(user){
      setAuth({...user});
    }

  };

  let isREfreshRequested = false;
  useEffect(() => {
    if(!isREfreshRequested)
    {
      isREfreshRequested = true;
      refresh();
    }
    
  }, []);

  // useEffect(() => {
  //   console.log(auth);
  // }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {child}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
