import React from "react";
import group5 from "../Assests/Images/123Z_2101.w020.n001.946B.p15 1.png";

function Main() {
  const textGradientStyle = {
    background:
      "linear-gradient(90deg, #FF3BFF 0%, #ECBFBF 38.02%, #5C24FF 75.83%, #D94FD5 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  const gradientStyle = {
    background: "linear-gradient(90deg, #FF3BFF, #ECBFBF, #5C24FF, #D94FD5)",
    // padding: '2px', // Adjust padding to create the border effect
    // borderRadius: '9999px', // Fully rounded corners
    // display: 'inline-block',
  };
  const myStyle = {
    backgroundImage:
      "url('https://res.cloudinary.com/dxziq8zr8/image/upload/v1722668507/xufunwcbyykv67uzba1p.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  };

  return (
    <section className="max-w-screen-xl pt-20  flex justify-center flex-col mx-auto text-white ">
      <div className="  flex-wrap gap-3 flex flex-col gap justify-center items-center">
        <div>
          <p
            style={textGradientStyle}
            className="lg:text-[70px] text-5xl text-center font-medium "
          >
            Your Gateway to Web3 Intelligence
          </p>
        </div>
        <div>
          <p className="lg:text-[27px] text-center">
            Empower your decisions with Project Nebula’s cutting-edge tools
          </p>
        </div>
      </div>
      <div style={myStyle} className="mt-5 md:mt-0">
        <div className="w-full z-10 flex  relative top-5 flex-col  text-center ">
          <p className="lg:text-[18px] ">
            Our technology performing fast blockchain (120K TPS) and it has
          </p>
          <p className="lg:text-[18px] ">
            {" "}
            guaranteed AI-based data security. Proof of Stake, its consensus
          </p>
          <p className="lg:text-[18px] ">
            {" "}
            algorithm enables unlimited speeds.
          </p>
          <div className="z-10 mt-3 sm:mt-0 flex relative top-5  justify-center">
            <div
              style={gradientStyle}
              className="flex max-w-sm rounded-full  p-0.5"
            >
              <button class=" bg-black underline font-extralight text-white px-6 py-3 rounded-full">
                Explore Beta Now{" "}
              </button>
            </div>
          </div>
        </div>
        <img
          className="flex  bottom-12 relative  h-full w-full "
          src={group5}
          alt=""
        />
      </div>
    </section>
  );
}

export default Main;
