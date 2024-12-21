import Image from 'next/image';
import React from 'react';

const Signup = () => {
  return (
    <div className="container ">
      <div className="flex flex-col md:flex-row gap-6 py-10  rounded-xl">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src={'/assets/images/services/2.jpg'}
            width={600}
            height={350}
            alt="get in touch"
            className="rounded-xl w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:flex-1 text-center lg:text-left  rounded-xl">
          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-socialblack uppercase mb-6 tracking-wider">
            Get In Touch
          </h3>

          <form className="space-y-4">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3  text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-socialpeach"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email ID"
                className="w-full px-4 py-3  text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-socialpeach"
              />
            </div>

            {/* Mobile Number Field */}
            <div className="relative">
              <input
                type="tel"
                placeholder="Your Mobile Number"
                className="w-full px-4 py-3  text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-socialpeach"
              />
            </div>

            {/* Company Website Field */}
            <div className="relative">
              <input
                type="url"
                placeholder="Company Website Link"
                className="w-full px-4 py-3  text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-socialpeach"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-socialpeach text-white font-semibold rounded-md hover:bg-socialblack hover:text-socialpeach transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
