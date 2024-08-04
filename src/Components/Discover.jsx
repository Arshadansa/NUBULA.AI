import React from "react";
import visual from "../Assests/Images/Visual.png";
import bgimage from "../Assests/Images/Looper BG (1).png";
import imageremovebgpreview from "../Assests/Images/image-removebg-preview (1) 1.png";
import imageremovebgpreview2 from "../Assests/Images/image-removebg-preview 2.png";

function Discover() {
  const textGradientStyle = {
    background:
      "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };


  return (
    <section className="xl:max-w-screen-2xl p-3 flex justify-center  relative  text-white  md:py-12 mx-auto">
      <img src={bgimage} className="  absolute -right-2  bottom-0  " alt="" />
      <div className="flex flex-col md:flex-row   md:gap-24 gap-10 items-center">
        <div className=" leading-none ">
          <p className="lg:text-[100px]  text-5xl " style={textGradientStyle}>
            Discover{" "}
          </p>
          <p className="lg:text-[100px] text-5xl  " style={textGradientStyle}>
            the Benefits
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-10 items-center   px-4 rounded-md border-gray-800  border-[2px]">
            <div className="">
              <img
                src={visual}
                className=" h-40 w-40 object-contain"
                alt=""
              />
            </div>
            <div>
              <p>Staking & Profit Sharing</p>
              <p className=" text-[#FFFFFF] text-xs md:text-sm  font-thin ">
                Earn rewards by staking your assets and sharing in the
              </p>
              <p className=" text-[#FFFFFF] text-xs md:text-sm font-thin ">
                profits. Engage with the ecosystem and see your assets
              </p>
              <p className=" text-[#FFFFFF] text-xs md:text-sm font-thin ">
                grow over time.
              </p>
            </div>
          </div>
          <div className="flex gap-10  items-center px-4 rounded-md border-gray-800  border-[2px]">
            <div>
              <img
                src={imageremovebgpreview}
                className=" h-40 w-40 object-contain"
                alt=""
              />
            </div>
            <div>
              <p>Affiliate Program</p>
              <p className=" text-[#FFFFFF] text-sm  font-thin ">
                Join our affiliate program and earn commissions by
              </p>
              <p className=" text-[#FFFFFF] text-sm  font-thin ">
                referring others. Expand the community and enjoy
              </p>
              <p className=" text-[#FFFFFF] text-sm  font-thin ">
                additional benefits as a top referrer.
              </p>
            </div>
          </div>
          <div className="flex gap-10  items-center px-4 rounded-md border-gray-800  border-[2px]">
            <div>
              <img
                src={imageremovebgpreview2}
                className=" h-40 w-40 object-contain"
                alt=""
              />
            </div>
            <div>
              <p>Exclusive Airdrops</p>
              <p className=" text-[#FFFFFF] text-sm  font-thin ">
                Receive exclusive airdrops and benefits as a valued
              </p>
              <p className=" text-[#FFFFFF] text-sm  font-thin ">
                community member. Stay ahead with special perks and{" "}
              </p>
              <p className=" text-[#FFFFFF] text-sm  font-thin ">
                bonuses just for you..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
