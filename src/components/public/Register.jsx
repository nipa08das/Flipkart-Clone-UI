import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ role }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    event.preventDefault();

    // fire request to the server
    // using axios
    const URL = "http://localhost:8080/api/v1/users/register";
    const body = {
      email: email,
      password: password,
      userRole: role,
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
      navigate("/verify-otp");
      sessionStorage.setItem("email", email);
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="max-w-md w-full p-16 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Registration
        </h2>
        <form className="ml-10">
          <input
            type="email"
            className="mb-4 border-2 text-base h-10 w-64 text-center"
            placeholder="Enter your Email Id"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <input
            type="password"
            className="mb-6 border-2 text-base h-10 w-64 text-center"
            placeholder="Enter your Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button
            type="submit"
            className="mb-6 border-2 text-base h-10 w-64 bg-orange-500 text-white rounded hover:bg-blue-600"
            onClick={handleRegistration}
          >
            Continue
          </button>
          <button
            className="text-base h-10 w-64  text-blue-600 rounded"
            onClick={() => navigate("/login")}
          >
            Existing User? Log In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;
