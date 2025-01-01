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
        <section className="md:p-4 ">
          <div className="container">
            <div className="aboutusContainer">
              <div className="flex-1">
                <div className="flex-1 object-cover overflow-hidden">
                  <Image
                    src={'/assets/images/about/7.jpg'}
                    alt="about image"
                    width={1000}
                    height={400}
                  />
                </div>
              </div>
              <div className="flex-1 aboutUs-2">
                <div className="flex-1">
                  <h5 className="text-center font-bold text-2xl">
                    Think of Us as Your Brandʼs Creative Netflix
                  </h5>

                  <p className="text-sm">
                    Weʼre the binge-worthy series your brand deserves—the
                    creators of campaigns that keep your audience glued to the
                    screen, episode after episode.
                  </p>
                  <p className="text-sm">
                    With us, your brandʼs story isnʼt just another title in the
                    mix. Itʼs the one that sparks conversations, goes viral, and
                    stays top-of-mind. From plot twists in your strategy to
                    blockbuster visuals, weʼre here to turn your brand into an
                    unforgettable hit.
                  </p>
                  <p className="text-sm">
                    Weʼre your creative co-conspirators, your brandʼs biggest
                    cheerleaders, and the ones who will always ask, “But what if
                    we tried this?ˮ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="md:p-4 ">
          <div className="container ">
            <h4 className="font-bold text-center py-3">
              Our Journey: A Visual Map
            </h4>
            <Image
              src={'/assets/images/about/journey.png'}
              alt="about image"
              width={1000}
              height={600}
              className="mx-auto"
            />
          </div>
        </section>

        <section className="md:p-4 ">
          <div className="container  lg:py-5">
            <h5 className="font-bold py-3">
              Before Social Canvas, There Was a Pilot Episode
            </h5>

            <p className="text-base my-2">
              Every great series starts with an idea. Ours began in 2019 with
              one person, one laptop, and one goal: to craft stories that
              connect. Hi, Iʼm Ritika—a freelancer back then, testing out
              Instagram grids and pulling all-nighters.
            </p>
            <p className="text-base m-0">
              Every late-night brainstorm felt like writing a script:
              unpredictable, exciting, and full of possibilities. Those early
              days became the pilot episode of Social Canvas, and by 2023, we
              premiered as a full-fledged agency with a team of dreamers and
              doers. Together, weʼre building your brandʼs next season of
              success.
            </p>
          </div>
        </section>

        <section className="md:p-4 ">
          <div className="container">
            <h4 className="font-bold text-center py-3">
              Our Logo: More Than Meets the Eye
            </h4>
            <Image
              src={'/assets/images/about/logoDecoded.png'}
              alt="about image"
              width={1000}
              height={600}
              className="mx-auto"
            />
            <p className="mb-0 font-semibold">
              Our logo isnʼt just a design—itʼs a story.
            </p>
            <p className="my-1">
              {' '}
              Every time you see our logo, think of it as a promise: to take
              your brand from blank canvas to bold masterpiece.
            </p>
          </div>
        </section>

        <section className="md:p-4 ">
          <div className="container  lg:py-5">
            <h3 className="font-bold py-3">
              What Sets Us Apart: Why Choose Us?
            </h3>

            <p className="text-base my-2">
              We get it—there are a lot of agencies out there. But hereʼs why
              Social Canvas is the one:
            </p>
            <div className="flex flex-col md:flex-row my-10 gap-5 ">
              {/* card-1 */}
              <div className="flex-1 bg-gradient-to-b from-socialpeach/40 via-socialpeach/40 via-70% to-white/80 shadow-lg text-center text-socialblack rounded-2xl p-3 lg:skew-y-6 hover:skew-y-0 transition-all duration-300 ease-in-out">
                <h6 className="font-semibold  p-4">
                  Weʼre Your Creative Partners (With Extra Sauce)
                </h6>

                <em className="text-base ">
                  "Yes, weʼll stick to the contract. But weʼll also stick around
                  when you need someone to brainstorm at midnight."
                </em>

                <p className="text-base ">
                  Whether itʼs a last-minute campaign tweak or helping you
                  pre-launch a brand, we donʼt just deliver what you asked
                  for—we go beyond, offering ideas and solutions you didnʼt even
                  know you needed.
                </p>
              </div>
              {/* card-2 */}
              <div className="flex-1 bg-gradient-to-b from-socialpeach/40 via-socialpeach/40 via-70% to-white/80 shadow-lg text-center text-socialblack md:relative rounded-2xl p-3 lg:top-5  hover:top-0 transition-all duration-300 ease-in-out">
                <h6 className="font-semibold  p-4">
                  {' '}
                  We Donʼt Do Cookie-Cutters
                </h6>

                <em className="text-base ">
                  "Your brand is not a template. So why should your strategy
                  be?"
                </em>

                <p className="text-base ">
                  Every project we take on is tailored to your brandʼs unique
                  story, tone, and goals. From social media to web design, we
                  create strategies that actually work—not just ones that look
                  good.
                </p>
              </div>
              {/* card-3 */}
              <div className="flex-1 bg-gradient-to-b from-socialpeach/40 via-socialpeach/40 via-70% to-white shadow-lg text-center text-socialblack rounded-2xl p-3  lg:-skew-y-6 hover:skew-y-0 transition-all duration-300 ease-in-out">
                <h6 className="font-semibold  p-4">We Think Holistically</h6>

                <em className="text-base ">
                  "Your website isnʼt just a website; itʼs your brandʼs
                  handshake. Your social media isnʼt just posts; itʼs your
                  story."
                </em>

                <p className="text-base ">
                  Everything we create connects back to the bigger picture of
                  your brandʼs success. Weʼre not here to do one thing
                  well—weʼre here to make everything work together seamlessly.
                </p>
              </div>
            </div>
            <h5 className="font-bold py-3">
              Our Belief: Creativity with Purpose
            </h5>

            <p className="text-base my-2">
              We donʼt just make things look good. We make them work. Every
              strategy, design, and campaign is built with intention—to solve
              problems, drive engagement, and deliver measurable results.
            </p>
          </div>
        </section>

        <section className="py-4 ">
          <div className="container  py-5">
            <div className="h-[80px] md:h-auto">
              <Image
                src={'/assets/images/about/team.png'}
                alt="about image"
                width={1000}
                height={400}
                className="mx-auto object-cover object-left  w-full h-full"
              />
            </div>
            <div>
              <p className="pt-10 text-base">
                Weʼre a mix of strategists, designers, and storytellers who
                thrive on turning bold ideas into campaigns that connect. But
                more than that, weʼre people who care about your brand as much
                as you do.
                <br />
                (And yes, our brainstorming sessions are 50% wild ideas and 50%
                snacks—but hey, the wild ideas usually win.)
              </p>
            </div>
            <p className="font-semibold text-lg m-2">
              What Makes Us the “Next Episodeˮ You Canʼt Skip:
            </p>
            <ul className="md:ml-6 list-inside">
              <li className="list-disc">
                Reliable: Like your favorite comfort show, weʼre always here
                when you need us.
              </li>
              <li className="list-disc">
                Relentless: We donʼt stop until we deliver the unexpected.
              </li>
              <li className="list-disc">
                Resourceful: Think plot twist—turning challenges into your next
                big opportunity.
              </li>
            </ul>

            <p className="font-semibold text-lg mb-0">
              Your Brandʼs Trailer Is Just the Beginning
            </p>
            <p className="m-0">
              {' '}
              Letʼs take your brand from a promising trailer to a blockbuster
              success. Whether itʼs a gripping campaign, a scroll-stopping post,
              or a full-blown rebrand, weʼre ready to make it happen.
            </p>
            <p className="font-semibold mb-0"> [Letʼs Collaborate]</p>
            <p className="font-semibold m-0">[View Our Work]</p>
          </div>
        </section>
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
