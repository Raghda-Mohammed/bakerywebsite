import React, { useState } from "react";
import products1 from "../assets/Products1.png";
import products2 from "../assets/Products2.png";
import products3 from "../assets/Products3.png";
import products4 from "../assets/Products4.png";
import products5 from "../assets/Products5.png";
import products6 from "../assets/Products6.png";
import { LiaStarSolid } from "react-icons/lia";

import productImage from "../assets/Rectangle 69.png"; // استيراد صورة الخلفية للمنتجات

const Products = () => {
  const [rating, setRating] = useState(0);
  const totalStarts = 5;
  const products = [
    {
      id: 1,
      name: "Whole Grain Bread",
      price: "$40",
      image: products1,
    },
    {
      id: 2,
      name: "Whole Grain Bread",
      price: "$40",
      image: products2,
    },
    {
      id: 3,
      name: "Whole Grain Bread",
      price: "$40",
      image: products3,
    },
    {
      id: 4,
      name: "Whole Grain Bread",
      price: "$40",
      image: products4,
    },
    {
      id: 5,
      name: "Whole Grain Bread",
      price: "$40",
      image: products5,
    },
    {
      id: 6,
      name: "Whole Grain Bread",
      price: "$40",
      image: products6,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="text-center my-12">
        <span className="font-mono font-bold text-4xl text-center mt-8">
          Top Products
        </span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-4 shadow-lg rounded-lg p-4">
        {products.map((product) => (
          <div
            key={product.id}
            style={{ backgroundImage: `url(${productImage})` }}
            className="text-white bg-cover bg-center bg-no-repeat shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-300 py-8"
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
              className="rounded-lg mb-4 items-center mx-auto"
            />
            <div className="flex gap-2 text-2xl mb-4">
              {[...Array(totalStarts)].map((_, index) => (
                <LiaStarSolid
                  key={index}
                  className={
                    index < rating
                      ? "text-amber-300 cursor-pointer"
                      : "text-white cursor-pointer"
                  }
                  onClick={() => setRating(index + 1)} // عند النقر يتم تعيين قيمة التقييم
                />
              ))}
            </div>

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-white">
                {product.price}
              </span>
              <button className="bg-amber-800 text-white px-4 py-2 rounded-full hover:bg-orange-200 hover:text-black cursor-pointer transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
