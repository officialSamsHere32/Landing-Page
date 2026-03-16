import React from "react";
import img1 from "../assets/adidas.png";

export default function GridLayout() {
  return (
    <>
      {/* product card */}

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
          </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* sidebar layout */}
      {/* <div className="grid grid-cols-12 min-h-screen">
        <aside className="col-span-2 bg-gray-200 text-white p-6 ">
          sidebar menus
        </aside>

        <main className="col-span-10 p-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-300 p-4 rounded shadow">Total Users</div>
            <div className="bg-gray-300 p-4 rounded shadow">Revenue</div>
            <div className="bg-gray-300 p-4 rounded shadow">Orders</div>
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
      <div class="grid grid-cols-3 gap-4">
        <header class="col-span-3 bg-gray-200 p-6">Header</header>

        <section class="col-span-3 bg-blue-200 p-10">Hero Section</section>

        <div class="col-span-1 bg-green-200 p-6">Feature 1</div>

        <div class="col-span-2 bg-green-300 p-6">Feature 2</div>

        <footer class="col-span-3 bg-gray-300 p-6">Footer</footer>
      </div>
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