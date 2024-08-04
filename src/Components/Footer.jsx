import React from "react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoTiktok, IoLogoTwitter } from "react-icons/io5";

function Footer() {
  const myStyle = {
    backgroundImage:
      "url('https://res.cloudinary.com/dxziq8zr8/image/upload/v1722686830/irlfqqyi0jxalk8cohp1.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    // height: "550px",
  };

  return (
    <footer style={myStyle} className="flex p-3 lg:p-0  h-[700px]  lg:h-[550px] items-end ">
      <div className="mx-auto w-full  flex flex-col justify-between max-w-screen-xl h-full md:h-[80%] p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-7 mt-3  md:mb-0">
            <p className="self-center text-2xl md:text-xl lg:text-2xl text-white font-light   whitespace-nowrap ">
              The Fastest Ai
            </p>
            <p className="self-center text-2xl md:text-xl lg:text-2xl text-white font-light   whitespace-nowrap ">
              Experience Ever Made
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-4">
            <div className="order-2 md:order-1 ">
              <h2 className="mb-6  text-white  font-light ">Company</h2>
              <ul className="text-white/70 font-extralight">
                <li className="mb-4">
                  <a
                    href="http://"
                    className="hover:underline"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Love
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 font-light  text-white ">Product</h2>
              <ul className="text-white/70 font-extralight">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Download
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    AI
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Sales
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Enterprise
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Outlook
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:order-3">
              <h2 className="mb-6  font-light text-white  ">Support</h2>
              <ul className="text-white/70 font-extralight ">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:order-4">
              <h2 className="mb-6 font-extralight text-white  ">Legal</h2>
              <ul className="text-white/70 font-medium">
                <li className="mb-4 font-extralight">
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li className="mb-4 font-extralight">
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex border-t border-gray-600 border-[90%] pt-5 sm:items-center sm:justify-between">
          <span className=" text-white sm:text-center ">NUBULA.AI </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <IoLogoTwitter className=" cursor-pointer" size={22} />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaLinkedinIn className=" cursor-pointer" size={22} />

              <span className="sr-only">LinkedIn page</span>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <IoLogoTiktok className=" cursor-pointer" size={22} />

              <span className="sr-only">YouTube page</span>
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaYoutube className=" cursor-pointer" size={22} />

              <span className="sr-only">YouTube page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
