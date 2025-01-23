import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const featuredItems = [
    { id: 1, img: '/images/four.png', title: 'Nike T-shirt', price: 499 },
    { id: 2, img: '/images/three.png', title: 'Nike T-shirt', price: 499 },
    { id: 3, img: '/images/two.png', title: 'Nike T-shirt', price: 499 },
    { id: 4, img: '/images/five.png', title: 'Nike T-shirt', price: 499 },
    { id: 5, img: '/images/1.png', title: 'Nike T-shirt', price: 499 },
    { id: 6, img: '/images/15.png', title: 'Nike T-shirt', price: 499 },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-center justify-center">
        <img
          src="/images/hero.png"
          alt="Hero"
          className="w-full max-w-[1365px] h-[442px] object-cover"
        />
      </div>

      {/* Featured Section */}
      <section className="mt-20 px-5">
        <h1 className="text-2xl font-bold text-center">Featured</h1>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-20">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
            >
              <img src={item.img} alt={item.title} className="w-[300px] h-[300px] object-cover" />
              <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
              <h5 className="text-gray-500 mt-1">Price: Rs. {item.price}</h5>
              <div className="flex gap-3 mt-3">
                <a href="/buynow">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:shadow-md">
                    Buy Now
                  </button>
                </a>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:shadow-md">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
