import Footer5 from '@/components/Footer';
import Header from '@/components/Header';
import Signup from '@/components/Signup';
import React from 'react';

const page = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <section className="mb-5">
          <Signup />
        </section>
      </div>
      <Footer5 />
    </div>
  );
};

export default page;
