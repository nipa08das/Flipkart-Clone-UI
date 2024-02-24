import React, { useEffect, useState } from "react";
import { useNavigate, useSubmit } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";

const Store = () => {
  const [storeName, setStoreName] = useState("");
  const [about, setAbout] = useState("");
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { auth } = useAuth();
  const { userId } = auth;

  const handleStore = async (event) => {

    const URL = "http://localhost:8080/api/v1/stores";
    const body = {
      storeName: storeName,
      about: about,
      sellerId: userId,
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
      const store = {
        storeId: response.data.data.storeId,
        storeName: response.data.data.storeName,
        logoLink: response.data.data.logoLink,
        about: response.data.data.about,
      };
      sessionStorage.setItem("storeId",store.storeId);

      navigate("/add-address");
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  useEffect(() => {
    (isSubmitted) && handleStore();
  },[isSubmitted])

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="flex w-6/12">
        <aside className="max-w-md w-full p-16 rounded shadow-md">
          <form className="ml-10">
            <input
              type="text"
              className="mb-4 border-b-2 text-base h-10 w-64 "
              placeholder="Enter Your Store Name"
              onChange={(event) => setStoreName(event.target.value)}
            />
            <input
              type="text"
              className="mb-6 border-b-2 text-base h-10 w-64 "
              placeholder="Description"
              minLength={8}
              maxLength={15}
              onChange={(event) => setAbout(event.target.value)}
            />
            <button
              type="button"
              className="mb-6 text-base h-10 w-64 bg-orange-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsSubmitted(true)}
            >
              Add Store
            </button>
          </form>
        </aside>
      </section>
    </main>
  );
};

export default Store;
