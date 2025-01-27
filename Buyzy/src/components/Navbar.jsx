import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import Logo from '../assets/logo1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

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

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

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
      <header className="flex justify-between items-center px-5 py-3 border-b">
        {/* Logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="Buyzy Logo"
            className="w-20 h-auto"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navbar Links */}
        <nav className="hidden lg:flex space-x-6">
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
                        <li
                          key={item}
                          className="py-1 text-sm hover:text-blue-500"
                        >
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
                        <li
                          key={item}
                          className="py-1 text-sm hover:text-blue-500"
                        >
                          <Link
                            to={`/categories/clothing/${item.toLowerCase()}`}
                          >
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
        </nav>

        {/* Search & Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center border rounded-full px-3 py-1">
            <FaSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 outline-none"
            />
          </div>
          <CiHeart className="text-2xl" />
          <BsCart3 className="text-2xl" />
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden flex flex-col bg-gray-50 shadow-md`}
      >
        <div className="flex flex-col space-y-3 px-5 py-4">
          {categories.map((category) => (
            <div key={category}>
              <button
                className="flex justify-between items-center w-full text-lg font-medium py-2 hover:text-blue-500"
                onClick={() => toggleCategory(category)}
              >
                {category}
                <span>
                  {openCategory === category ? <FaTimes /> : <FaBars />}
                </span>
              </button>
              {openCategory === category && (
                <div className="pl-5">
                  <div>
                    <h3 className="text-sm font-semibold">Shoe</h3>
                    <ul>
                      {shoeItems.map((item) => (
                        <li
                          key={item}
                          className="py-1 text-sm hover:text-blue-500"
                        >
                          <Link to={`/categories/shoes/${item.toLowerCase()}`}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mt-3">Clothing</h3>
                    <ul>
                      {clothingItems.map((item) => (
                        <li
                          key={item}
                          className="py-1 text-sm hover:text-blue-500"
                        >
                          <Link
                            to={`/categories/clothing/${item.toLowerCase()}`}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search & Icons */}
        <div className="flex flex-col items-center px-5 py-4 space-y-3 border-t">
          <div className="flex items-center border rounded-full px-3 py-1 w-full">
            <FaSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <CiHeart className="text-2xl" />
            <BsCart3 className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
