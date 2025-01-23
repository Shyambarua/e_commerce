import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Billing = () => {
  const total = 1497; // Example total amount

  return (
    <>
      <Navbar />
      <div className="px-5 mt-10">
        <h1 className="text-2xl font-bold mb-5">Billing Details</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="p-3 border rounded-md"
            required
          />
          <h2 className="text-xl font-bold mt-5">Total: Rs. {total}</h2>
          <button className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-md hover:shadow-lg">
            Confirm Purchase
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Billing;
