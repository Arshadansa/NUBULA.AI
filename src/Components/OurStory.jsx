import React from "react";

function OurStory() {
  const textGradientStyle = {
    background:
      "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const myStyle = {
    backgroundImage:
      "url('https://res.cloudinary.com/dxziq8zr8/image/upload/v1722670113/snovmreqaij1zyve3af2.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "600px",
  };
  const myStyleCard = {
    backgroundImage:
      "url('https://res.cloudinary.com/dxziq8zr8/image/upload/v1722670776/xtf9yvpbrvf0vbcqmbmr.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const bottomBorderStyle = {
    borderBottom: "1px solid transparent",
    borderImage: "linear-gradient(90deg, #6DDCFF 0%, #7F60F9 100%)",
    borderImageSlice: 1,
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <section className="max-w-screen-xl py-16        mx-auto">
      <div className="flex flex-col md:flex-row justify-between   items-center  ">
        <div className="flex md:w-1/2 flex-col gap-2">
          <div>
            <p style={textGradientStyle} className="text-[100px] text">
              Our Story
            </p>
          </div>
          <div className=" leading-none text-[60px] text-white">
            <p>Numbers are </p>
            <p>telling our story</p>
          </div>
          <div className=" font-thin mt-4  text-[#A1A1AA]">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
            <p>dolor do amet sint. Velit officia consequat duis enim </p>
            <p>velit mollit.</p>
          </div>
        </div>
        <div style={myStyle} className=" md:w-1/2 py-32 flex  justify-center  ">
          <div
            style={myStyleCard}
            className="border-0  border-gray-900 rounded-md"
          >
            <div style={bottomBorderStyle} className=" p-4  text-white">
              <div>
                <p className=" text-[40px]  font-light ">2M+</p>
              </div>
              <div>
                <p className="text-[#A1A1AA] font-thin text-[18px]">
                  Tickets Delivered This Month
                </p>
              </div>
            </div>
            <div style={bottomBorderStyle} className=" p-4  text-white">
              <div>
                <p className=" text-[40px] font-light  ">46K+</p>
              </div>
              <div>
                <p className="text-[#A1A1AA] font-thin text-[18px]">
                  Active Customers Rate
                </p>
              </div>
            </div>
            <div className=" p-4  text-white">
              <div>
                <p className=" text-[40px] font-light  ">99%</p>
              </div>
              <div>
                <p className="text-[#A1A1AA] font-thin text-[18px]">
                  Customer Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
