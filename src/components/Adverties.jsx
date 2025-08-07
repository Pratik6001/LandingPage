import React from "react";

export default function Adverties() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-4 sm:px-8 lg:px-24 py-12 bg-[#FFFFFF1A] w-full">
      <div className="space-y-6 max-w-xl w-full text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-semibold flex justify-center lg:justify-start gap-2">
          Advertise <span className="font-bold">With Us</span>
        </h1>
        <p className="text-gray-300 text-xs leading-6">
          Tala Prattoy upholds the art aspects of Durga Puja. Essence of
          creativity combining the tools and methods of art and art
          installations interpreting the formative stages of the festival.
        </p>
      </div>

      <div className="w-full sm:w-auto flex justify-center lg:justify-end">
        <button className="bg-white rounded-full cursor-pointer px-6 py-2 text-orange-600 font-semibold shadow hover:shadow-md transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}
