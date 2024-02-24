import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    const email = sessionStorage.getItem("email");
    if(email === null)
    {
      navigate("/")
    }
    sessionStorage.removeItem("email");
    // fire request to the server
    // using axios
    const URL = "http://localhost:8080/api/v1/verify-otp";
    const body = {
      email: email,
      otp: otp,
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
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="max-w-md w-full p-16 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Authentication
        </h2>
        <form className="ml-10">
          
          <input
            type="password"
            className="mb-6 border-2 text-base h-10 w-64 text-center"
            placeholder="Enter your OTP"
            minLength="6" maxLength="6" pattern="[0-9]{6}" required
            onChange={(event) => setOtp(event.target.value)}
          />
          <button
            type="submit"
            className="border-2 text-base h-10 w-64 bg-orange-500 text-white rounded hover:bg-blue-600"
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </button>
        </form>
      </section>
    </main>
  );
};

export default VerifyOTP;
