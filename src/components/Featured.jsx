import React from "react";
import products1 from "../assets/Rectangle 153.png";
import products2 from "../assets/Rectangle 154.png";
import products3 from "../assets/Rectangle 156.png";

const products = [
  {
    id: 1,
    name: "Puff Pastry ",
    price: "$8",
    image: products1,
  },
  {
    id: 2,
    name: "Doughnuts",
    price: "$8",
    image: products2,
  },
  {
    id: 3,
    name: "Brownies",
    price: "$8",
    image: products3,
  },
];
const Featured = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <h2 className="font-serif font-bold text-4xl text-center">
          Featured Treats
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-4 shadow-lg rounded-lg p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col  bg-white p-4 rounded-lg shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-md mb-4"
            />
            <div className="grid grid-cols-2 justify-between mx-8">
              <h3 className="text-2xl font-semibold justify-self-start">{product.name}</h3>
              <p className="text-2xl font-semibold justify-self-end">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
