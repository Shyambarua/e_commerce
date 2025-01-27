import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Banner from "../assets/hero.png";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleBuyNow = (id) => {
    navigate(`/buy-now/${id}`);
  };
  const categories = [
    { id: 1, name: "Mobiles", img: "/images/mobile.jpg" },
    { id: 2, name: "Electronics", img: "/images/electronics.jpg" },
    { id: 3, name: "Fashion", img: "/images/fashion.jpg" },
    { id: 4, name: "Home", img: "/images/home.jpg" },
    { id: 5, name: "Appliances", img: "/images/appliances.jpg" },
  ];

  const featuredItems = [
    { id: 1, img: "/images/four.png", title: "Nike T-shirt", price: 499 },
    { id: 2, img: "/images/three.png", title: "Adidas T-shirt", price: 799 },
    { id: 3, img: "/images/two.png", title: "Puma T-shirt", price: 699 },
    { id: 4, img: "/images/five.png", title: "Reebok T-shirt", price: 899 },
    { id: 5, img: "/images/four.png", title: "Nike T-shirt", price: 499 },
    { id: 6, img: "/images/three.png", title: "Adidas T-shirt", price: 799 },
    { id: 7, img: "/images/two.png", title: "Puma T-shirt", price: 699 },
    { id: 8, img: "/images/five.png", title: "Reebok T-shirt", price: 899 },
  ];

  const dotd = [
    { id: 1, img: "/images/four.png", title: "Nike T-shirt", price: 499 },
    { id: 2, img: "/images/three.png", title: "Adidas T-shirt", price: 799 },
    { id: 3, img: "/images/two.png", title: "Puma T-shirt", price: 699 },
    { id: 4, img: "/images/five.png", title: "Reebok T-shirt", price: 899 },
    { id: 5, img: "/images/four.png", title: "Nike T-shirt", price: 499 },
    { id: 6, img: "/images/three.png", title: "Adidas T-shirt", price: 799 },
  ];

  const scrollContainer = (direction, containerId) => {
    const container = document.getElementById(containerId);
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="font-sans">
      <Navbar />
      {/* Hero Banner */}
      <div className="w-full">
        <img
          src={Banner}
          alt="Hero Banner"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Categories Section */}
      <section className="mt-10 px-5">
        <h2 className="text-2xl font-bold mb-5">Shop by Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-3"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <h3 className="mt-3 text-sm font-medium">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mt-10 px-5">
        <h2 className="text-2xl font-bold mb-5">Featured Products</h2>
        <div className="relative">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            onClick={() => scrollContainer("left", "featuredContainer")}
          >
            <BsChevronLeft size={24} />
          </button>

          {/* Product Scroll Container */}
          <div
            id="featuredContainer"
            className="flex overflow-x-auto scrollbar-hide space-x-5"
          >
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-5"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
                <h5 className="text-gray-500 mt-1">Price: ₹{item.price}</h5>
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => handleBuyNow(item.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:shadow-lg"
                  >
                    Buy Now
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            onClick={() => scrollContainer("right", "featuredContainer")}
          >
            <BsChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Deals of the Day */}
      <section className="mt-10 px-5">
        <h2 className="text-2xl font-bold mb-5">Deals of the Day</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {dotd.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white shadow-md rounded-lg p-5"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <h5 className="text-gray-500 mt-1">Price: ₹{item.price}</h5>
              <button
                onClick={() => handleBuyNow(item.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:shadow-lg"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}

      {/* Recently Viewed Items Section */}
      <section className="mt-10 px-5">
        <h2 className="text-2xl font-bold mb-5">Recently Viewed Items</h2>
        <div className="relative">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            onClick={() => scrollContainer("left", "recentlyViewedContainer")}
          >
            <BsChevronLeft size={24} />
          </button>

          {/* Recently Viewed Scroll Container */}
          <div
            id="recentlyViewedContainer"
            className="flex overflow-x-auto scrollbar-hide space-x-5"
          >
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-5"
              >
                <img
                  src={`/images/recently-viewed-${index + 1}.jpg`}
                  alt={`Item ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-3">
                  Product {index + 1}
                </h3>
                <h5 className="text-gray-500 mt-1">
                  Price: ₹{999 + index * 100}
                </h5>
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => handleBuyNow(item.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:shadow-lg"
                  >
                    Buy Now
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            onClick={() => scrollContainer("right", "recentlyViewedContainer")}
          >
            <BsChevronRight size={24} />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
