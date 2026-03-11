import React from "react";
import img1 from "../assets/adidas.png";

export default function GridLayout() {
  return (
    <>
      {/* product card */}
      {/* <div className="max-w-[1200] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> */}
          {/* first card  */}
          {/* <div className="bg-gray-100 shadow rounded-lg p-4">
            <img
              src={img1}
              alt="Product 1"
              loading="lazy"
              className="w-full h-400 object-cover rounded-lg mb-4"
            />
            <h3 className="mt-3 font-semibold">Product 1</h3>
            <p className="text-gray-600">Description for Product 1</p>
            <p className="text-lg font-bold">$19.99</p>
          </div> */}
          {/* second card */}
          {/* <div className="bg-gray-100 shadow rounded-lg p-4">
            <img
              src={img1}
              alt="Product 1"
              loading="lazy"
              className="w-full h-auto"
            />
            <h3 className="mt-3 font-semibold">Product 1</h3>
            <p className="text-gray-600">Description for Product 1</p>
            <p className="text-lg font-bold">$19.99</p>
          </div>
        </div>
      </div> */}
      
      {/* Sidebar Layout */}
      {/* <div className="grid grid-cols-12 min-h-screen"> */}
        {/* sidebar */}
        {/* col span supaya vertikal */}
        {/* <aside className="col-span-2 bg-gray-400 text-white p-6">
            sidebar menus
        </aside> */}

        {/* content */}
        {/* <main className="col-span-10 p-8">
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-500 p-4 rounded shadow">Total Users</div>
                <div className="bg-gray-500 p-4 rounded shadow">Revenue</div>
                <div className="bg-gray-500 p-4 rounded shadow">Orders</div>
            </div>
        </main>
      </div> */}

      {/* grid area */}
      {/* <div className="grid grid-cols-3 gap-3">
        <header className="col-span-3 bg-gray-200 p-6 rounded shadow">Header</header>
        <section className="col-span-3 bg-green-500 p-10 rounded shadow">Hero section</section>
        <div className="col-span-1 bg-green-400 p-6 rounded shadow">Feature 1</div>
        <div className="col-span-2 bg-green-400 p-6 rounded shadow">Feature 2</div>
        <footer className="col-span-3 bg-gray-300 p-6">footer</footer>
      </div> */}
    </>
  );
}