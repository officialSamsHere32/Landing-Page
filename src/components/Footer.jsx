import React from "react";
import Img1 from "../assets/YT.png";
import pic from "../assets/IG4.jpg";
import X from "../assets/X-new.png";
import InputFooter from "../components/form/InputFooter"

const handleContact = (formData) => {
  console.log("Contact form submitted:", formData)
}

const cards = [
  {
    image: X,
  },
  {
    image: Img1,
  },
  {
    image: pic,
  },    
];

function Footer() {
  return (
    <footer className="w-full py-1 flex justify-center bg-gray-50">
      <div className="w-[1200px]">
        <div className="text-center mb-16">
          <div className="text-4xl font-bold mb-4 text-center">
            <h2>Feedback</h2>
          </div></div>
        <div className="grid grid-cols-2 gap-10">
          <div
            className=""
          >
            <InputFooter
              onSubmit={handleContact} />
          </div>
          <div
            className="bg-white rounded-2xl shadow-lg p-8 "
          >
            <h1 className="text-justify text-[25px]">
              Adi-Dassler-Straße 1, 91074 Herzogenaurach, Germany
            </h1>
            <div className="flex mt-20 gap-3 rounded-full">
              {cards.map((card, index) => ( 
                <div key={index}>
                  <img src={card.image} className="w-[25px] h-[25px] flex" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center">@copyright</p>
      </div>
    </footer>
  );
}

export default Footer;