import Header from '@/components/Header';
import Image from 'next/image';
import img from 'next/image';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        {/* <!-- Header--> */}
        <Header />
        <div className="content">
          <section className="nevo-slider halfscreen">
            <div className="slides">
              <div className="slide color-bg-2">
                {/* <img
                  className="background"
                  src="assets/images/backgrounds/5.png"
                /> */}
                <div className="container">
                  <div className="grid gap-4 vcenter">
                    <div className="inner">
                      <h1 className="!text-6xl">
                        Social-<span className="text-socialred">first</span>,
                        <br /> creatively{' '}
                        <span className="text-socialred">sharp</span>, and{' '}
                        <br />
                        performance-
                        <span className="text-socialred">obsessed</span>
                      </h1>
                      <a
                        className="button primary"
                        href="pages/portfolio-random-space.html"
                      >
                        Book a Strategy Call
                      </a>
                      <a
                        className="button primary"
                        href="pages/portfolio-random-space.html"
                      >
                        Browse Our Services
                      </a>
                    </div>
                    <div className="w-80">
                      <img src="assets/images/phone.png" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="slide light-text background-zoom">
                <img
                  className="background"
                  src="assets/images/backgrounds/4.jpg"
                />
                <div className="container">
                  <div className="grid vcenter">
                    <div className="inner">
                      <h1 className="animated-text">Projects.</h1>
                      <h4>We nail them.</h4>
                      <a
                        className="button tertiairy"
                        href="pages/portfolio-random-space.html"
                      >
                        View work
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="slide light-text black-bg">
                <div className="background">
                  <video
                    className="opacity-5"
                    loop
                    poster="assets/videos/video_01.jpg"
                  >
                    <source src="assets/videos/video_01.mp4" type="video/mp4" />
                    <source
                      src="assets/videos/video_01.webm"
                      type="video/webm"
                    />
                  </video>
                </div>
                <div className="container">
                  <div className="grid center text-center">
                    <div className="inner">
                      <h4>No audience?</h4>
                      <h1 className="animated-text">We hear you.</h1>
                      <a className="button tertiairy" href="pages/contact.html">
                        Get in touch
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </section>

          {/* section 2 start */}

          <section className="section-size-2 lighter-bg">
            <div className="container">
              <div className="grid">
                <div className="column-12 text-center text-left-mobile animated-text">
                  <h2 className="text-socialblack">It&apos;s true.</h2>
                  <p className="flex gap-5 justify-center">
                    <span>Pause</span>
                    <span>
                      {' '}
                      <Image
                        src="/assets/images/brands/final-logo.png"
                        alt="small-logo"
                        width={30}
                        height={30}
                      />
                    </span>
                    <span>Rethink</span>
                    <span>
                      {' '}
                      <Image
                        src="/assets/images/brands/final-logo.png"
                        alt="small-logo"
                        width={30}
                        height={30}
                      />
                    </span>
                    <span>Create</span>
                  </p>
                  {/* <div className="space-3"></div> */}
                </div>
              </div>
            </div>
          </section>

          {/* section 2 end */}
          <section className="section-size-1">
            <div className="container">
              <div className="grid vcenter">
                <div className="column-6">
                  <h5>Selected work</h5>
                </div>
                <div className="column-6">
                  <ul className="grid-filters text-right" data-target="grid">
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter="*"
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".social"
                      >
                        Social
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".website"
                      >
                        Website
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".marketPlace"
                      >
                        MarketPlace
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".paid"
                      >
                        Paid
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".production"
                      >
                        Production
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".customSolutions"
                      >
                        Custom Solutions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="grid masonry columns-3 columns-tablet-2"
                id="grid"
              >
                <div className="grid-sizer"></div>
                <div className="grid-item column social">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/category/social1.jpg"
                    />
                    <div className="labels">Social</div>
                    <div className="caption">
                      <div className="title">Internation Academy</div>
                      <div className="sub">Identity Design</div>
                    </div>
                  </a>
                </div>
                <div className="grid-item column website">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/category/webiste1.jpg"
                    />
                    <div className="labels">Website</div>
                    <div className="caption">
                      <div className="title">Collect</div>
                      <div className="sub">Logo selection</div>
                    </div>
                  </a>
                </div>
                <div className="grid-item column marketPlace">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/category/mm1.jpg"
                    />
                    <div className="labels">Marketing</div>
                    <div className="caption">
                      <div className="title">Untold</div>
                      <div className="sub">Branding</div>
                    </div>
                  </a>
                </div>
                <div className="grid-item column paid">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-hopscotch.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/category/paid1.jpg"
                    />
                    <div className="labels">Paid</div>
                    <div className="caption">
                      <div className="title">Sequential</div>
                      <div className="sub">Magazine</div>
                    </div>
                  </a>
                </div>
                <div className="grid-item column production">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/category/production1.jpg"
                    />
                    <div className="labels">Production</div>
                    <div className="caption">
                      <div className="title">Tropical Thunder</div>
                      <div className="sub">Photography</div>
                    </div>
                  </a>
                </div>
                <div className="grid-item column packaging customSolutions">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-harrys.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/category/custom1.jpg"
                    />
                    <div className="labels">Custom Solutions</div>
                    <div className="caption">
                      <div className="title">Harry&apos;s</div>
                      <div className="sub">Work selection</div>
                    </div>
                  </a>
                </div>
                <div className="grid-item column paid">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/category/ads1.jpg"
                    />
                    <div className="labels">branding</div>
                    <div className="caption">
                      <div className="title">Farber Law</div>
                      <div className="sub">Work selection</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section-size-2 lighter-bg">
            <div className="container">
              <div className="grid center text-center">
                <div className="column-6">
                  <p className="font-size-3 grey-text">
                    Are you into fashion, beauty, or wellness? Local or global,
                    you’re in the right spot!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-size-2 ">
            <div className="container">
              <div className="mb-4">
                <h3 className="inline-flex bg-[#c8b5b3] p-2 rounded-lg">
                  About Us
                </h3>
              </div>

              <div className="flex gap-x-20">
                <div className="flex-1 h-64 object-cover overflow-hidden">
                  <Image
                    src={'/assets/images/about/7.jpg'}
                    alt="about image"
                    width={1000}
                    height={400}
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-center font-semibold">
                    WE BLEND CREATIVE AND PERFORMANCE.
                  </h5>
                  <p className="text-sm mb-3">
                    There aren&apos;t many creative agencies that understand
                    performance and performance agencies that understand
                    creative.
                  </p>
                  <p className="font-semibold text-sm mb-3">
                    This is where we&apos;re different.
                  </p>
                  <p className="text-sm">
                    Whether we&apos;re helping to grow your Social communities,
                    deliver performance-driven Paid Media, produce social-first
                    Creative or Influencer campaigns - we craft strategies based
                    on your brand, business, and goals, all backed by data and
                    insight.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-20 mt-5">
                <div className="flex-1">
                  <h5 className="text-center font-semibold text-sm">
                    WHERE CREATIVITY MEETS PERFORMANCE.
                  </h5>
                  <p className="text-xs mb-3">
                    At Social Canvas, we don’t just create content; we create
                    impact. By combining creativity with data-backed strategies,
                    we ensure every campaign not only captures attention but
                    also delivers measurable results where it matters most.
                  </p>
                  <p className="font-semibold text-xs mb-3">
                    How we stand out:
                  </p>
                  <ul className="list-disc pl-5 text-xs space-y-2">
                    <li>
                      <strong>Data-Driven Creativity:</strong> Every decision we
                      make is based on real insights to ensure content resonates
                      and performs.
                    </li>
                    <li>
                      <strong>Platform Expertise:</strong> From Instagram to
                      Amazon, we’ve mastered the art of engaging your audience
                      across all channels.
                    </li>
                    <li>
                      <strong>Global Perspective, Local Execution:</strong> With
                      international experience, we craft strategies tailored to
                      your unique market needs.
                    </li>
                    <li>
                      <strong>Seamless Delivery:</strong> We handle
                      everything—from ideation to execution—so you can focus on
                      scaling your business while we focus on delivering
                      standout work.
                    </li>
                  </ul>
                </div>

                <div className="flex-1 h-64 object-cover overflow-hidden">
                  <Image
                    src={'/assets/images/about/8.jpg'}
                    alt="about image"
                    width={1000}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section-size-2 black-bg light-text" id="team">
            <div className="container">
              <div className="grid">
                <div className="column-12 text-center animated-text">
                  <h5 className="grey-text">Your project</h5>
                  <h2>In the best possible hands</h2>
                  <div className="space-3"></div>
                </div>
              </div>
            </div>
            <div className="container pad-3">
              <div className="grid masonry columns-3">
                <div className="grid-item column undefined">
                  <div className="thumb">
                    <img
                      alt="Nevo example image"
                      src="assets/images/team/1.jpg"
                    />
                    <ul className="labels">
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Behance
                        </a>
                      </li>
                    </ul>
                    <div className="caption">
                      <h5 className="title">Herald Johnson</h5>
                      <h6 className="sub">Backend</h6>
                    </div>
                  </div>
                </div>
                <div className="grid-item column undefined">
                  <div className="thumb">
                    <img
                      alt="Nevo example image"
                      src="assets/images/team/1b.jpg"
                    />
                    <ul className="labels">
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Behance
                        </a>
                      </li>
                    </ul>
                    <div className="caption">
                      <h5 className="title">Jake Thompson</h5>
                      <h6 className="sub">UX Design</h6>
                    </div>
                  </div>
                </div>
                <div className="grid-item column undefined">
                  <div className="thumb">
                    <img
                      alt="Nevo example image"
                      src="assets/images/team/2.jpg"
                    />
                    <ul className="labels">
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Behance
                        </a>
                      </li>
                    </ul>
                    <div className="caption">
                      <h5 className="title">Tobias Dupré</h5>
                      <h6 className="sub">Illustration</h6>
                    </div>
                  </div>
                </div>
                <div className="grid-item column undefined">
                  <div className="thumb">
                    <img
                      alt="Nevo example image"
                      src="assets/images/team/2b.jpg"
                    />
                    <ul className="labels">
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Behance
                        </a>
                      </li>
                    </ul>
                    <div className="caption">
                      <h5 className="title">Liam Kim</h5>
                      <h6 className="sub">Frontend</h6>
                    </div>
                  </div>
                </div>
                <div className="grid-item column undefined">
                  <div className="thumb">
                    <img
                      alt="Nevo example image"
                      src="assets/images/team/3b.jpg"
                    />
                    <ul className="labels">
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Behance
                        </a>
                      </li>
                    </ul>
                    <div className="caption">
                      <h5 className="title">Ronald Duncan</h5>
                      <h6 className="sub">Photography</h6>
                    </div>
                  </div>
                </div>
                <div className="grid-item column undefined">
                  <div className="thumb">
                    <img
                      alt="Nevo example image"
                      src="assets/images/team/3.jpg"
                    />
                    <ul className="labels">
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="button anchor-link primary" href="#">
                          Behance
                        </a>
                      </li>
                    </ul>
                    <div className="caption">
                      <h5 className="title">Lin Becker</h5>
                      <h6 className="sub">Marketing</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="space-3"></div>
              <div className="grid">
                <div className="column-3 centered text-center animated grey-text">
                  <p>
                    We&apos;re a team of skilled individuals, always striving
                    for the best solution. We think big, and make clients
                    successful.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-size-2 lighter-bg">
            <div className="container">
              <div className="grid animated">
                <div className="column-3 column-tablet-6 column-mobile-12">
                  <h5>Interviews</h5>
                  <ul className="list">
                    <li>The New York Times</li>
                    <li>Boston Herald</li>
                    <li>Bloomberg</li>
                    <li>Computer Science</li>
                  </ul>
                </div>
                <div className="column-3 column-tablet-6 column-mobile-12">
                  <h5>Awards</h5>
                  <ul className="list">
                    <li>Red Dot Award 2018</li>
                    <li>Golden Design 2017</li>
                    <li>Red Dot Award 2017</li>
                    <li>Rams Winner 2016</li>
                  </ul>
                </div>
                <div className="column-3 column-tablet-6 column-mobile-12">
                  <h5>Publications</h5>
                  <ul className="list">
                    <li>The New York Times</li>
                    <li>Digital Mag</li>
                    <li>Online.com</li>
                    <li>Digital Heroes</li>
                  </ul>
                </div>
                <div className="column-3 column-tablet-6 column-mobile-12">
                  <h5>Nominations</h5>
                  <ul className="list">
                    <li>Red Dot Award 2018</li>
                    <li>Golden Design Nominee</li>
                    <li>Red Dot Award 2017</li>
                    <li>Rams Winner 2016</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="section-size-2">
            <div className="container">
              <div className="grid">
                <div className="column text-center centered text-left-mobile">
                  <h5 className="animated-text">The folks we work with</h5>
                  <div className="space-2"></div>
                </div>
              </div>
            </div>
            <div className="container width-5">
              <div className="grid columns-5 columns-mobile-2 centered animated">
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/1.png"
                  />
                </div>
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/2.png"
                  />
                </div>
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/3.png"
                  />
                </div>
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/4.png"
                  />
                </div>
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/5.png"
                  />
                </div>
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/6.png"
                  />
                </div>
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/7.png"
                  />
                </div>
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/10.png"
                  />
                </div>
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/9.png"
                  />
                </div>
                <div className="column image pad-1">
                  <img
                    alt="Nevo example image"
                    src="assets/images/brands/8.png"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- Footer--> */}
        <footer className="footer section-size-1 border-top">
          <a
            className="button primary"
            href="https://themeforest.net/item/nevo-creative-pro-agency-studio-template/22853378"
            target="_blank"
          >
            Buy Nevo
          </a>
          <div className="font-size-1">
            {' '}
            <span>Built by </span>
            <span>
              {' '}
              <a href="https://themevillain.com" target="_blank">
                ThemeVillain
              </a>
            </span>
            <div>&copy; 2019</div>
          </div>
        </footer>
      </div>
    </>
  );
}
