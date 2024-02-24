import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
    const [contactName, setContactName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [priority, setPriority] = useState("");

    const navigate = useNavigate();

    const [isSubmitted, setIsSubmitted] = useState(false);

   const addressId = sessionStorage.getItem("addressId");
    const handleContact = async (event) => {
        const URL = "http://localhost:8080/api/v1/contacts";
        const body = {
            contactName: contactName,
            contactNumber: contactNumber,
            priority: priority,
            addressId: addressId,
        };
        sessionStorage.removeItem("addressId");
        const header = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };
        try {
          const response = await axios.post(URL, body, header);
          console.log(response);
          navigate("/add-contact");
          
        } catch (error) {
          console.log(error);
          navigate("/");
        }
      };
      useEffect(() => {
        (isSubmitted) && handleContact();
    },[isSubmitted])

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
    <section className="flex w-6/12">
      <aside className="max-w-md w-full p-16 rounded shadow-md">
        <form className="ml-10">
          <input
            type="text"
            className="mb-4 border-b-2 text-base h-10 w-64 "
            placeholder="Contact Name"
            onChange={(event) => setContactName(event.target.value)}
          />
          <input
            type="tel"
            className="mb-6 border-b-2 text-base h-10 w-64 "
            placeholder="Contact Number"
            minLength={10}
            maxLength={10}
            onChange={(event) => setContactNumber(event.target.value)}
          />
          <select className="mb-6 border-b-2 text-base h-10 w-64"
          onChange={(event) => setPriority(event.target.value)}
          >
            <option value="PRIMARY">Select Priority</option>
            <option value="PRIMARY">PRIMARY</option>
            <option value="SECONDARY">SECONDARY</option>
          </select>
          <button
            type="button"
            className="mt-12 text-base h-10 w-64 bg-orange-500 text-white rounded hover:bg-blue-600"
           onClick={()=> setIsSubmitted(true)}
          >
            Add Contact
          </button>
        </form>
      </aside>
    </section>
  </main>
  )
}

export default Contact