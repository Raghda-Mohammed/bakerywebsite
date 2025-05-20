import React from "react";
import footerImage from "../assets/Rectangle 75.png";
import footerImage1 from "../assets/Rectangle 157.png";
import footerImage2 from "../assets/Rectangle 158.png";
import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

const menuFooter = [
  {
    id: 1,
    name: "About Us",
    details: {
      phone: "(456) 789-12301",
      email: "info@modrino.co.uk",
      address: "South 13th street",
      city: "New York, America",
    },
  },
  {
    id: 2,
    name: "Explore",
    links: ["Home", "Blog", "Contact us", "Services"],
  },
  {
    id: 3,
    name: "Recent News",
    news: [
      {
        id: 1,
        date: "June 14, 2024",
        title: "Puff pastry bliss.",
        img: footerImage1,
      },
      {
        id: 2,
        date: "June 14, 2024",
        title: "Puff pastry bliss.",
        img: footerImage2,
      },
    ],
  },
];

const Footer = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* العنوان */}
        <div className="flex flex-col md:flex-row justify-between border-b border-orange-300 pb-4">
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="logo"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4"
            />
          </div>
          <div className="flex flex-col items-center md:flex-row gap-6 md:gap-12 mt-8">
            <span className="font-bold text-orange-300 text-xl sm:text-2xl md:text-3xl">
              Follow us
            </span>
            <div className="flex gap-4">
              <FaFacebookF className="text-3xl md:text-4xl rounded-full p-1 bg-orange-300" />
              <FaInstagram className="text-3xl md:text-4xl rounded-full p-1 bg-orange-300" />
              <FaPinterestP className="text-3xl md:text-4xl rounded-full p-1 bg-orange-300" />
              <FaWhatsapp className="text-3xl md:text-4xl rounded-full p-1 bg-orange-300" />
            </div>
          </div>
        </div>

        {/* القائمة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {menuFooter.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 text-center md:text-left"
            >
              <span className="font-bold text-orange-300 text-xl sm:text-2xl md:text-3xl">
                {item.name}
              </span>
              {item.name === "About Us" &&
                Object.values(item.details).map((detail, index) => (
                  <span
                    key={index}
                    className="text-white text-lg sm:text-xl md:text-2xl"
                  >
                    {detail}
                  </span>
                ))}
              {item.name === "Explore" && (
                <ul className="flex flex-col gap-2">
                  {item.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-white text-lg sm:text-xl md:text-2xl"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              )}
              {item.name === "Recent News" && (
                <ul className="grid grid-cols-1 gap-4">
                  {item.news.map((news) => (
                    <li
                      key={news.id}
                      className="grid lg:grid-cols-2 gap-2 items-center text-white text-lg sm:text-xl md:text-2xl"
                    >
                      {news?.img && (
                        <img
                          src={news.img}
                          alt={news.title}
                          className="w-full h-auto rounded-md mb-4"
                        />
                      )}

                      <div className="flex flex-col gap-2 justify-center">
                        {news?.date && (
                          <span className="text-center text-orange-300">
                            {news.date}
                          </span>
                        )}
                        {news?.title && (
                          <span className="text-center">{news.title}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
