import React from "react";
import Img1 from "../assets/adidas.png";
import pic from "../assets/1900-1949.jpg";

const cards = [
  {
    id: 1,
    image: pic,
    title: "Our Motto",
    desc: "Become everything we are not.",
  },
];

function History() {
    return (
    <section className="w-full py-12 sm:border-0 flex justify-center bg-gray-50 border-4 sm:w-full sm:flex sm:justify-center sm:bg-gray-50">
          <div className="w-[1200px]">

            <div className="sm:text-4xl text-sm font-bold sm:mb-10 mb-4 text-center">
              <h2>About Us</h2>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-0 sm:gap-10 gap-5">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-lg p-8 mt-10"
              >
              <img
                src={card.image}
                alt={card.title}
                className="sm:w-[500px] sm:h-[240px] w-[250px] h-[300px] object-contain mb-6"
              />
              <h3 className="sm:text-2xl text-sm font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
          <div className="text-justify sm:text-[25px] sm:py-10 py-4 px-7 sm:mt-10 bg-white rounded-2xl shadow-lg">We started in
             a laundry room and conquered the world. And in between, 
             we’ve scored big and sometimes struggled to reach our goals. We’ve done our 
             best for the best  . We’ve improved and grown. Looking ahead to the future, always remembering where we came from. This is our story.
      </div>
        </div>
      </div>
    </section>
  );
}

export default History;