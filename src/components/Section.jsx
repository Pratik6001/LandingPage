import React from "react";
import img1 from "../assets/section/85c04b8eb2a9e4466ec266b027e92b5d6ccc922e.jpg";
import img2 from "../assets/section/8e08dcaadc0c15fda6567e547cca0d23aa4c2321.jpg";
import img3 from "../assets/section/8f1a5b8e169f4818add73b93c625cfa07ccaa2cb.jpg";
import img4 from "../assets/section/60feddd1af108c6ec03858158ae95154d1362045.jpg";
import img5 from "../assets/section/e424f352ee21f4a2f8cd95721d0e41a049c89a97.jpg";
import img6 from "../assets/section/b15f5a38e2c8ccf12b8f2d3178ff225512f233d5.jpg";
import img7 from "../assets/section/b513d87446f56e5c9b58783016ebde0a2b91fed2.jpg";
import img8 from "../assets/section/e424f352ee21f4a2f8cd95721d0e41a049c89a97.jpg";
import img9 from "../assets/section/5fed436c91064cb7d0f7fb81028443e4e96e68a7.jpg";
import img10 from "../assets/section/345bb818039a05150261ca05cb1d94cd3ff84e75.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Section() {
  return (
    <div className="relative bg-black text-white w-full overflow-hidden max-sm:max-h-90">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 opacity-80">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Tala image ${index + 1}`}
            className="w-full h-40 sm:h-52 md:h-60 lg:h-72 object-cover"
          />
        ))}
      </div>

      <div className="absolute inset-0  flex flex-col  items-center justify-center text-center px-4 py-8 bg-gradient-to-b from-transparent via-black/80 to-black">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6">
          Tala Prattoy
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-2 bg-white cursor-pointer text-red-600 font-semibold rounded shadow hover:bg-gray-100 transition">
            Art Walkthrough
          </button>
          <button className="px-6 py-2 border cursor-pointer border-red-500 text-white font-semibold rounded hover:bg-red-600 transition">
            Privileged Entry
          </button>
        </div>
      </div>
    </div>
  );
}
