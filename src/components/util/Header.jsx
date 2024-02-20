import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Header = () => {
  const { auth } = useAuth();
  const { isAuthenticated, role } = auth;
  return (
    <header className="">
      <nav className="flex items-center justify-between p-4 bg-blue-950  text-white">
        {/* LOGO */}
        <Link>
          <img
            src="./Images/Flipkart-logo.png"
            alt="logo"
            className="h-12 w-28"
          />
        </Link>

        {/* SEARCH BAR */}
        <div>
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="p-2 rounded text-black"
            size={50}
          />
        </div>

        {/* LINK BLOCK */}
        <div className="flex items-center justify-evenly space-x-4">
          {isAuthenticated ? (
            <>
              <Link to={"/"} className="hover:text-gray-300">
                Logout
              </Link>
              <Link to={"/account"} className="hover:text-gray-300">
                Account
              </Link>
              <Link to={"/edit-profile"} className="hover:text-gray-300">
                Edit profile
              </Link>
              {/* Cart */}
              {role === "CUSTOMER" ? (
                <>
                  <Link to={"/cart"}>Cart</Link>
                  <Link to={"/orders"}>Orders</Link>
                  <Link to={"/wishlist"}>Wishlist</Link>
                </>
              ) : (
                <>
                  <Link to={"/seller-dashboard"}>seller-dashboard</Link>
                  <Link to={"/seller-orders"}>seller-orders</Link>
                </>
              )}
            </>
          ) : (
            //{/* login */}
            <>
              <Link to={"/login"} className="hover:text-gray-300">
                Login
              </Link>
              {/* Register */}
              <Link to={"customer/register"} className="hover:text-gray-300">
                Register
              </Link>
              {/* Become a seller option */}
              <Link to={"/seller/register"} className="hover:text-gray-300">
                Become a seller
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
