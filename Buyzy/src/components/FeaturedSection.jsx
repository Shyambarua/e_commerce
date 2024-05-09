
const FeaturedSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex space-x-4">
            {/* Product Cards */}
            <div className="flex-none w-64 bg-white shadow rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Product" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Product Name</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold">$99.99</span>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* Repeat this block for more products */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
