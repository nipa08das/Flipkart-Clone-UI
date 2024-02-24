import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "./Dashboard";

const SellerDashboard = () => {
  return (
    <section className="container mx-auto px-4 py-8 w-full max-w-screen-xl flex">
      <main className="h-full w-1/4">
        <aside className=" p-2 rounded-lg shadow-md size-full">
          <h3 className="text-center font-semibold text-slate-800">My Store</h3>
        </aside>
        <aside className="rounded-lg shadow-md w-full h-44 space-y-14 p-3">
          <h4 className="font-semibold text-slate-800">Gross Revenue</h4>
          <div className="flex justify-center items-center">
            <p className=" text-gray-500">no data to show</p>
          </div>
        </aside>
        {/* <aside>
         <div>
          <div>
          <Dashboard iconName={"faHome"} name={"View Dashboard"} link={"/"}/>
          </div>
          <div>
          <Dashboard iconName={"faHome"} name={"Manage Orders"} link={"/"}/>
          </div>
         </div>
         <div>
          <div>
          <Dashboard iconName={"faHome"} name={"Add Product"} link={"/"}/>
          </div>
          <div>
          <Dashboard iconName={"faHome"} name={"Edit Store Info"} link={"/"}/>
          </div>
         </div>
        </aside> */}
      </main>
      <main className="size-full">
        {/* Orders */}
        <aside className=" p-2 rounded-lg shadow-md ">
          <p className="font-semibold mb-4 text-slate-800">Total Orders</p>
          <p className="text-gray-500 text-3xl font-bold border-b-2">
            ---------
          </p>
          <div className="flex justify-center items-center w-full h-28">
            <Card name={"Completed"} value={"00"} />
            <Card name={"Yet to Dispatch"} value={"00"} />
            <Card name={"Shipped"} value={"00"} />
            <Card name={"Returned"} value={"00"} />
          </div>
        </aside>
        {/* Product Listing */}
        <aside className=" p-2 rounded-lg shadow-md ">
          <p className="font-semibold mb-4 text-slate-800 border-b-2">
            Product Listing
          </p>
          <div className="flex justify-center items-center  w-full h-28">
            <Card name={"Verified & Active"} value={"00"} />
            <Card name={"Non-Verified"} value={"00"} />
            <Card name={"Inactive"} value={"00"} />
            <Card name={"Out of Stock"} value={"00"} />
            <Card name={" Low Stock (< 3 units)"} value={"00"} />
          </div>
        </aside>
        {/* Popular Products*/}
        <aside className=" p-2 rounded-lg shadow-md  w-full h-28 ">
          <p className="font-semibold mb-4 text-slate-800 space-y-6 border-b-2">
            Your most popular products
          </p>
          <div className="flex justify-center items-center"></div>
        </aside>
      </main>
    </section>
  );
};

export default SellerDashboard;
