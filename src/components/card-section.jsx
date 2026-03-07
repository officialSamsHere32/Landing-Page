import React from "react";
import Img1 from "../assets/adidas.png";
import Img2 from "../assets/adidas.png";
import Img3 from "../assets/adidas.png";
import reactSvg from "../assets/react.svg";

const cards = [
  {
    id: 1,
    image: Img1,
    title: "Fast Development",
    desc: "Build modern apps faster with optimized tooling and lightning speed.",
  },
  {
    id: 2,
    image: Img2,
    title: "Modern Stack",
    desc: "Powered by the latest frontend technologies for scalable applications.",
  },
  {
    id: 3,
    image: Img3,
    title: "Easy Deployment",
    desc: "Deploy your project easily with seamless integration support.",
  },
];

function CardSection() {
  return (
    <section id="about" className="sm:w-full sm:border-0 sm:flex sm:justify-center sm:bg-gray-50 w-full py-24 flex justify-center bg-gray-50 border-4 border-teal-950">
      <div className="sm:w-[1200px] w-[300px]">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="sm:text-4xl sm:font-bold sm:mb-4 text-sm font-bold mb-3">Why Choose Us?</h2>
          <p className="text-gray-600 sm:text-lg text-sm">
            Everything you need to build modern frontend applications.
          </p>
        </div>

        {/* Cards */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-10 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 mb-9"
            >
              <img
                src={card.image}
                alt={card.title}
                className="sm:w-full sm:h-[180px] w-8 object-contain mb-6"
              />
              <h3 className="sm:text-2xl text-sm font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
