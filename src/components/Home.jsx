import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Discover from "./Discover";
import Activity from "./Activity";
import Award from "./Award";
import Adverties from "./Adverties";
import News from "./News";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Video from "./Video";
import FeaturesAndObjectives from "./FeaturesAndObjectives";
import Section from "./Section";

export default function Home() {
  return (
    <>
      <div className="pl-16 pr-16 w-full space-y-26 ">
        <NavBar />
        <Section />
        <About />
        <Discover />
        <Activity />
        <FeaturesAndObjectives />
        <Video />
        <Award />
        <Adverties />
        <Gallery />
        <News />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
