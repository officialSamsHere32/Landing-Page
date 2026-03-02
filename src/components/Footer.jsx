import React from "react";
import Img1 from "../assets/Youtube.jpg";
import pic from "../assets/download.jpg";
import X from "../assets/X.jpg";
import InputFooter from "../components/form/InputFooter"

const handleContact = (formData) => {
  console.log("Contact form submitted:", formData)
}

const cards = [
  {
    image: X,
  },
];

function Footer() {
    return (
    <footer className="w-full py-1 flex justify-center bg-gray-50">
          <div className="w-[1200px]">
            <div className="font-denton uppercase tracking-[0.04em] leading-[110%] text-[40px] sm:text-[72px] md:text-[96px] lg:text-[128px] xl:text-[164px] text-center">
              <h2>Feedback</h2>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
              >
              <InputFooter
                onSubmit={handleContact}/>
              </div>
            <div
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <h1 className="text-justify text-[25px] py-10 px-7">
                Jakarta Barat, Cengkareng, ...
              </h1>
              
        <div className="flex ">
          <img src={X}
                className="w-[60px] h-[60px] flex"></img>   
          <img src={Img1}
                className="w-[60px] h-[60px] flex"></img>   
          <img src={pic}
                className="w-[60px] h-[60px] flex"></img></div>   
            </div>
        </div>
      <p className="text-center">@copyright</p>
      </div>
    </footer>
  );
}

export default Footer;