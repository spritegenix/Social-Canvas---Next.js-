import Image from 'next/image';
import React from 'react';

const processItems = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error doloribus enim ex quibusdam, officia maxime laboriosam modi animi iusto minus?',
    imageSrc: '/assets/images/category/webiste1.jpg',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error doloribus enim ex quibusdam, officia maxime laboriosam modi animi iusto minus?',
    imageSrc: '/assets/images/category/webiste1.jpg',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error doloribus enim ex quibusdam, officia maxime laboriosam modi animi iusto minus?',
    imageSrc: '/assets/images/category/webiste1.jpg',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error doloribus enim ex quibusdam, officia maxime laboriosam modi animi iusto minus?',
    imageSrc: '/assets/images/category/webiste1.jpg',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error doloribus enim ex quibusdam, officia maxime laboriosam modi animi iusto minus?',
    imageSrc: '/assets/images/category/webiste1.jpg',
  },
];

const Process = () => {
  return (
    <div className="md:relative -top-64">
      <div className="container">
        <h2 className="text-center">Our Process</h2>
        <h3 className="text-center md:text-end md:pr-20 font-semibold">
          Creative on Monday
        </h3>
        <div className="flex gap-12 justify-center flex-wrap py-4">
          {processItems.map((item, index) => (
            <div
              key={index}
              className="lighter-bg md:h-60 md:w-72 flex flex-col justify-between gap-2 md:mb-10"
            >
              <div>
                <p className="text-socialblack text-sm text-center p-3">
                  {item.text}
                </p>
              </div>
              <div className="md:w-72 md:h-44">
                <Image
                  src={item.imageSrc}
                  height={1000}
                  width={1000}
                  alt={`Process image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
