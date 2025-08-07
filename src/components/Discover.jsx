import React, { useRef, useState } from "react";
import video from "../assets/video1.mp4";
import thumbnail from "../assets/thumbnail.png";

export default function Discover() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (videoEl.paused) {
      videoEl.play();
      setIsPlaying(true);
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-10 gap-10 lg:gap-20">
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          preload="none"
          poster={thumbnail}
          className="w-full h-auto object-cover cursor-pointer"
          onClick={handlePlayPause}
        />

        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-play-icon"
            >
              <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </button>
        )}
      </div>

      <div className="max-w-xl w-full space-y-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold flex justify-center lg:justify-start items-center gap-2">
          Discover <span className="font-bold">Tala</span>
        </h1>
        <p className="text-xs  text-[#ADADAD] leading-relaxed">
          Tala Prattay upholds the art aspects of Durga Puja. Essence of
          creativity combining the tools and methods of art and art
          installations interpreting the formative stages of the festival. Tala
          Prattay’s work emphasis has always been on Durga Puja as a specific
          art genre where the public space is being transformed into an art
          venue. We are committed to make that art global.
        </p>
      </div>
    </div>
  );
}
