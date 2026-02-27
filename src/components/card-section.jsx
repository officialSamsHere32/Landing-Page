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
    <section className="w-full py-24 flex justify-center bg-gray-50">
      <div className="w-[1200px]">
        <img src={reactSvg} alt="react svg" />

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 text-lg">
            Everything you need to build modern frontend applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[180px] object-contain mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
