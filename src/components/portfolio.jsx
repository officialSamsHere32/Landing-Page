import React from "react";
import Profile from "../assets/A_shoes.webp"

const cards = [
  {
    id: 1,
    title: "Project One",
    description: "A stunning landing page built with React and Tailwind CSS. Features include user authentication, dynamic data fetching, and a clean modern UI.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    github: "github.com/...",
    demo: "live-demo.com",
    image: Profile
  },
  {
    id: 2,
    title: "Project Two",
    description: "An immersive Roblox game experience with advanced mechanics. Built with Lua scripting and custom game logic for engaging gameplay.",
    technologies: ["Lua", "Roblox Studio"],
    github: "github.com/...",
    demo: "roblox.com/...",
    image: Profile
  },
  {
    id: 3,
    title: "Project Three",
    description: "A full-stack web application with real-time features. Integrated with APIs, database management, and responsive design principles.",
    technologies: ["Node.js", "MongoDB", "Express"],
    github: "github.com/...",
    demo: "live-demo.com",
    image: Profile
  },
];

function Portfolio() {
    return (
    <section className="w-full flex justify-center py-12 sm:py-24">
        <div className="w-full max-w-[1200px] flex flex-col items-center px-4 sm:px-6">
           <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">My Portfolio</h2>
          <p className="text-slate-600 text-sm sm:text-base">Explore my latest projects and work</p>
          </div>
            <div className="w-full">
            <div className="bg-[#7580ba] border-2 border-gray-800 rounded-3xl px-4 sm:px-8 py-8 sm:py-12">
            <div className="bg-[#404b7f] p-4 sm:p-9 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="group bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-visible border border-[#334155] hover:border-[#64748b] flex flex-col h-full">
                        {/* Image Container */}
                        <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden bg-gradient-to-b from-[#64748b] to-[#1e293b] flex-shrink-0">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"></img>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
                        </div>

                        {/* Content Container */}
                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                          {/* Title */}
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white">{card.title}</h3>
                          
                          {/* Description */}
                          <p className="text-xs sm:text-sm lg:text-base text-slate-300 mb-3 sm:mb-4 flex-grow line-clamp-2 sm:line-clamp-3">{card.description}</p>

                          {/* Technology Tags */}
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                            {card.technologies.map((tech, index) => {
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
                                  className={`${colors[index % colors.length]} px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-md hover:shadow-lg transition-shadow`}>
                                  {tech}
                                </span>
                              );
                            })}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4 border-t border-[#334155] flex-col sm:flex-row">
                            <a 
                              href={card.github}
                              rel="noopener noreferrer"
                              className="flex-1 text-center py-2 px-3 sm:px-4 rounded-lg border-2 border-slate-400 text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-700 hover:border-slate-300 transition-all duration-200">
                              GitHub
                            </a>
                            <a 
                              href={card.demo}
                              rel="noopener noreferrer"
                              className="flex-1 text-center py-2 px-3 sm:px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs sm:text-sm font-semibold hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200">
                              Live Demo
                            </a>
                          </div>
                        </div>
                    </div>
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