import React from "react";
import img1 from "../../assets/objectives/d91db53f3f3fe0d08bd7528c294baf75b4f0e777.jpg";
import img2 from "../../assets/objectives/0eb8c52ca6ac84dc9577e65f10400524636eed2a.jpg";
import img3 from "../../assets/objectives/e4fc7310fe1c7cbb9e77a46e6b5756a9c80d2f0e.jpg";
import img4 from "../../assets/objectives/efaad9ab52d061106f039baff326ccd7d5de7eb5.jpg";

const cards = [
  {
    img: img1,
    title: "Durga Puja Art 2024",
    description:
      "Tala Prattoy, endeavouring towards global art forever, projects this year’s Durga Puja Art as celebrating the journey of a Durga Puja Artist. It thus highlights Kahan – a narration by Susanta Paul, the Artist of high repute.",
  },
  {
    img: img2,
    title: "Watch Art with Artist",
    description:
      "2024 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue. Visitors can explore with a guide — the Artist himself. It’s a ticketed experience with time slot bookings.",
  },
  {
    img: img3,
    title: "Encouraging Craftsmanship",
    description:
      "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
  },
  {
    img: img4,
    title: "Promotion of Installation Art",
    description:
      "Installation Art is a genre of multi-dimensional site-specific works, aimed at nurturing the next generation of exquisite artists.",
  },
];

export default function FeaturesCards() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative group w-full h-[350px] sm:h-[400px] overflow-hidden rounded-md"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-0 left-0 w-full h-full text-white"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 40%, #000000 100%)",
            }}
          >
            <div className="absolute bottom-0 p-6 sm:p-8 space-y-3">
              <h3 className="text-lg  font-bold text-left max-sm:text-center text-red-600">
                {card.title}
              </h3>
              <p className="text-xs text-left max-sm:text-center  leading-loose">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
