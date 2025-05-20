import React from "react";
import banner2Image from "../assets/Rectangle 41.png"; // استيراد صورة الخلفية للمنتجات

const Banner3 = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: `url(${banner2Image})` }}
      >
        <div className="container mx-auto text-center">
          <div className="flex flex-col gap-4">
            <span className="text-5xl font-bold text-white">About us</span>
            <div className="flex flex-col space-y-2">
              <p className="text-2xl text-gray-300">
                Suspendisse ac rhoncus nisl,
              </p>
              <p className="text-2xl text-gray-300">
                eu tempor urna. Curabitur vel
              </p>
              <p className="text-2xl text-gray-300">bibendum lorem. Morbi .</p>
              <p className="text-2xl text-gray-300">convallis</p>
            </div>

            <div className="mt-6">
              <button className="px-6 py-3 bg-amber-900 text-white text-lg font-bold rounded-lg hover:bg-orange-700 transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
