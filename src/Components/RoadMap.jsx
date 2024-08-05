import React from "react";
import "../Style/RoadMap.css"; // Import custom CSS

function Roadmap() {
  const phases = [
    {
      icon: "🚀",
      title: "Conceptualization",
      description:
        "The initial phase where ideas are brainstormed and plans are laid out.",
      date: "Q1 2023",
    },
    {
      icon: "🛠️",
      title: "Launch Preparation",
      description:
        "Preparing the necessary components and strategies for a successful launch.",
      date: "Q2 2023",
    },
    {
      icon: "🔍",
      title: "Beta Testing",
      description:
        "Testing the platform with a select group of users to gather feedback and make improvements.",
      date: "Q3 2023",
    },
    {
      icon: "🌐",
      title: "Official Launch",
      description:
        "The platform goes live for the public, marking the official release.",
      date: "Q4 2023",
    },
    {
      icon: "📈",
      title: "Expansion",
      description:
        "Expanding the platform features and user base while exploring new markets.",
      date: "2024",
    },
  ];

  return (
    <section className="roadmap  container mx-auto mt-16 p-8 mb-6 rounded-lg shadow-lg custom-roadmap">
      <h2 className="text-4xl font-extrabold text-teal-400 mb-12 text-center gradient-title">
        Our Roadmap
      </h2>
      <div className="timeline ">
        {phases.map((phase, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{phase.icon}</div>
            <div className="timeline-content">
              <h3 className="text-xl font-semibold text-white mb-2">
                {phase.title}
              </h3>
              <p className="text-gray-300 mb-2">{phase.description}</p>
              <span className="text-gray-400 text-sm">{phase.date}</span>
            </div>
            {index < phases.length - 1 && <div className="timeline-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
