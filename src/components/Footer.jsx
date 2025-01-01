import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import Signup from './Signup';
const Footer5 = () => {
  return (
    <div className="text-socialblack ">
      <div className="container flex flex-col lg:flex-row justify-between items-start  lg:space-y-0">
        <div className="w-full lg:w-[200px] xl:w-[250px] flex flex-col  ">
          <h3 className="text-lg font-bold mb-3 text-socialblack text-center lg:text-left">
            Stalk our feed
          </h3>
          <div className="flex items-center justify-center lg:justify-start space-x-3 mt-4 text-socialblack">
            <a href="#" className="p-2">
              <span>
                <FaSquareInstagram />
              </span>
            </a>
            <a href="#" className="p-2">
              <span>
                <FaLinkedin />
              </span>
            </a>
            <a href="#" className="p-2">
              <span>
                <FaSquareXTwitter />
              </span>
            </a>
          </div>
          <div className="text-center lg:text-left py-4">
            <p className="text-sm text-socialblack">
              &copy; 2024. All rights reserved.
            </p>
          </div>
        </div>
        <div className="lg:w-[250px] xl:w-[400px] w-full flex gap-12 md:gap-0 justify-around ">
          <div className=" text-socialblack text-center lg:text-left">
            <h3 className="text-sm font-semibold uppercase mb-3">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>Social</li>
              <li>Paid</li>
              <li>Creative</li>
              <li>Influencer</li>
            </ul>
          </div>

          <div className=" text-center lg:text-left">
            <h3 className="text-sm font-semibold text-socialblack uppercase mb-3">
              Company
            </h3>
            <ul className="space-y-2 mb-4 text-socialblack">
              <li>About Us</li>
              <li>Newsletter</li>
              <li>Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 md:flex-1  items-center md:items-start mx-auto md:w-full justify-center flex-col md:flex-row md:justify-around">
          <div className="w-full md:flex-1 text-center lg:text-left">
            <h3 className="text-sm font-semibold text-socialblack uppercase mb-3">
              Don&apos;t be a stranger
            </h3>
            <p className="mb-2 text-socialblack text-sm font-normal">
              {' '}
              <a href="tel:+919041290773 ">+91 90412 90773</a>
            </p>
            <p className="text-socialblack text-sm font-normal">
              <a href="mailto:socialcanvasdigital@gmail.com">
                socialcanvasdigital@gmail.com
              </a>
            </p>
          </div>
          <div className="w-full md:flex-1 text-center lg:text-left lighter-bg p-2 rounded-xl">
            {/* Section Title */}
            <h3 className="text-sm font-semibold text-socialblack uppercase mb-3">
              Get In Touch
            </h3>

            {/* Form Section */}
            <Signup footer={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer5;
