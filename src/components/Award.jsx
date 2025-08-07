import React from "react";
import img from "../assets/470a44e95f49eda8e46db29939e985a626aaf0d4.png";

export default function Award() {
  return (
    <div className="w-full bg-black text-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-8 sm:flex-row sm:gap-12 md:gap-16 lg:gap-28 w-full">
        <div className="space-y-6 w-full text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Award</h1>
          <p className="text-gray-300 text-xs leading-loose md:leading-7 ">
            Learning provides the environment and inspiration to create and
            exhibit that brings people together to build connections to
            community.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-[6rem] xl:gap-[10rem] w-full">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="w-14 sm:w-18 md:w-20 lg:w-28 max-w-[110px]"
                src={img}
                alt="Award icon"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
