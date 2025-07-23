"use client";

import React from "react";

const Client = () => {
  // Array of image objects for easier mapping
  const images = Array(8).fill({
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/CodePen_logo.png",
    alt: "CodePen Logo",
  });

  return (
    <div>
      <h1 className="text-center py-8 text-3xl font-bold text-gray-800">
        Dual Direction Image Marquee
      </h1>

      <div className="marquee-container flex flex-col gap-10 overflow-hidden w-full py-10">
        {/* Cards Moving Left */}
        <div className="marquee-track marquee-left flex w-fit">
          {images.map((image, index) => (
            <div
              key={`left-${index}`}
              className="scroll-card bg-white rounded-lg p-5 mr-8 min-w-[200px] text-center cursor-pointer transition-transform transition-shadow hover:scale-110 hover:shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Cards Moving Right */}
        <div className="marquee-track marquee-right flex w-fit">
          {images.map((image, index) => (
            <div
              key={`right-${index}`}
              className="scroll-card bg-white rounded-lg p-5 mr-8 min-w-[200px] text-center cursor-pointer transition-transform transition-shadow hover:scale-110 hover:shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-left {
          animation: marquee-left 20s linear infinite;
        }

        .marquee-right {
          animation: marquee-right 20s linear infinite;
        }

        .marquee-container:hover .marquee-left,
        .marquee-container:hover .marquee-right {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Client;