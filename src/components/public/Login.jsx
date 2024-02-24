import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { auth, setAuth } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();

    // fire request to the server
    // using axios
    const URL = "http://localhost:8080/api/v1/login";
    const body = {
      email: email,
      password: password,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.post(URL, body, header);
      console.log(response);

      const user = {
        userId: response.data.data.userId,
        username: response.data.data.username,
        role: response.data.data.userRole,
        isAuthenticated: response.data.data.authenticated,
        accessExpiration: response.data.data.accessExpiration,
        refreshExpiration: response.data.data.refreshExpiration,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setAuth(user);
      console.log(
        "userid" + auth.userId,
        auth.username,
        auth.role,
        auth.isAuthenticated
      );
      navigate("/");
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="flex w-6/12">
        <aside className="bg-blue-600 max-w-md w-full p-16 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">
            Login
          </h2>
          <p className="text-gray-200">Get access to your Orders, Wishlist and Recommendations</p>
          {/* <Link>
          <img
            src="./Images/flipkart login.jpg"
            alt="login image"
            className="h-28 w-36"
          />
        </Link> */}
        </aside>
        <aside className="max-w-md w-full p-16 rounded shadow-md">
          <form className="ml-10">
            <input
              type="email"
              className="mb-4 border-b-2 text-base h-10 w-64 "
              placeholder="Enter Your Email Id"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              className="mb-6 border-b-2 text-base h-10 w-64 "
              placeholder="Enter Your Password"
              minLength={8}
              maxLength={15}
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className="text-gray-400">By continuing, you agree to Flipkart's </p>
            <Link>Terms of Use</Link> 
            <p>and </p>
            <Link>Privacy Policy.</Link>
            <button
              type="submit"
              className="mb-6 text-base h-10 w-64 bg-orange-500 text-white rounded hover:bg-blue-600"
              onClick={handleLogin}
            >
              Log In
            </button>
            <button
              className="text-base h-10 w-64  text-blue-600"
              onClick={() => navigate("/seller/register")}
            >
              New to Flipkart? Create an Account
            </button>
          </form>
        </aside>
      </section>
    </main>
  );
};

export default Login;
