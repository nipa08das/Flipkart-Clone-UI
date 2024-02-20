import React from "react";

const SellerDashboard = () => {
  return (
    <section className="container mx-auto px-4 py-8 w-11/12 max-w-screen-xl ">
      <h1 className="text-3xl font-semibold mb-4 text-center  p-6 rounded-lg shadow-md">
        Seller Dashboard
      </h1>
      <div className="flex-col justify-center items-center space-y-1">
        {/* Revenue */}
        <aside className=" p-6 rounded-lg shadow-md ">
          <h2 className="text-xl font-semibold mb-4 text-black text-center">Revenue</h2>
          <div className="flex justify-center items-center">
            <div className="rounded-lg shadow-md bg-sky-600 size-44 flex justify-center items-center">
              <ul>
                <li>
                  <p className="text-gray-600 text-xl">Total Revenue</p>
                </li>
                <li>
                  <p className="text-3xl text-center">Rs. 10,000</p>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        {/* Product Listing */}
        <aside className=" p-6 rounded-lg shadow-md ">
          <h2 className="text-xl font-semibold mb-4 text-black text-center">
            Product Listing
          </h2>
          <div className="flex justify-center items-center space-x-1">
            <div className="rounded-lg shadow-md bg-sky-600 size-44 flex justify-center items-center">
              <ul>
                <li>
                  <p className="text-gray-600 text-xl">Active</p>
                </li>
                <li>
                  <p className="text-xl text-center">500</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg shadow-md bg-sky-600 size-44 flex justify-center items-center">
              <ul>
                <li>
                  <p className="text-gray-600 text-xl">Out Of stock</p>
                </li>
                <li>
                  <p className="text-xl text-center">50</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg shadow-md bg-sky-600 size-44 flex justify-center items-center">
              <ul>
                <li>
                  <p className="text-gray-600 text-xl">Low Stock</p>
                </li>
                <li>
                  <p className="text-xl text-center">300</p>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        {/* Orders */}
        <aside className=" p-6 rounded-lg shadow-md ">
          <h2 className="text-xl font-semibold mb-4 text-black text-center">
            Orders
          </h2>
          <div className="flex justify-center items-center space-x-1">
            <div className="rounded-lg shadow-md bg-sky-600 size-52 flex justify-center items-center">
              <ul>
                <li>
                  <p className="text-gray-600 text-xl">Total Orders</p>
                </li>
                <li>
                  <p className="text-xl text-center">900</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg shadow-md bg-sky-600 size-52 flex justify-center items-center">
              <ul>
                <li>
                  <p className="text-gray-600 text-xl">Completed Orders</p>
                </li>
                <li>
                  <p className="text-xl text-center">500</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg shadow-md bg-sky-600 size-52 flex justify-center items-center">
              <ul>
                <li>
                  <p className="text-gray-600 text-xl">Orders Yet to Dispatch</p>
                </li>
                <li>
                  <p className="text-xl text-center">240</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg shadow-md bg-sky-600 size-52 flex justify-center items-center">
              <ul>
                <li>
                  <p className="text-gray-600 text-xl">Shipped Orders</p>
                </li>
                <li>
                  <p className="text-xl text-center">160</p>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SellerDashboard;
