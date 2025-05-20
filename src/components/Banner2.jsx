import React from "react";
import banner2Image from "../assets/Rectangle 45.png"; // استيراد صورة الخلفية للمنتجات

const Banner2 = () => {
  return (
    <div
      className="relative h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/10"
      style={{ backgroundImage: `url(${banner2Image})` }}
    >
      <div className="container mx-auto text-center relative z-10">
        <div className="flex flex-col gap-6 mx-4">
          <span className="text-3xl md:text-6xl font-bold text-orange-800 drop-shadow-lg">
            20% Off Your
          </span>
          <span className="text-3xl md:text-6xl font-bold text-orange-800 drop-shadow-lg">
            First Order
          </span>
          <div className="flex flex-col">
            <p className="md:text-4xl text-gray-600">Suspendisse ac rhoncus nisl,</p>
          <p className="md:text-4xl text-gray-600">eu tempor urna. Curabitur vel</p>
          <p className="md:text-4xl text-gray-600">bibendum.</p>
          </div>
          <div className="mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-600 text-white text-lg font-bold rounded-lg hover:shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
