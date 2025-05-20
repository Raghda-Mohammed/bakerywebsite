import React from "react";
import clsx from "clsx"; // يمكن تثبيتها عبر npm أو yarn
import { menuCategories, menuItems } from "../menuData"; // استيراد البيانات من ملف مستقل

const Explore = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="font-serif font-bold md:text-4xl text-center">Explore More</h1>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-white shadow-lg rounded-xl p-6 mt-8">
        {menuCategories.map((category) => (
          <button
            key={category}
            className="font-bold text-center hover:bg-orange-300 rounded-full py-3 px-3 mx-8 cursor-pointer transition-colors"
          >
            {category}
          </button>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {menuItems.map((item) => (
          <div key={item.id} className="flex justify-center">
            <img
              src={item.image}
              alt={`Item ${item.id}`}
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
