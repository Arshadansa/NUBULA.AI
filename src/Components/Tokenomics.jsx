import React from "react";
import Supply from "../Components/Supply";
import { GoDotFill } from "react-icons/go";

function Tokenomics() {
  const myStyleCard = {
    backgroundImage:
      "url('https://res.cloudinary.com/dxziq8zr8/image/upload/v1722673029/uveagj5dxyrkmlslito5.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  const textGradientStyle = {
    background:
      "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section
      // style={}
      className="mx-auto  md:h-[624px] max-w-screen-xl   "
    >
      <div className="text-white flex gap-5  flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 ">
          <Supply />
        </div>
        <div className="flex md:w-2/3   flex-col gap-3 md:gap-2">
          <div className="">
            <p style={textGradientStyle} className="lg:text-[100px] text-5xl ">
              Tokenomics
            </p>
          </div>
          <div className=" md:pl-24 pl-3 md:mt-2 leading-tight  text-white">
            <p className=" font-extralight ">Total Supply </p>
            <div className="flex relative items-center ">
              <GoDotFill size={30} className="text-[#3A0CA3]   " />{" "}
              <GoDotFill size={30} className="text-[#FFD600] absolute left-2" />{" "}
              <GoDotFill size={30} className="text-[#00C5C9] absolute left-4" />{" "}
              <GoDotFill size={30} className="text-[#F72585] absolute left-6" />
              <p className="ml-6">1,000,000,000 NEBULA</p>
            </div>
          </div>
          <div className="md:pl-20 md:mt-8 ">
            <ul style={{ paddingLeft: "30px" }} className=" font-extralight  ">
              <li className="flex items-center gap-2">
                <GoDotFill className="text-[#3A0CA3] " />
                2% Marketing
              </li>
              <li className="flex items-center gap-2">
                <GoDotFill className="text-[#B5179E]" />
                2% Liquidity
              </li>
              <li className="flex items-center gap-2">
                <GoDotFill className="text-[#4CC9F0]" />
                1% Development
              </li>
              <li className="flex items-center gap-2">
                <GoDotFill className="text-[#F72585]" />4 %Distribution
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
