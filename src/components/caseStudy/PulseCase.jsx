import Image from 'next/image';
import React from 'react';

const PulseCase = () => {
  return (
    <div className="container">
      <div>
        <div className="w-full bg-socialpeach h-56 lg:mx-5">
          <Image
            src={'/assets/images/caseStudy/12.jpg'}
            width={1000}
            height={500}
            alt="case study"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-wrap tracking-wide md:p-4">
            {' '}
            PULSE CANDY LAUNCHES AI MICROSITE TO CREATE CUSTOM AI GENERATED
            IMAGES OF BAPPA
          </h1>

          <h4 className="md:px-4 md:text-2xl text-xl">
            {' '}
            Pulse Candy’s Ganesh Mahotsav campaign merges the traditional
            festival of Ganesh Chaturthi with AI technology, offering a an
            interactive experience for devotees.
          </h4>
          <div className="lg:flex md:px-4">
            <div className="lg:w-[250px] xl:w-[350px] bg-socialpeach md:mx-4">
              <Image
                src={'/assets/images/caseStudy/12.jpg'}
                width={1000}
                height={500}
                alt="caseStudy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-5 lg:py-0 lg:text-end flex-1 lg:pl-8">
              <p className="text-sm font-semibold">
                Pulse Candy launched its campaign Pulse Ganesh Mahotsav, a
                celebration that combines the essence of Ganesh Chaturthi with
                emerging AI technologies
              </p>
              <p className="text-sm  md:text-xs text-socialred">
                {' '}
                In order to enhance brand awareness during this Ganesh
                Chaturthi, the brand has collaborated with Ganpati pandals such
                as 'Lalbaugcha Raja' in Mumbai and others like 'Tulsi Bagh
                Mandal, Nashikcha Raja, Yaadgar Ganesh Pandal (Sambhaji Cha
                Raja) and Mecosabagh Servajanik Ganesh Utsav Mandal' in Pune,
                Nasik, Aurangabad, and Nagpur respectively. To capture the
                spirit of the festival and engage the audience, Pulse Candy has
                introduced the concept of 'Meri Bhakti Mere Bappa.' Drawing a
                parallel between the multiple avatars of Ganesha and the variety
                of flavours offered by Pulse Candy, this concept uses AI
                technology to bring devotees' imagined visualisations of lord
                Ganesha to life.
              </p>
              <p className="text-sm md:text-xs text-socialblack">
                At the Pulse 'Ganesh Pandal', devotees will have the opportunity
                to interact with AI through a tablet. By describing their vision
                of Ganesha, the system will generate a customized visual of
                Ganesha, subtly integrating Pulse candy. This personalized image
                will then be projected on a large screen at the pandal, allowing
                everyone to witness the unique creation.
              </p>
            </div>
          </div>

          <div className="lg:flex md:p-4 ">
            <div className="lg:w-[350px] xl:w-[500px] bg-socialpeach mx-4 lg:order-2">
              <Image
                src={'/assets/images/caseStudy/12.jpg'}
                width={1000}
                height={500}
                alt="caseStudy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-justify md:text-center flex-1 py-3 lg:py-0  lg:order-1">
              <p className="text-sm md:text-xs font-semibold text-socialred">
                {' '}
                In order to enhance brand awareness during this Ganesh
                Chaturthi, the brand has collaborated with Ganpati pandals such
                as 'Lalbaugcha Raja' in Mumbai and others like 'Tulsi Bagh
                Mandal, Nashikcha Raja, Yaadgar Ganesh Pandal (Sambhaji Cha
                Raja) and Mecosabagh Servajanik Ganesh Utsav Mandal' in Pune,
                Nasik, Aurangabad, and Nagpur respectively. To capture the
                spirit of the festival and engage the audience, Pulse Candy has
                introduced the concept of 'Meri Bhakti Mere Bappa.' Drawing a
                parallel between the multiple avatars of Ganesha and the variety
                of flavours offered by Pulse Candy, this concept uses AI
                technology to bring devotees' imagined visualisations of lord
                Ganesha to life.
              </p>
              <p className="text-sm md:text-xs font-semibold text-socialred">
                To extend this experience beyond the physical pandals, Pulse
                Candy launched a contest on social media along with an AI
                microsite. This digital platform will enable users to create
                AI-generated images of their beloved Ganesh idols, which the
                audience can share on their social media & WhatsApp as festive
                greetings and stand a chance to win prizes. With the digital
                integration brand ensures that the festive spirit reaches
                devotees across the country, even those who can't visit the
                famous pandals in Mumbai.
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 md:py-0 text-center md:text-end md:pr-8">
          <a href="" className="bg-socialpeach p-2">
            explore more case studies--&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default PulseCase;
