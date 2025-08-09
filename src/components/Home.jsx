import React, { useRef } from "react";
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
  const aboutRef = useRef(null);
  const serviceRef = useRef(null); 
  const albumRef = useRef(null); 
  const storiesRef = useRef(null); 
  const blogRef = useRef(null);


  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="pl-16 pr-16 w-full space-y-26 ">
        <NavBar
          scrollToSection={scrollToSection}
          refs={{ aboutRef, serviceRef, albumRef, storiesRef, blogRef }}
        />
        <Section />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={serviceRef}>
          <Discover />
        </div>{" "}
        <div ref={albumRef}>
          <Activity />
        </div>{" "}
        <div ref={storiesRef}>
          <FeaturesAndObjectives />
        </div>{" "}
        <div ref={blogRef}>
          <News />
        </div>{" "}
        <Video />
        <Award />
        <Adverties />
        <Gallery />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
