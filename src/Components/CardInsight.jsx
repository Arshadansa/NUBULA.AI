import React from "react";
import bgElements from "../Assests/Images/Bg Elements (1).png";
import icon1 from "../Assests/Images/Icon.png";
import icon2 from "../Assests/Images/Icon (2).png";
import icon3 from "../Assests/Images/Group 216.png";
import start from "../Assests/Images/Stars (2).png"

function CardInsight() {
  const textGradientStyle = {
    background:
      "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const gradientStyle = {
    background:
      "linear-gradient(180deg, #FFFFFF 43.1%, rgba(255, 255, 255, 0) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const myStyle = {
    backgroundImage:
        "url('https://res.cloudinary.com/dxziq8zr8/image/upload/v1722668371/iubtluo8nyzd1sbuohd6.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

  return (
    <section  style={myStyle} className="max-w-screen-xl p-3 py-12 mx-auto text-white">
      <div className="text-center">
        <p style={textGradientStyle} className="lg:text-[70px] text-4xl">
          Ai - Powered Market Insights
        </p>
      </div>
      <div className="flex flex-wrap gap-5  mt-12  justify-center ">
        <div className="relative flex flex-col rounded-3xl border border-gray-700 p-3 items-center justify-center h-96 w-72">
          <img
            src={bgElements}
            className="object-fill   rounded-3xl h-full w-full"
            alt="Background"
          />
          <img
            src={icon1}
            className="object-contain w-40 h-40 absolute top-20"
            alt="Icon"
          />
          <div className="absolute text-center  bottom-8 ">
            <p style={gradientStyle} className="text-3xl">
              On-Chain Data
            </p>
            <p className="text-[#D9D9D9] text-sm">Analyze blockchain data in</p>
            <p className="text-[#D9D9D9] text-sm">real-time with precision.</p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-3xl border border-gray-700 p-3 items-center justify-center h-96 w-72">
          <img
            src={bgElements}
            className="object-fill   rounded-3xl h-full w-full"
            alt="Background"
          />
          <img
            src={icon2}
            className="object-contain w-40 h-40 absolute top-20"
            alt="Icon"
          />
          <div className="absolute text-center  bottom-8 ">
            <p style={gradientStyle} className="text-3xl">
              On-Chain Data
            </p>
            <p className="text-[#D9D9D9] text-sm">
              Understand market sentiment
            </p>
            <p className="text-[#D9D9D9] text-sm">across social platforms.</p>
          </div>
        </div>
        <div className="relative flex flex-col rounded-3xl border border-gray-700 p-3 items-center justify-center h-96 w-72">
          <img
            src={bgElements}
            className="object-fill   rounded-3xl h-full w-full"
            alt="Background"
          />
          <img
            src={icon3}
            className="object-contain w-40 h-40 absolute top-20"
            alt="Icon"
          />
          <div className="absolute text-center  bottom-8 ">
            <p style={gradientStyle} className="text-3xl">
              On-Chain Data
            </p>
            <p className="text-[#D9D9D9] text-sm">
              Stay ahead with instant analytics on{" "}
            </p>
            <p className="text-[#D9D9D9] text-sm">market trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardInsight;
