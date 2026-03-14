// import React from "react";

// // Skills data organized by category
// const skillsData = [
//   {
//     category: "Frontend",
//     color: "from-blue-500 to-blue-600",
//     skills: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "Vite"]
//   },
//   {
//     category: "Backend",
//     color: "from-purple-500 to-purple-600",
//     skills: ["Node.js", "REST APIs"]
//   },
//   {
//     category: "Tools & Others",
//     color: "from-pink-500 to-pink-600",
//     skills: ["GitHub", "VS Code", "Lua"]
//   },
// ];

// function Skills() {
//     return (
//     <section className="w-full flex justify-center py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="flex-col w-full max-w-[1200px] flex items-center px-6">
        
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="sm:text-4xl sm:font-bold sm:mb-4 text-[22px] font-bold mb-3">My Skills</h2>
//           <p className="text-slate-600 text-sm sm:text-base">Technologies & Tools I Work With</p>
//         </div>

//         {/* Skills Grid */}
//         <div className="w-full grid sm:grid-cols-1 gap-8 max-w-4xl">
//           {skillsData.map((skillGroup, groupIndex) => (
//             <div 
//               key={groupIndex}
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              

//               {/* Skills Tags */}
//               <div className="flex flex-wrap gap-3">
//                 {skillGroup.skills.map((skill, skillIndex) => (
//                   <span
//                     key={skillIndex}
//                     className={`bg-gradient-to-r ${skillGroup.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-default`}>
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     )
// }
// export default Skills;


import React from "react";

const skillsData = [
  {
    category: "Frontend",
    color: "from-blue-500 to-blue-600",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "Vite"]
  },
  {
    category: "Responsive Design",
    color: "from-purple-500 to-purple-600",
    skills: ["Mobile-First Approach", "Media Queries", "Flexbox", "CSS Grid"]
  },
  {
    category: "Tools & Others",
    color: "from-pink-500 to-pink-600",
    skills: ["GitHub", "VS Code", "Lua"]
  },
];

function Skills() {
  return (
    <section className="w-full flex justify-center py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex-col w-full max-w-[1200px] flex items-center px-6">
        <div className="text-center mb-16">
          <h2 className="sm:text-4xl sm:font-bold sm:mb-4 text-[22px] font-bold mb-3">
            My Skills
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Technologies & Tools I Work With
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee">

            {[...skillsData, ...skillsData].map((skillGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="min-w-[250px]  rounded-2xl  p-6 ">

                <h3 className="font-semibold mb-4 text-slate-700">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`bg-gradient-to-r ${skillGroup.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;