import React from 'react';

const ProductPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kf6o2a80/mat/8/z/a/4mm-boldfit-original-imafw7jfjpz7b7bh.jpeg"
              alt="Yoga Mat"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-gray-800 text-white px-2 py-1 rounded-full text-sm">
              Bestseller
            </div>
          </div>

          {/* Product Info Section */}
          <div className="mt-8 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900">Boldfit Yoga Mat for Men & Women</h1>
            <p className="mt-4 text-xl text-gray-700">Size: 4mm, Anti-Skid, Blue Color</p>

            {/* Price Section */}
            <div className="mt-6 flex items-center">
              <span className="text-2xl font-bold text-gray-900">₹999</span>
              <span className="text-xl text-gray-500 ml-4 line-through">₹1,499</span>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500">
                ★★★★☆
              </span>
              <span className="ml-2 text-gray-600">(200+ ratings)</span>
            </div>

            {/* Description */}
            <div className="mt-4 text-gray-600">
              <p>Made of high-quality material with a non-slip surface. Perfect for yoga, stretching, and general workouts.</p>
            </div>

            {/* Add to Cart and Buy Now buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md">
                Add to Cart
              </button>
              <button className="w-full py-3 px-6 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">Product Details</h3>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>Durable and long-lasting material</li>
            <li>Anti-skid texture for better grip</li>
            <li>Ideal for home use, gym, and outdoor workouts</li>
            <li>Comes with a carry strap for easy transport</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
