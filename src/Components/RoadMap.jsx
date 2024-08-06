import React from "react";
import "../Style/RoadMap.css"; // Import custom CSS

function Roadmap() {
  const phases = [
    {
      title: "Conceptualization",
      description:
        "The initial phase where ideas are brainstormed and plans are laid out.",
      date: "Q1 2023",
    },
    {
      title: "Launch Preparation",
      description:
        "Preparing the necessary components and strategies for a successful launch.",
      date: "Q2 2023",
    },
    {
      title: "Beta Testing",
      description:
        "Testing the platform with a select group of users to gather feedback and make improvements.",
      date: "Q3 2023",
    },
    {
      title: "Official Launch",
      description:
        "The platform goes live for the public, marking the official release.",
      date: "Q4 2023",
    },
    {
      title: "Expansion",
      description:
        "Expanding the platform features and user base while exploring new markets.",
      date: "2024",
    },
  ];

  return (
    <section className="roadmap  container mx-auto lg:mt-16 p-8 mb-6 rounded-lg shadow-lg custom-roadmap">
      <h2 className="lg:text-6xl  text-3xl font-extrabold text-teal-400 lg:mb-12 text-center gradient-title">
        ROADMAP
      </h2>
      <div className="timeline xl:h-[500px]  ">
        {phases.map((phase, index) => (
          <div key={index} className="timeline-item">
            {/* <div className="timeline-icon">{}</div> */}
            <div className="timeline-content  ">
              <h3 className=" font-semibold text-white mb-2">{phase.title}</h3>
              <p className="text-gray-300 mb-2">{phase.description}</p>
              <span className="text-gray-400 text-sm">{phase.date}</span>
            </div>
             <span className="  absolute top-14 left-0 xl:left-6 text-xl text-[#00e6e6]  ">Q{index+1}</span>
             <div className=" text-[#00e6e6] border-[#00e6e6] w-52 border absolute top-[68px]  right-2 xl:right-8"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
