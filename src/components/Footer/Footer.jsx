

import { format } from "date-fns";
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-black text-white mt-6 ">
      <div className="max-w-6xl mx-auto px-10 py-10 container grid grid-cols-1 md:grid-cols-3 gap-8">

       
        <div>
          <h2 className="text-xl font-bold">MyBookStore</h2>
          <p className="text-sm text-gray-400 mt-2">
            Your favorite place to explore and buy books online.
          </p>
        </div>

      
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-400">Email: support@bookstore.com</p>
          <p className="text-sm text-gray-400">Phone: +880 123 456 789</p>
        </div>

       
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-lg mt-2">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaGithub className="hover:text-white hover:bg-black rounded-full shadow-2xl cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 border-t border-gray-700 py-3">
        © {format(new Date(), "dd/MMM/yyyy")}; MyBookStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;