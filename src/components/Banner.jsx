import React from "react";
import Button from "./Button.jsx";
import adidas from "../assets/adidas.png";

function Banner() {
  return (
    <>
      <section className="block lg:hidden w-full flex justify-center py-24">
        <div className="flex-col w-full max-w-[1200px] flex items-center px-6">
          {/* Left Content */}
          <div className="w-full">
            <div className="border-2 border-gray-800 rounded-3xl sm:border-0 px-6 py-8 sm:px-0 sm:py-0">
              <h1 className="text-center text-2xl sm:text-4xl mb-6 font-semibold text-[#184657]">
                The dream of every frontend developer!
              </h1>
              <h2 className="text-center text-3xl sm:text-5xl mb-6 font-extrabold text-black">
                Vite is here
              </h2>
              <p className="text-center text-base sm:text-xl mb-10 font-normal text-black">
                Work in a place that makes you comfortable.<br />
                Download now. <br />
                See Versions.
              </p>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              <Button
                className="bg-[#2545f4] text-white px-8 sm:px-12 py-3 rounded-xl text-base sm:text-lg font-bold hover:bg-[#3b4ba5] transition"
                name="Download"
              />

              <Button
                className="border border-[#2545f4] text-[#2545f4] px-8 sm:px-12 py-3 rounded-xl text-base sm:text-lg font-bold hover:bg-[#2545f4] hover:text-white transition"
                name="Versions"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full mt-8 flex justify-center">
            <img src={adidas} alt="Banner" className="w-[320px] sm:w-[450px] object-contain" />
          </div>
        </div>
      </section>

      <section className="hidden lg:block w-full py-20">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-[598px]">
            <div className="w-1/2 pr-8">
              <h1 className="text-4xl mb-8 font-semibold text-[#184657]">
                The dream of every frontend developer!
              </h1>

              <h2 className="text-5xl mb-8 font-extrabold text-black">Vite is here</h2>

              <div className="text-xl mb-10 font-normal text-black">
                Work in a place that makes you comfortable.<br />
                Download now<br />
                See Versions.
              </div>

              <div className="flex space-x-4 mt-6">
                <Button
                  className="bg-[#2545f4] text-white px-12 py-3 rounded-xl text-lg font-bold hover:bg-[#3b4ba5] hover:text-white"
                  name="Download"
                />
                <Button
                  className="border border-[#2545f4] text-[#2545f4] px-12 py-3 rounded-xl text-lg font-bold hover:bg-[#3b4ba5] hover:text-white"
                  name="Versions"
                />
              </div>
            </div>

            <div className="w-1/2 flex justify-end">
              <img src={adidas} alt="Img Banner" className="w-[553px] h-[598px] object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;