import React from "react";
import Button from "./Button.jsx";
import adidas from "../assets/adidas.png"

function Banner() {
  return (
    <section className="w-full flex justify-center py-24">
      <div className="w-[1200px] flex items-center">
        
        {/* Left Content */}
        <div className="w-1/2">
          <h1 className="text-4xl mb-6 font-semibold text-[#184657]">
            The dream of every frontend developer!
          </h1>

          <h2 className="text-5xl mb-6 font-extrabold text-black">
            Vite is here
          </h2>

          <p className="text-xl mb-10 font-normal text-black">
            Download now. <br />
            See Versions.
          </p>

          <div className="flex space-x-4">
            <Button
              className="bg-[#2545f4] text-white px-12 py-3 rounded-xl text-lg font-bold hover:bg-[#3b4ba5] transition"
              name="Download"
            />

            <Button
              className="border border-[#2545f4] text-[#2545f4] px-12 py-3 rounded-xl text-lg font-bold hover:bg-[#2545f4] hover:text-white transition"
              name="Versions"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 flex justify-end">
          <img
            src={adidas}
            alt="Banner"
            className="w-[550px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Banner;