import React from "react";
import { Route, Routes } from "react-router-dom";
import navs from "./Navigations";
import App from "../../App";
import { useAuth } from "../context/AuthProvider";

// const user = {
//   username: "",
//   role: "SELLER",
//   isAuthenticated: false,
// };

// const { role, isAuthenticated } = user;

const AllRoutes = () => {
  const { auth } = useAuth();
  const { role , isAuthenticated } = auth;
  return (
    <Routes>
      <Route path={"/"} element={<App />}>
        {navs.map((nav, i) => {
          if (isAuthenticated) {
            if (nav.isVisibleAfterAuth) {
              if (nav.role === role || nav.role === "ALL") {
                console.log(nav);
                return <Route key={i} path={nav.path} element={nav.element} />;
              }
            }
          } else {
            if (!nav.requireAuth && nav.role === "ALL") {
              console.log(nav);
              return <Route key={i} path={nav.path} element={nav.element} />;
            }
          }
        })}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
