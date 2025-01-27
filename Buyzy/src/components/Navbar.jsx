import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Signup from "./Signup";

const Navbar = () => {
  const categories = [
    "New & Featured",
    "Men",
    "Women",
    "Kids",
    "Customise",
  ];

  const shoeItems = ["Sneaker", "Sports Shoe", "Casual Shoe"];
  const clothingItems = [
    "Tops and T-Shirts",
    "Shorts",
    "Pants and Leggings",
    "Hoodies and Sweatshirts",
    "Jackets and Gilets",
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-between px-5 py-2 bg-gray-100 text-sm">
        <Link to="/" className="text-lg font-bold">
          Buyzy
        </Link>
        <div className="hidden sm:flex items-center space-x-3">
          <Link to="/store" className="hover:text-blue-500">
            Find a Store
          </Link>
          <span>|</span>
          <Link to="/help" className="hover:text-blue-500">
            Help
          </Link>
          <span>|</span>
          <Signup />
          <span>|</span>
          <LoginForm />
        </div>
      </div>

      {/* Navbar Header */}
      <header className="flex flex-wrap justify-between items-center px-5 py-3 border-b">
        <Link to="/">
          <img
            src="/assets/logo1.png"
            alt="Buyzy Logo"
            className="w-20 h-auto"
          />
        </Link>

        {/* Categories */}
        <div className="hidden lg:flex space-x-6">
          {categories.map((category) => (
            <div className="group relative" key={category}>
              <button className="text-lg font-medium hover:text-blue-500">
                {category}
              </button>
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-md w-72 z-10">
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold">Shoe</h3>
                    <ul>
                      {shoeItems.map((item) => (
                        <li key={item} className="py-1 text-sm hover:text-blue-500">
                          <Link to={`/categories/shoes/${item.toLowerCase()}`}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Clothing</h3>
                    <ul>
                      {clothingItems.map((item) => (
                        <li key={item} className="py-1 text-sm hover:text-blue-500">
                          <Link to={`/categories/clothing/${item.toLowerCase()}`}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Icons */}
        <div className="flex items-center space-x-4 w-full lg:w-auto mt-3 lg:mt-0">
          <div className="flex items-center border rounded-full px-3 py-1 w-full lg:w-auto">
            <FaSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full lg:w-auto outline-none"
            />
          </div>
          <CiHeart className="text-2xl" />
          <BsCart3 className="text-2xl" />
        </div>
      </header>

      {/* Promo Section */}
      <div className="text-center py-6 bg-gray-100">
        <h2 className="text-xl font-semibold">
          Move, Shop, Customise & Celebrate With Us.
        </h2>
        <p className="text-sm">
          No matter what you feel like doing today, it's better as a Member.
        </p>
        <Link to="/join" className="text-lg underline hover:text-blue-500">
          Join Us
        </Link>
      </div>
    </>
  );
};

export default Navbar;
