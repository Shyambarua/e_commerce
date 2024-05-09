import "./Navbar.css";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo1.png'


const Navbar = () => {
  return (
    <>
      <div className="main-head">
        <a href="">Buyzy</a>
        <div className="main-link">
          <a href="">Find a Store</a> |<a href="">Help</a> |
          <a href="Register/register.html">Join Us</a> |
          <a href="Register/login.html">Sign In</a>
        </div>
      </div>


      <header className="head">
      <a href="#"><img src={logo} alt="" className=" w-20 h-12" /></a>
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">New & Featured</button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Shoe</h3>
                <a href="#">Sneaker</a>
                <a href="#">Sports Shoe</a>
                <a href="#">Casual Shoe</a>
              </div>
              <div className="column">
                <h3>Clothing</h3>
                <a href="#">All Clothing</a>
                <a href="#">Tops and T-Shirts</a>
                <a href="#">Shorts</a>
                <a href="#">Pants and Leggings</a>
                <a href="#">Hoodies and Swetshirts</a>
                <a href="#">Jackets and Gilets</a>
              </div>
              <div className="column">
                <h3>Shop By Sport</h3>
                <a href="#">Running</a>
                <a href="#">Basketball</a>
                <a href="#">Football</a>
                <a href="#">Golf</a>
                <a href="#">Tennis</a>
                <a href="#">Gym and Training</a>
                <a href="#">Cricket</a>
              </div>
              <div className="column">
                <h3>Acessories and Equipment</h3>
                <a href="#">All Accessories and Equipment</a>
                <a href="#">Bags and Backpacks</a>
                <a href="#">Socks</a>
                <a href="#">Hats and Headwear</a>
                <a href="#">Chains</a>
                <a href="#">Watch</a>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Men</button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Shoe</h3>
                <a href="#">Sneaker</a>
                <a href="#">Sports Shoe</a>
                <a href="#">Casual Shoe</a>
              </div>
              <div className="column">
                <h3>Clothing</h3>
                <a href="#">All Clothing</a>
                <a href="#">Tops and T-Shirts</a>
                <a href="#">Shorts</a>
                <a href="#">Pants and Leggings</a>
                <a href="#">Hoodies and Swetshirts</a>
                <a href="#">Jackets and Gilets</a>
              </div>
              <div className="column">
                <h3>Shop By Sport</h3>
                <a href="#">Running</a>
                <a href="#">Basketball</a>
                <a href="#">Football</a>
                <a href="#">Golf</a>
                <a href="#">Tennis</a>
                <a href="#">Gym and Training</a>
                <a href="#">Cricket</a>
              </div>
              <div className="column">
                <h3>Acessories and Equipment</h3>
                <a href="#">All Accessories and Equipment</a>
                <a href="#">Bags and Backpacks</a>
                <a href="#">Socks</a>
                <a href="#">Hats and Headwear</a>
                <a href="#">Chains</a>
                <a href="#">Watch</a>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Women</button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Shoe</h3>
                <a href="#">Sneaker</a>
                <a href="#">Sports Shoe</a>
                <a href="#">Casual Shoe</a>
              </div>
              <div className="column">
                <h3>Clothing</h3>
                <a href="#">All Clothing</a>
                <a href="#">Tops and T-Shirts</a>
                <a href="#">Shorts</a>
                <a href="#">Pants and Leggings</a>
                <a href="#">Hoodies and Swetshirts</a>
                <a href="#">Jackets and Gilets</a>
              </div>
              <div className="column">
                <h3>Shop By Sport</h3>
                <a href="#">Running</a>
                <a href="#">Basketball</a>
                <a href="#">Football</a>
                <a href="#">Golf</a>
                <a href="#">Tennis</a>
                <a href="#">Gym and Training</a>
                <a href="#">Cricket</a>
              </div>
              <div className="column">
                <h3>Acessories and Equipment</h3>
                <a href="#">All Accessories and Equipment</a>
                <a href="#">Bags and Backpacks</a>
                <a href="#">Socks</a>
                <a href="#">Hats and Headwear</a>
                <a href="#">Chains</a>
                <a href="#">Watch</a>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Kids</button>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <h3>Shoe</h3>
                <a href="#">Sneaker</a>
                <a href="#">Sports Shoe</a>
                <a href="#">Casual Shoe</a>
              </div>
              <div className="column">
                <h3>Clothing</h3>
                <a href="#">All Clothing</a>
                <a href="#">Tops and T-Shirts</a>
                <a href="#">Shorts</a>
                <a href="#">Pants and Leggings</a>
                <a href="#">Hoodies and Swetshirts</a>
                <a href="#">Jackets and Gilets</a>
              </div>
              <div className="column">
                <h3>Shop By Sport</h3>
                <a href="#">Running</a>
                <a href="#">Basketball</a>
                <a href="#">Football</a>
                <a href="#">Golf</a>
                <a href="#">Tennis</a>
                <a href="#">Gym and Training</a>
                <a href="#">Cricket</a>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <a href="https://www.bewakoof.com/custom-tshirts" className="dropbtn">
            Customise
          </a>
        </div>
      </div>
      <div className="right-nav">
        <div className="search">
          <FaSearch className=" text-gray-600 text-2xl  "/>
          <input type="search" placeholder="Search...." />
        </div>
        <a href=""><CiHeart className="text-3xl text-black" /></a>
        <a href=""><BsCart3 className="text-3xl text-black" /></a>
      </div>
    </header>

    
    <div className="bottom-nav">
        <h2>Move, Shop, Customise & Celebrate With Us.</h2>
        <p>No matter what you feel like doing today, Its better as a Member.</p>
        <a href="Register/register.html">Join Us.</a>
    </div>
    </>
  );
};

export default Navbar;
