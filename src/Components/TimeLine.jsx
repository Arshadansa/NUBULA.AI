import React from "react";
import TimelineItem from "../Components/TimelineItems";
import bgImage from "../Assests/Images/div.framer-lnc0cs-Photoroom.png";
const Timeline = () => {
  const events = [
    {
      title: "Launch project website",
      date: "Release whitepaper",
      description: "Initiate social media presence",
    },
    {
      title: "Full platform launch",
      date: "List token on major exchanges",
      description: "Implement staking and rewards program",
    },
    {
      title: "Introduce new features",
      date: "Conduct security audits",
      description: "Expand team & advisors",
      count3: "Explore additional partnerships",
    },
    {
      title: "Launch mobile app version",
      date: "Integrate additional blockchains",
      description: "Host developer and community",
    },
    // Add more events as needed
  ];
  const myStyle = {
    backgroundImage:
      "url('https://res.cloudinary.com/dxziq8zr8/image/upload/v1722795704/div.framer-lnc0cs-Photoroom_fen2ue.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height:"600px"
  };
  return (
    <div  className="  flex flex-col h-[700px] gap-8 lg:gap-0 lg:pb-72 pt-8 lg:pt-0 items-center justify-between  mx-auto">
      <div>
        <p className="md:text-6xl text-5xl text-[#0aabad] font-medium">ROADMAP</p>
      </div>
      <ul className="flex  flex-col lg:flex-row lg:items-center justify-center gap-10 list-none ">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
            count3={event.count3}
            isLast={index === events.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
