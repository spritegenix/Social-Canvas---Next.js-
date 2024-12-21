import Image from 'next/image';
import React from 'react';

const Approach = () => {
  return (
    <div className="container">
      <h4 className=" inline p-2 font-semibold">Their Approach: Analyzed</h4>
      <div className="md:flex flex-wrap gap-8 justify-center">
        <div className="md:mx-8 py-8 md:w-72">
          <div className={`md:w-72 md:h-72`}>
            <Image
              src={'/assets/images/category/webiste1.jpg'}
              height={1000}
              width={1000}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="flex-wrap font-semibold text-xl text-center text-socialred py-4">
              {' '}
              PULSE CANDY: (CAMPAIGN NAME/ BRAND STUDY)
            </p>
          </div>
        </div>
        <div className="md:mx-8 py-8 md:w-72 md:relative -top-20">
          <div className={`md:w-72 md:h-72`}>
            <Image
              src={'/assets/images/category/webiste1.jpg'}
              height={1000}
              width={1000}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="flex-wrap font-semibold text-xl text-center text-socialred py-4">
              {' '}
              PULSE CANDY: (CAMPAIGN NAME/ BRAND STUDY)
            </p>
          </div>
        </div>
        <div className="md:mx-8 py-8 md:w-72">
          <div className={`md:w-72 md:h-72`}>
            <Image
              src={'/assets/images/category/webiste1.jpg'}
              height={1000}
              width={1000}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="flex-wrap font-semibold text-xl text-center text-socialred py-4">
              {' '}
              PULSE CANDY: (CAMPAIGN NAME/ BRAND STUDY)
            </p>
          </div>
        </div>
        <div className="md:mx-8 py-8 md:w-72  md:relative -top-20">
          <div className={`md:w-72 md:h-72`}>
            <Image
              src={'/assets/images/category/webiste1.jpg'}
              height={1000}
              width={1000}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="flex-wrap font-semibold text-xl text-center text-socialred py-4">
              {' '}
              PULSE CANDY: (CAMPAIGN NAME/ BRAND STUDY)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
