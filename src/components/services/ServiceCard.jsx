import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ content, image, imgOrder, textOrder }) => {
  return (
    <div className="lighter-bg md:h-80 md:w-72  flex flex-col gap-2">
      <div className={`md:w-72 md:h-44 md:order-${imgOrder}`}>
        <Image
          src={image}
          height={1000}
          width={1000}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`flex items-center h-40 md:h-full md:order-${textOrder}`}>
        <p className="text-socialblack text-sm text-center">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
