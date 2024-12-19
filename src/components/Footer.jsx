import React from 'react';

const Footer5 = () => {
  return (
    <footer className=" text-white py-50">
      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-5 space-y-8 lg:space-y-0">
        {/* Stalk Our Feed Section */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-3 text-socialblack">
            Stalk our feed
          </h3>

          <div className="flex items-center space-x-3 mt-4 text-socialblack">
            <a href="#" className=" p-2 rounded">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram text-black"></i>
            </a>
            <a href="#" className=" p-2 rounded">
              <span className="sr-only">LinkedIn</span>
              <i className="fab fa-linkedin text-black"></i>
            </a>
            <a href="#" className=" p-2 rounded">
              <span className="sr-only">X (Twitter)</span>
              <i className="fab fa-twitter text-black"></i>
            </a>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-300 uppercase mb-3">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>Social</li>
            <li>Paid</li>
            <li>Creative</li>
            <li>Influencer</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-300 uppercase mb-3">
            Don't be a stranger
          </h3>
          <p className="mb-2">+91 90412 90773</p>
          <p>socialcanvasdigital@gmail.com</p>
        </div>

        {/* Company and Connect Section */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-300 uppercase mb-3">
            Company
          </h3>
          <ul className="space-y-2 mb-4">
            <li>About Us</li>
            <li>Newsletter</li>
            <li>Case Studies</li>
            <li>Contact</li>
          </ul>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-full flex items-center space-x-2">
            <i className="fas fa-briefcase"></i>
            <span>We're Hiring</span>
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="mt-10 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5 py-5 space-y-4 md:space-y-0">
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <input
              type="email"
              placeholder="Your email for contact"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
            >
              Submit your inquiry now
            </button>
          </form>
        </div>
      </div> */}

      {/* Copyright Section */}
      <div className="bg-black text-center py-4">
        <p className="text-sm">&copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer5;
