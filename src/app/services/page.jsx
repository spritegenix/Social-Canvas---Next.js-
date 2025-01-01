import Approach from '@/components/caseStudy/Approach';
import PulseCase from '@/components/caseStudy/PulseCase';
import Footer5 from '@/components/Footer';
import Header from '@/components/Header';
import Process from '@/components/services/Process';
import ServicesSection from '@/components/services/ServicesSection';
import Signup from '@/components/Signup';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {/* services section */}
        <ServicesSection />
        {/* end service section  */}

        {/* process section */}
        <Process />
        {/* end process section */}

        {/* signup section */}
        <section className="md:relative -top-44 lighter-bg p-4">
          <Signup footer={false} />
        </section>
        {/* end signup section */}

        {/* caseStudy approach */}
        <section className="md:relative -top-24">
          <Approach />
        </section>

        {/* End caseStudy approach */}

        {/* case study individual */}
        <section className="mb-10">
          <PulseCase />
        </section>
        {/* end case study individual */}
      </div>
      {/* footer section */}
      <section className="md:py-5 block">
        <Footer5 />
      </section>
      {/* end footer section */}
    </div>
  );
};

export default page;
