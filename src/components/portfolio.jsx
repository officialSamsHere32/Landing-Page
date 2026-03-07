import React from "react";
import Profile from "../assets/Profile.jpg"

const cards = [
  {
    id: 1,
    title: "My Work",
    href: "X.com"
  },
  {
    id: 2,
    title: "Soft Skills",
    href: "X2.com"
  },
  {
    id: 3,
    title: "Certificates",
    href: "X3.com"
  },
];

function Portfolio() {
    return (
    <section className=" w-full flex justify-center py-24">
        <div className="flex-col w-full max-w-[1200px] flex items-center px-6">
            <div className="w-full">
            <div className="bg-[#7580ba] border-2 border-gray-800 rounded-3xl px-6 py-8 sm:px-0 sm:py-0">
              <h2 className="text-center text-3xl sm:text-5xl mb-6 font-extrabold text-black sm:mb-10">
                Samuel Chandra
              </h2>
              <p className="text-center sm:text-center text-base sm:text-[25px] sm:font-bold text-[15px] mb-10 font-normal text-black">
                +62 895 8923 71263<br />
                Jakarta Barat. <br />
                Programmer
              </p>
              <img src={Profile} alt="Samuel" className="w-[250px] h-[300px] rounded-2xl mx-auto block"></img>
            <div className="bg-[#404b7f] p-9 rounded-lg mt-9">
            <div className="sm:grid sm:grid-cols-3 sm:gap-10 gap-5">
                {cards.map((card) => (
                    <a href={card.href}>
                    <div
                        key={card.id}
                        className="bg-[#23c823c2] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 mb-9">
                        <h3 className="sm:text-2xl text-sm font-semibold mb-4 text-center">{card.title}</h3>
                    </div>
                </a>
                ))}
            </div>
            </div>
        </div>
        </div>
        </div>
    </section>
    )
}

export default Portfolio;