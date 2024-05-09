import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <div className="flex gap-8">
            <ul>
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/shop" className="text-gray-300 hover:text-white">Shop</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
            <ul>
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/shop" className="text-gray-300 hover:text-white">Shop</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
            <ul>
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/shop" className="text-gray-300 hover:text-white">Shop</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
            <ul>
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/shop" className="text-gray-300 hover:text-white">Shop</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Follow Us</h5>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-300 hover:text-white"><FaFacebookF /></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white"><FaTwitter /></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white"><FaPinterest /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
