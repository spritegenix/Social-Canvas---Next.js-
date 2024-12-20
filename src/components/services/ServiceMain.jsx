import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceHeader from './ServiceHeader';

const ServiceMain = ({
  content,
  image,
  imgOrder,
  textOrder,
  scales,
  justify,
}) => {
  return (
    <div>
      <div className=" flex mx-auto justify-center gap-24 ">
        <div className="">
          <ServiceCard
            content={content}
            image={image}
            imgOrder={imgOrder}
            textOrder={textOrder}
          />
        </div>
        <div>
          <ServiceHeader scales={scales} justify={justify} />
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;
