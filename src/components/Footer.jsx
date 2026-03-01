import React from "react";
import Img1 from "../assets/adidas.png";
import Img2 from "../assets/download.jpg"

const cards = [
  {
    image: Img2,
    title: "example@gmail.com",
    desc: "Contact us at",
  },
];
const image = [
  {
    image: Img2,
  }
]
function Footer() {
    return (
    <section className="w-full py-24 flex justify-center bg-gray-50">
        <div className="w-[1200px]">

            <div className="px-12 py-30 text-center font-serif text-teal-500">
              <h2>Feedback</h2>
              <p className="text-gray-600 text-lg">
              </p>
        </div>

            <div className="grid grid-cols-2 gap-10">
          {cards.map((card) => (
            <div className="bg-white rounded-2xl">
              <p className="text-gray-600">{card.desc}</p>
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
            </div>
          ))}
          <div className="bg-white rounded-2xl shadow-lg py-50 hover:shadow-2xl transition duration-300">
            {image.map((images) => (
              <div key={images.id}>
                <div className="text-justify text-[25px] px-11 py-1">Indonesia, Jakarta Barat, Cengkareng</div>
                <img
                  src={images.Img2}
                  className="w-[500px] h-[240px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;