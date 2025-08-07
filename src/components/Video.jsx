import React, { useRef, useState } from "react";
import img from "../assets/video/06c8673d442ac54d6a4f2e795077ae8ca8731dec.jpg";
import video from "../assets/video1.mp4";
export default function Video() {
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
    <div className="flex justify-center  items-center w-full">
      <div className="relative w-full  rounded-lg overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          preload="none"
          poster={img}
          className="w-full h-[600px] object-cover cursor-pointer"
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
    </div>
  );
}
