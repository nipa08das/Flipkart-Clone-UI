import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import AllRoutes from "./components/routes/AllRoutes";
import AuthProvider from "./components/context/AuthProvider";

//const routes = AllRoutes();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
       <AuthProvider child={ <AllRoutes /> } />
    </BrowserRouter>
  </React.StrictMode>
);
