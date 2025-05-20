import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import "../index.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import footerImage from "../assets/Rectangle 75.png";

// react icons
import { IoSearchOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

import { FaUserCheck } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
const Header = () => {
  const { isLoggedIn, logIn, logOut } = useState(false);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const Links = [
    { id: 1, page: "Home", path: "/" },
    { id: 3, page: "Blog", path: "/blog" },
    { id: 2, page: "Contact Us", path: "/contact" },
    { id: 4, page: "Services", path: "/services" },
  ];
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* الشعار */}
        <div className="lg:flex items-center gap-2">
          <Link to="/" className="text-black text-decoration-none text-xl">
            <img src={logo} alt="Logo" className="h-32 w-24" />
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-7">
          {Links.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="text-white text-4xl text-decoration-none link-primary hover:text-orange-200"
              >
                {item.page}
              </Link>
            </li>
          ))}
        </ul>

        {/* عناصر تسجيل الدخول والسلة والمفضلة */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 border-none px-2 py-1 rounded-lg bg-gray-200">
            <Form.Control
              type="text"
              placeholder="What are you looking for?"
              className="text-sm py-2 px-4 bg-transparent border-none w-full focus:outline-none"
            />
            <IoSearchOutline className="text-xl" />
          </div>

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              {/* المفضلة */}
              <Link to="/wishlist">
                <div className="relative">
                  <FiHeart className="text-2xl text-black sm:text-3xl md:text-2xl" />
                  {wishlist.length > 0 && (
                    <span className="absolute top-[-10px] right-[-5px] px-1.5 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                </div>
              </Link>

              {/* السلة */}
              <Link to="/cart">
                <div className="relative">
                  <MdOutlineShoppingCart className="text-2xl text-black sm:text-3xl md:text-2xl" />
                  {cart.length > 0 && (
                    <span className="absolute top-[-10px] right-[-5px] px-1.5 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                      {cart.length}
                    </span>
                  )}
                </div>
              </Link>

              {/* زر تسجيل الخروج */}
              <button
                onClick={logOut}
                className="bg-red-500 text-white p-2 rounded-circle hover:bg-red-600"
              >
                <FaUserCheck />
              </button>
            </div>
          ) : (
            <button
              onClick={logIn}
              className="bg-amber-800 text-white p-3 rounded-full hover:bg-amber-900 cursor-pointer"
            >
              <CiUser />
            </button>
          )}
        </div>

        {/* القائمة الجانبية (للشاشات الصغيرة) */}
        <div className="lg:hidden ml-auto">
          {!isOpenMenu ? (
            <HiOutlineMenu
              className="text-3xl text-orange-200 cursor-pointer"
              onClick={() => setIsOpenMenu(true)}
            />
          ) : (
            <HiX
              className="text-3xl text-orange-200 cursor-pointer"
              onClick={() => setIsOpenMenu(false)}
            />
          )}
        </div>

        {isOpenMenu && (
          <div className="lg:hidden flex flex-col items-center py-10 w-1/4 bg-white border border-gray-200 rounded-lg shadow-lg absolute top-16 right-4 z-50">
            <ul className="flex flex-col gap-4">
              {Links.map((item) => (
                <li key={item.id} className="text-sm ">
                  <Link
                    to={item.path}
                    className="text-orange-400 text-decoration-none hover:text-blue-600 text-center"
                  >
                    {item.page}
                  </Link>
                </li>
              ))}

              {isLoggedIn ? (
                <button
                  onClick={logOut}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={logIn}
                  className="mt-4 bg-amber-800 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Log In
                </button>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
