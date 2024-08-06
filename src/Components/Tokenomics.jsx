import React from "react";
import Supply from "../Components/Supply";
import { GoDotFill } from "react-icons/go";

function Tokenomics() {
  const gradientBorderStyle = {
    borderWidth: "2px",
    borderStyle: "solid",

    borderImage:
      "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%) 1",
    borderRadius: "10px",
  };
  const textGradientStyle = {
    background:
      "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section
      style={gradientBorderStyle}
      className="mx-auto  border-2  py-12 bg-[#0A0D10]  rounded-md  max-w-screen-xl   "
    >
      <div className="text-white flex gap-5  flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2  font-extralight ">
          <Supply />
        </div>
        <div className="flex md:w-2/3   flex-col gap-3 md:gap-2">
          <div className="pl-2 md:pl-0">
            <p style={textGradientStyle} className="xl:text-[100px] lg:text-5xl text-4xl ">
              Tokenomics
            </p>
          </div>
          <div className=" md:pl-24 pl-3 md:mt-2 leading-tight  text-white">
            <p className=" font-extralight text-2xl ">Key Information </p>
            <div className=" ">
              <div className="flex relative items-center">
                <GoDotFill size={30} className="text-[#3A0CA3]   " />{" "}
                <GoDotFill
                  size={30}
                  className="text-[#FFD600] absolute left-2"
                />{" "}
                <GoDotFill
                  size={30}
                  className="text-[#00C5C9] absolute left-4"
                />{" "}
                <GoDotFill
                  size={30}
                  className="text-[#F72585] absolute left-6"
                />
                <div className="flex items-center gap-1 pl-6 ">
                  <span className=" md:font-semibold text-lg  ">
                    Total Supply:
                  </span>
                  <p className=" font-extralight ">1,000,000,000 NEBULA</p>
                </div>
              </div>
              <div className="">
                <div className="flex items-center gap-1 ">
                  <span className=" md:font-semibold text-lg  ">Supply:</span>
                  <p className=" font-extralight ">NEBULA</p>
                </div>
                <div className="flex items-center gap-1 ">
                  <span className=" md:font-semibold text-lg  ">Network:</span>
                  <p className=" font-extralight ">Ethereum (ERC-20)</p>
                </div>
                <div className="flex items-center gap-1 ">
                  <span className=" md:font-semibold text-lg  ">
                    Buy/Sell Tax:
                  </span>
                  <p className=" font-extralight ">5%</p>
                </div>
                <div className="flex items-center gap-1 ">
                  <span className=" md:font-semibold text-lg  ">
                    Contract Address:
                  </span>
                  <p className=" font-extralight ">0x123...abc</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pl-20 md:mt-8   ">
            <span className=" text-white pl-8 font-extralight text-2xl text-center ">
              Tax Allocation
            </span>
            <ul
              style={{ paddingLeft: "30px" }}
              className="mt-3 font-extralight  "
            >
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
