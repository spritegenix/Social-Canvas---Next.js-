import Footer5 from '@/components/Footer';
import Header from '@/components/Header';
import Signup from '@/components/Signup';
import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const page = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <section className="mb-5">
          <Signup footer={false} />
          <div className="flex justify-around items-center">
            <a href="#" className=" border-none">
              <FaInstagram size={50} />
            </a>
            <a href="#" className=" border-none">
              <FaSquareXTwitter size={50} />
            </a>
            <a href="#" className=" border-none">
              <FaLinkedin size={50} />
            </a>
            <a href="#" className=" border-none">
              <IoMdMail size={60} />
            </a>
          </div>
        </section>
        <section className="my-12">
          <div className="container"></div>
        </section>
      </div>
      <Footer5 />
    </div>
  );
};

export default page;
