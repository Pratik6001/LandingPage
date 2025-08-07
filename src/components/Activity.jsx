import React from "react";

export default function Activity() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 lg:px-24 py-12 gap-10 lg:gap-28 bg-[#FFFFFF1A]">
      {/* Left Text Section */}
      <div className="space-y-6 max-w-[500px] text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-semibold flex justify-center lg:justify-start items-start gap-2">
          Lorem <span className="font-bold">Ipsum</span>
        </h1>
        <p className="text-gray-300 text-xs leading-6">
          Tala Prattoy upholds the art aspects of Durga Puja. Essence of
          creativity combining the tools and methods of art and art
          installations interpreting the formative stages of the festival.
        </p>
      </div>

      {/* Numbers Section */}
      <div className="flex flex-col sm:flex-row gap-10 max-w-lg w-full justify-center">
        <div className="space-y-6 text-center sm:text-left">
          <p className="text-red-600 font-bold text-2xl sm:text-3xl">
            500K+
            <span className="block sm:inline ml-2 text-sm font-normal text-white">
              Existing Partnerships
            </span>
          </p>
          <p className="text-red-600 font-bold text-2xl sm:text-3xl">
            100K+
            <span className="block sm:inline ml-2 text-sm font-normal text-white">
              Existing Partnerships
            </span>
          </p>
        </div>
        <div className="space-y-6 text-center sm:text-left">
          <p className="text-red-600 font-bold text-2xl sm:text-3xl">
            5M
            <span className="block sm:inline ml-2 text-sm font-normal text-white">
              Existing Partnerships
            </span>
          </p>
          <p className="text-red-600 font-bold text-2xl sm:text-3xl">
            5M
            <span className="block sm:inline ml-2 text-sm font-normal text-white">
              Existing Partnerships
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
