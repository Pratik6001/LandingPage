import React from "react";
import GalleryCard from "../utils/cards/GalleryCard";

export default function Gallery() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-24 py-12 gap-10">
      <div className="space-y-6 w-full max-w-[500px] text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Gallery</h1>
        <p className="text-gray-300 text-xs leading-loose">
          Learning provides the environment and inspiration to create and
          exhibit that brings people together to build connections to community.
        </p>
      </div>
      <GalleryCard />
    </div>
  );
}
