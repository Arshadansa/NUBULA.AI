import React from "react";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";
import CardInsight from "../Components/CardInsight";
import Discover from "../Components/Discover";
import OurStory from "../Components/OurStory";
import Tokenomics from "../Components/Tokenomics";
import Footer from "../Components/Footer";
import TimeLine from "../Components/TimeLine";

function Home() {
  return (
    <section className="bg-[#000000]  sm:h-full  ">
      <Navbar />
      <Main />
      <CardInsight />
      <Discover />
      <OurStory />
      <Tokenomics />
      <TimeLine />
      <Footer />
    </section>
  );
}

export default Home;
