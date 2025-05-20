import React from "react";
import bannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col justify-center items-start text-left text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})`}}
>
      {/* <div className="absolute inset-0 bg-black/40"></div>  */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col">
          <h3 className="text-2xl md:text-4xl text-orange-200 mb-4">
            Delicious Cafe
          </h3>
        </div>
        <div className="flex flex-col mt-4">
          <span className="text-2xl md:text-6xl font-bold text-white mb-4">
            Sweet Treats,
          </span>
          <span className="text-2xl md:text-6xl font-bold text-white mb-8">
            Perfect Eats
          </span>
        </div>
        <div className="flex gap-10 mt-12">
          <button className="bg-amber-800 text-lg md:text-2xl text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300">
            Shop Now
          </button>
          <button className="text-orange-200 text-lg md:text-2xl font-bold hover:text-orange-400 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
);
};

export default Banner;

