import React from "react";
import img1 from "../assets/af73f751a1d9604372742f6052ebadbceae8c150.jpg";
import img2 from "../assets/f2e3f4d422c53fcef046321d501313b77d9dd4de.jpg";
import img3 from "../assets/345bb818039a05150261ca05cb1d94cd3ff84e75.jpg";

export default function About() {
  return (
    <div className="">
      <div className="grid gap-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="space-y-6 max-w-2xl text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              About <span className="font-bold">Tala</span>
            </h1>
            <p className="text-[#ADADAD] text-xs leading-loose">
              Tala Prattay upholds the art aspects of Durga Puja. Essence of
              creativity combining the tools and methods of art and art
              installations interpreting the formative stages of the festival.
              Tala Prattay’s work emphasis has always been on Durga Puja as a
              specific art genre where the public space is being transformed
              into an art venue. We are committed to make that art global. Tala
              Prattay upholds the art aspects of Durga Puja. Essence of
              creativity combining the tools and methods of art and art
              installations interpreting the formative stages of the festival.
              Tala Prattay’s work emphasis has always been on Durga Puja as a
              specific art genre where the public space is being transformed
              into an art venue. We are committed to make that art global.
            </p>
          </div>
          <div className="w-full max-w-md">
            <img
              src={img1}
              alt="Tala Puja Art"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <img
            src={img2}
            alt="Art Image 1"
            className="w-full sm:w-1/2 h-auto rounded-md object-cover"
          />
          <img
            src={img3}
            alt="Art Image 2"
            className="w-full sm:w-1/2 h-auto rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
