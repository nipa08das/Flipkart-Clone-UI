import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const DoLoginRefresh = () => {
  const URL = "http://localhost:8080/api/v1/refresh-token";
  // const navigate = useNavigate();

  const refresh = async () => {

    const response = await axios.post(URL, {}, {
      withCredentials: true,
    });

    if (response.status === 200) {
      //set the data into the local storage
      console.log(response.data.data);
      return response.data.data;
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
