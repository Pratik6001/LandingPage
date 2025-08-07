import React from "react";
import FeaturesCards from "../utils/cards/FeaturesCard";

export default function FeaturesAndObjectives() {
  return (
    <div className=" bg-black text-white">
      <div className="space-y-6 w-full text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold sm:text-center">
          Objective & Features
        </h1>
        <p className="text-xs leading-loose max-sm:text-center">
          Learning provides the environment and inspiration to create and
          exhibit that brings people together to build connections to community.
        </p>
      </div>
      <FeaturesCards />
    </div>
  );
}
