import React from "react";
import Img1 from "../assets/Profile.jpg";
import pic from "../assets/1900-1949.jpg";

const cards = [
  {
    id: 1,
    image: Img1,
    title: "Samuel Chandra",
    desc: "FrontEnd Developer",
    desc2: "Jakarta Barat, Indonesia",
  },
];

const cards2 = [
  {
    technologies: ["Jakarta Barat", "+62 895 8932 82923", "Open to work"],
  },
];

function History() {
  return (
    <>
      <section className="w-full py-12 sm:py-24 justify-center bg-gray-50">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 ">
          <div className="text-center sm:text-lg text-base sm:py-10 py-6 px-4 sm:px-8 sm:mt-10 mt-6">
            <h2 className="sm:text-4xl text-[22px] font-bold">About Me</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 sm:py-10 py-6"
              >
                <div className="sm:w-[500px] sm:h-[240px] w-[250px] h-[250px] mb-6 mx-auto sm:rounded-2xl rounded-md overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="sm:text-2xl text-xl font-semibold text-center">
                  {card.title}
                </h3>

                <p className="text-blue-600 font-semibold text-base sm:text-lg mt-2 text-center">
                  {card.desc}
                </p>

                <p className="text-slate-500 text-sm mt-1 text-center">
                  {card.desc2}
                </p>
              </div>
            ))}

            {/* STORY */}
            <div className="text-center sm:text-lg text-base sm:py-10 py-6 px-4 sm:px-8 sm:mt-10 mt-6 bg-white rounded-2xl shadow-lg leading-relaxed">
              <p className=" leading-relaxed">
                We started in a laundry room and conquered the world. And in
                between, we've scored big and sometimes struggled to reach our
                goals. We've done our best for the best. We've improved and
                grown. Looking ahead to the future, always remembering where we
                came from. This is our story.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mt-6">
                {cards2[0].technologies.map((tech, index) => {
                  const colors = [
                    "bg-blue-500 text-white",
                    "bg-purple-500 text-white",
                    "bg-pink-500 text-white",
                    "bg-emerald-500 text-white",
                    "bg-orange-500 text-white",
                  ];
                  return (
                    <span
                      key={tech}
                      className={`${colors[index % colors.length]} px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-md hover:shadow-lg transition-shadow`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default History;
