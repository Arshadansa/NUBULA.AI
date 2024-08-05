import React from "react";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import CardInsight from "../Components/CardInsight";
import Discover from "../Components/Discover";
import OurStory from "../Components/OurStory";
import Tokenomics from "../Components/Tokenomics";
import Footer from "../Components/Footer";
import Roadmap from "../Components/RoadMap";

function Home() {
  return (
    <section className="bg-[#000000]  sm:h-full  ">
      <Navbar />
      <Main />
      <CardInsight />
      <Discover />
      <OurStory />
      <div className="p-3 lg:p-0">
        <Tokenomics />
      </div>
      <div className="p-3  lg:p-0">
        <Roadmap />
      </div>
      <Footer />
    </section>
  );
}

export default Home;
