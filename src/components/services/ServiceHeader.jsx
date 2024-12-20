import Image from 'next/image';
import React from 'react';

const ServiceHeader = ({ justify, scales }) => {
  return (
    <div>
      <div className={`flex justify-${justify}`}>
        <Image
          src={'/assets/images/arrow.png'}
          width={100}
          height={100}
          alt=" SOCIAL MEDIA MARKETING"
          className={`transform -scale-x-${scales}`}
        />
      </div>
      <h3 className="text-3xl font-semibold">SOCIAL MEDIA MARKETING</h3>
    </div>
  );
};

export default ServiceHeader;
