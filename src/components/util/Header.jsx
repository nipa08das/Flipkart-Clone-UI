import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { auth } = useAuth();
  const { isAuthenticated, role, username } = auth;
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="max-w-screen-xl h-20">
      <nav className="flex items-center justify-normal p-4 bg-blue-950  text-white">
        {/* LOGO */}
        <Link>
          <img
            src="./Images/Flipkart-logo.png"
            alt="logo"
            className="h-12 w-28"
          />
        </Link>

        {/* SEARCH BAR */}
        <div className="ml-44 flex items-center px-4 bg-blue-100 rounded-md">
        <div className="py-2 bg-transparent rounded-sm">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="p-2 outline-none bg-transparent rounded-sm text-black"
            size={50}
          />
          
        </div>

        {/* LINK BLOCK */}
        <div className="ml-48 flex space-x-3">

          <Link to={"/"}>
          <FontAwesomeIcon icon={faHome} className="text-blue-500"></FontAwesomeIcon>
          </Link>
          {isAuthenticated ? (
            <div
              onMouseEnter={() =>  setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link>{username}</Link>
              {showDropdown && (
                <div className="absolute mt-1 bg-white rounded-md shadow-lg">
                  
                  <Link to={"/account"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                Account
              </Link>
                    <Link to={"/"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Logout
                    </Link>
                    <Link to={"/edit-profile"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Edit profile
                    </Link>
                    {/* Cart */}
                    {role === "CUSTOMER" ? (
                      <>
                        <Link to={"/cart"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cart</Link>
                        <Link to={"/orders"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Orders</Link>
                        <Link to={"/wishlist"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Wishlist</Link>
                      </>
                    ) : (
                      <>
                        <Link to={"/seller-dashboard"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Seller-Dashboard</Link>
                        <Link to={"/seller-orders"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Seller-Orders</Link>
                        <Link to={"/add-store"} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Add Store</Link>
                      </>
                    )}
                  
                </div>
              )}
            </div>
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
