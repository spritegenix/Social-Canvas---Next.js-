import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ content, image, imgOrder, textOrder }) => {
  return (
    <div>
      <div className="bg-socialpeach h-80 w-72  flex flex-col gap-2">
        <div className={`w-72 h-44 order-${imgOrder}`}>
          <Image
            src={image}
            height={1000}
            width={1000}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className={` h-full order-${textOrder}`}>
          <p className="text-socialblack text-sm text-center">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
