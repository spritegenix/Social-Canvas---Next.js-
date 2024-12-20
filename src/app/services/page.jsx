import Header from '@/components/Header';
import ServiceMain from '@/components/services/serviceMain';
import Image from 'next/image';
import React from 'react';
const serviceData = [
  {
    content:
      '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa.',
    image: '/assets/images/category/webiste1.jpg',
    title: 'SOCIAL MEDIA MARKETING',
  },
  {
    content:
      '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa.',
    image: '/assets/images/category/webiste1.jpg',
    title: 'WEBSITE & MARKETPLACE SERVICES',
  },
  {
    content:
      '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa.',
    image: '/assets/images/category/webiste1.jpg',
    title: 'CREATIVE CONTENT & PRODUCTION',
  },
  {
    content:
      '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa.',
    image: '/assets/images/category/webiste1.jpg',
    title: 'PAID MEDIA & PERFORMANCE MARKETING',
  },
  {
    content:
      '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa.',
    image: '/assets/images/category/webiste1.jpg',
    title: 'TAILORED SOLUTIONS & CONSULTING',
  },
];
const page = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <section className="section-size-2">
          <div className="container">
            <ServiceMain
              content="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa."
              image="/assets/images/category/webiste1.jpg"
              imgOrder={1}
              textOrder={2}
              scales={90}
              justify="start"
            />
            <ServiceMain
              content="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa."
              image="/assets/images/category/webiste1.jpg"
              imgOrder={2}
              textOrder={1}
              scales={20}
              justify="end"
            />

            {/* <div className=" flex mx-auto justify-center gap-24 py-5">
              <div className="order-2 relative -top-40">
                <ServiceCard
                  content="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quisquam itaque repellendus in voluptate expedita ipsa."
                  image="/assets/images/category/webiste1.jpg"
                  imgOrder={2}
                  textOrder={1}
                />
              </div>
              <div className="order-1">
                <ServiceHeader scale={20} justify={'end'} />
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
