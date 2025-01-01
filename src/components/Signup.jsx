import Image from 'next/image';
import React from 'react';

const Signup = ({ footer = false }) => {
  return (
    <>
      {!footer ? (
        <div className="container ">
          <div className="flex flex-col md:flex-row gap-6 py-10  rounded-xl">
            {/* Image Section */}
            <div className="flex-1 flex justify-center w-full h-[540px] lg:h-[630px] xl:h-[770px]">
              <Image
                src={'/assets/images/about/contact.jpeg'}
                width={600}
                height={350}
                alt="get in touch"
                className="rounded-xl w-full h-full object-cover object-top"
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

                {/* objectives */}
                <div className="relative">
                  <select
                    id="services"
                    defaultValue=""
                    className="bg-gray-100 px-4 py-3 mb-3  text-gray-700  rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Objective
                    </option>
                    <option value="social_media_management">
                      I need help with Social Media Management.
                    </option>
                    <option value="creative_design_services">
                      Iʼm looking for creative design services.
                    </option>
                    <option value="website_design_development">
                      I want website design or development support.
                    </option>
                    <option value="photography_video_shoot">
                      I need photography or video shoot assistance.
                    </option>
                    <option value="performance_marketing">
                      I want to discuss performance marketing (ads).
                    </option>
                    <option value="explore_services">
                      Iʼm not sure, but Iʼd love to explore what you offer.
                    </option>
                  </select>
                </div>

                {/* budget */}
                <div className="relative">
                  <select
                    id="budget"
                    defaultValue=""
                    className="bg-gray-100 px-4 py-3  text-gray-700  rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      How much is your budget?
                    </option>
                    <option value="₹35,000_₹50,000">₹35,000 - ₹50,000</option>
                    <option value="₹50,000_₹1,00,000">
                      ₹50,000 - ₹1,00,000
                    </option>
                    <option value="₹1,00,000_₹1,50,000">
                      ₹1,00,000 - ₹1,50,000
                    </option>
                    <option value="₹1,50,000_₹2,00,000">
                      ₹1,50,000 - ₹2,00,000
                    </option>
                    <option value="unsure_budget text-wrap">
                      I donʼt know my budget, depends on the conversation
                    </option>
                  </select>
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
      ) : (
        <form className="space-y-1 ">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-[15px] p-0 m-0 bg-transparent text-white placeholder-gray-400 "
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Your Email ID"
              className="w-full h-[15px] p-0 m-0 bg-transparent text-white placeholder-gray-400 "
            />
          </div>

          {/* Mobile Number Field */}
          <div className="relative">
            <input
              type="tel"
              placeholder="Your Mobile Number"
              className="w-full h-[15px] p-0 m-0 bg-transparent text-white placeholder-gray-400 "
            />
          </div>

          {/* Company Website Field */}
          <div className="relative">
            <input
              type="url"
              placeholder="Company Website Link"
              className="w-full h-[15px] p-0 m-0 bg-transparent text-white placeholder-gray-400 "
            />
          </div>

          {/* objectives */}
          <div className="relative">
            <select
              id="services"
              defaultValue=""
              className="bg-gray-100 text-xs p-0 m-0 w-full h-[20px] text-gray-700  rounded-md border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Objective
              </option>
              <option value="social_media_management">
                I need help with Social Media Management.
              </option>
              <option value="creative_design_services">
                Iʼm looking for creative design services.
              </option>
              <option value="website_design_development">
                I want website design or development support.
              </option>
              <option value="photography_video_shoot">
                I need photography or video shoot assistance.
              </option>
              <option value="performance_marketing">
                I want to discuss performance marketing (ads).
              </option>
              <option value="explore_services">
                Iʼm not sure, but Iʼd love to explore what you offer.
              </option>
            </select>
          </div>

          {/* budget */}
          <div className="relative">
            <select
              id="budget"
              defaultValue=""
              className="bg-gray-100 text-xs p-0 m-0 w-full h-[20px] text-gray-700  rounded-md border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled className="text-xs">
                How much is your budget?
              </option>
              <option value="₹35,000_₹50,000">₹35,000 - ₹50,000</option>
              <option value="₹50,000_₹1,00,000">₹50,000 - ₹1,00,000</option>
              <option value="₹1,00,000_₹1,50,000">₹1,00,000 - ₹1,50,000</option>
              <option value="₹1,50,000_₹2,00,000">₹1,50,000 - ₹2,00,000</option>
              <option value="unsure_budget text-wrap">
                I donʼt know my budget, depends on the conversation
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-socialpeach rounded-xl px-2 mx-2 text-base font-semibold"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Signup;
