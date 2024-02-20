import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const DoLoginRefresh = () => {
  const URL = "http://localhost:8080/api/v1/refresh-token";
  const navigate = useNavigate();

  const {setAuth} = useAuth();

  const refresh = async () => {

    const response = await axios.post(URL, {}, {
      withCredentials: true,
    });

    if (response.status === 200) {
      const user = {
        userId: response.data.data.userId,
        username: response.data.data.username,
        role: response.data.data.userRole,
        isAuthenticated: response.data.data.authenticated,
        accessExpiration: response.data.data.accessExpiration,
        refreshExpiration: response.data.data.refreshExpiration,
      };
      //set the data into the local storage
      localStorage.setItem("user", JSON.stringify(user));
      // save user auth response to local storage
      setAuth(user);
      return user;
    } else {
      navigate("/");
    }
  };

  const validateAndRefresh = async () => {
    const userString = localStorage.getItem("user");
    if (userString && userString !== "{}") {
      const user = JSON.parse(userString);
      if (new Date(user.refreshExpiration) > new Date()) {
        if (new Date(user.accessExpiration) > new Date()) {
          console.log(user);
          return user;
        } else return await refresh();
      } else navigate("/login");
    } else navigate("/");
  };

  return { validateAndRefresh };
};

export default DoLoginRefresh;
