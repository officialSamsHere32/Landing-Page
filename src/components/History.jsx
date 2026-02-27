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
    <section className="w-full py-24 flex justify-center bg-gray-50">
          <div className="w-[1200px]">

            <div className="font-denton uppercase tracking-[0.04em] leading-[110%] text-[40px] sm:text-[72px] md:text-[96px] lg:text-[128px] xl:text-[164px] text-center">
              <h2>About Us</h2>
              <p className="text-gray-600 text-lg">
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[500px] h-[240px] object-contain mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
          <div className="text-justify text-[25px] py-10 px-7">We started in
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