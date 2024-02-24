import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const Address = () => {
    const [streetAddress, setStreetAddress] = useState("");
    const [streetAddressAdditional, setStreetAddressAdditional] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pincode, setPincode] = useState("");
    const [addressType, setAddressType] = useState("");

   const {auth} = useAuth();
   const {role} = auth;

    const navigate = useNavigate();

    const [isSubmitted, setIsSubmitted] = useState(false);

    const storeId = sessionStorage.getItem("storeId")
    const handleAddress = async (event) => {
        let URL;
        if(role === "SELLER")
        {
        URL = `http://localhost:8080/api/v1/addresses?storeId=${storeId}`;
        }else
        {
        URL = `http://localhost:8080/api/v1/addresses`;
        }
        sessionStorage.removeItem("storeId");
        const body = {
            streetAddress: streetAddress,
            streetAddressAdditional: streetAddressAdditional,
            city: city,
            state: state,
            country: country,
            pincode: pincode,
            addressType: addressType,
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
          const addressId = response.data.data.addressId;
          sessionStorage.setItem("addressId", addressId);

          navigate("/add-contact");
        } catch (error) {
          console.log(error);
          navigate("/");
        }
      };

    useEffect(() => {
        (isSubmitted) && handleAddress();
    },[isSubmitted])



  return (
    <main className="min-h-screen flex items-center justify-center px-4">
    <section className="flex w-6/12">
      <aside className="max-w-md w-full p-16 rounded shadow-md">
        <form className="ml-10">
          <input
            type="text"
            className="mb-4 border-b-2 text-base h-10 w-64 "
            placeholder="Street Address"
            onChange={(event) => setStreetAddress(event.target.value)}
          />
          <input
            type="text"
            className="mb-6 border-b-2 text-base h-10 w-64 "
            placeholder="Street Address Additional"
            onChange={(event) => setStreetAddressAdditional(event.target.value)}
          />
          <input
            type="text"
            className="mb-6 border-b-2 text-base h-10 w-64 "
            placeholder="City"
            onChange={(event) => setCity(event.target.value)}
          />
          <input
            type="text"
            className="mb-6 border-b-2 text-base h-10 w-64 "
            placeholder="State"
            onChange={(event) => setState(event.target.value)}
          />
          <input
            type="text"
            className="mb-6 border-b-2 text-base h-10 w-64 "
            placeholder="Country"
            onChange={(event) => setCountry(event.target.value)}
          />
          <input
            type="number"
            className="mb-6 border-b-2 text-base h-10 w-64 "
            placeholder="Pincode"
            minLength={6}
            maxLength={6}
            onChange={(event) => setPincode(event.target.value)}
          />
          <select className="mb-6 border-b-2 text-base h-10 w-64 mt-5"
          onChange={(event) => setAddressType(event.target.value)}
          >
            <option value="RESIDENTIAL">Select Address Type</option>
            <option value="RESIDENTIAL">RESIDENTIAL</option>
            <option value="OFFICIAL">OFFICIAL</option>
          </select>
          <button
            type="button"
            className="mt-12 text-base h-10 w-64 bg-orange-500 text-white rounded hover:bg-blue-600"
           onClick={()=> setIsSubmitted(true)}
          >
            Add Address
          </button>
        </form>
      </aside>
    </section>
  </main>
  )
}

export default Address