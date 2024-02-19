import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-blue-950 text-white">
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
            className="p-2 rounded text-black" size={50}
          />
        </div>

        {/* LINK BLOCK */}
        <div className="flex items-center justify-evenly space-x-4">
          {/* login */}
          <Link to={"/login"} className="hover:text-gray-300">
            Login
          </Link>

          {/* Become a seller option */}
          <Link to={"/seller/register"} className="hover:text-gray-300">
            Become a seller
          </Link>

          {/* Cart */}
          <Link to={"/cart"}>Cart</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;