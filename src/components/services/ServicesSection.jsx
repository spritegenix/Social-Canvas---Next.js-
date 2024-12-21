import React from 'react';

import ServiceCard from '@/components/services/ServiceCard';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="section-size-2">
      <div className="container">
        {/* block 1 */}
        <div>
          <h3 className="block md:hidden text-center text-xl font-semibold ">
            <span className="text-socialred">SOCIAL</span> MEDIA MARKETING
          </h3>
          <div className=" flex mx-auto justify-center gap-16 ">
            <div className={`order-1 md:relative -top-0`}>
              <ServiceCard
                content="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa."
                image="/assets/images/services/2.jpg"
                imgOrder={2}
                textOrder={1}
              />
            </div>
            <div className={`order-2 hidden md:block`}>
              <div className={`flex justify-start `}>
                <Image
                  src={'/assets/images/arrow.png'}
                  width={100}
                  height={100}
                  alt=" SOCIAL MEDIA MARKETING"
                  className={`transform -scale-x-95`}
                />
              </div>
              <h3 className="text-xl font-semibold">
                <span className="text-socialred">SOCIAL</span> MEDIA MARKETING
              </h3>
            </div>
          </div>
        </div>

        {/* block 2 */}
        <div>
          <h3 className="block md:hidden text-xl text-center font-semibold pt-10">
            <span className="text-socialred">WEBSITE & MARKETPLACE </span>
            SERVICES
          </h3>
          <div className=" flex mx-auto justify-center gap-24 ">
            <div className={`order-2 md:relative -top-32`}>
              <ServiceCard
                content="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa."
                image="/assets/images/services/3.jpg"
                imgOrder={2}
                textOrder={1}
              />
            </div>
            <div className={`order-1 pt-8 hidden md:block`}>
              <div>
                <div className={`flex justify-end `}>
                  <Image
                    src={'/assets/images/arrow.png'}
                    width={100}
                    height={100}
                    alt="WEBSITE & MARKETPLACE SERVICES"
                    className={`transform -scale-x-20`}
                  />
                </div>
                <h3 className="text-xl font-semibold">
                  <span className="text-socialred">WEBSITE & MARKETPLACE </span>
                  SERVICES
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* block 3 */}
        <div>
          <h3 className="block md:hidden text-xl text-center font-semibold pt-10">
            CREATIVE{' '}
            <span className="text-socialred">CONTENT & PRODUCTION</span>
          </h3>
          <div className=" flex mx-auto justify-center gap-16 ">
            <div className={`order-1 md:relative -top-32`}>
              <ServiceCard
                content="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa."
                image="/assets/images/services/4.jpg"
                imgOrder={1}
                textOrder={2}
              />
            </div>
            <div className={`order-2 hidden md:block`}>
              <div className="relative -top-24">
                <h3 className="text-xl font-semibold">
                  CREATIVE{' '}
                  <span className="text-socialred">CONTENT & PRODUCTION</span>
                </h3>
                <div className={`flex justify-start`}>
                  <Image
                    src={'/assets/images/arrow.png'}
                    width={100}
                    height={100}
                    alt="CREATIVE CONTENT & PRODUCTION"
                    className={`transform -scale-x-20 rotate-180 `}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* block 4 */}
        <div>
          <h3 className="block md:hidden text-xl text-center font-semibold pt-10">
            PAID <span className="text-socialred">MEDIA & PERFORMANCE</span>{' '}
            MARKETING
          </h3>
          <div className=" flex mx-auto justify-center gap-16 ">
            <div className={`order-2 md:relative -top-64`}>
              <ServiceCard
                content="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa."
                image="/assets/images/services/5.jpg"
                imgOrder={2}
                textOrder={1}
              />
            </div>
            <div className={`order-1 hidden md:block`}>
              <div className="relative -top-24">
                <div className={`flex justify-end`}>
                  <Image
                    src={'/assets/images/arrow.png'}
                    width={100}
                    height={100}
                    alt=" PAID MEDIA & PERFORMANCE MARKETING"
                    className={`transform -scale-x-20 `}
                  />
                </div>
                <h3 className="text-xl font-semibold">
                  PAID{' '}
                  <span className="text-socialred">MEDIA & PERFORMANCE</span>{' '}
                  MARKETING
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* block 5 */}
        <div>
          <h3 className="block md:hidden text-xl text-center font-semibold pt-10">
            TAILORED
            <span className="text-socialred"> SOLUTIONS & CONSULTING</span>{' '}
          </h3>
          <div className=" flex mx-auto justify-center gap-16 ">
            <div className={`order-1 md:relative -top-64`}>
              <ServiceCard
                content="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa."
                image="/assets/images/services/6.jpg"
                imgOrder={1}
                textOrder={2}
              />
            </div>
            <div className={`order-2 hidden md:block`}>
              <div className="relative -top-44">
                <h3 className="text-xl font-semibold">
                  TAILORED
                  <span className="text-socialred">
                    {' '}
                    SOLUTIONS & CONSULTING
                  </span>{' '}
                </h3>
                <div className={`flex justify-start `}>
                  <Image
                    src={'/assets/images/arrow.png'}
                    width={100}
                    height={100}
                    alt="TAILORED SOLUTIONS & CONSULTING"
                    className={`transform -scale-x-20 rotate-180 `}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
