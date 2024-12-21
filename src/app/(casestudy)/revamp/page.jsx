import PulseCase from '@/components/caseStudy/PulseCase';
import Footer5 from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const page = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <section className="mb-5">
          <PulseCase />
        </section>
      </div>
      <Footer5 />
    </div>
  );
};

export default page;
