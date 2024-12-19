import Footer5 from '@/components/footer';
import Footer from '@/components/footer';
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
                        <span className="text-socialred">sharp</span>, & <br />
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
                    <div className="w-80 flex">
                      <img
                        src="assets/images/phone.png"
                        alt="phone"
                        className="pl-10"
                      />
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

          {/* end section 2 end */}

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

          {/* About section */}
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

                <div className="flex-1  ">
                  <div className="h-64 overflow-hidden  object-cover">
                    <Image
                      src={'/assets/images/about/8.jpg'}
                      alt="about image"
                      width={700}
                      height={250}
                    />
                  </div>

                  <h6 className="text-end font-semibold">
                    {' '}
                    In-<span className="text-socialred">Depth</span> View &gt;
                  </h6>
                </div>
              </div>
            </div>
          </section>

          {/* end about section */}

          {/* case study section */}
          <section className="section-size-1 ">
            <div className="container">
              <div className="mb-4">
                <h3 className="inline-flex bg-[#c8b5b3] p-2 rounded-lg">
                  Case Study
                </h3>
              </div>

              <div className="caseStudy">
                <Image
                  src={'/assets/images/caseStudy/10.jpg/'}
                  alt="pulse"
                  width={400}
                  height={300}
                  className="object-cover image1"
                />
                <Image
                  src={'/assets/images/caseStudy/11.jpg/'}
                  alt="cred"
                  width={300}
                  height={300}
                  className="object-cover image2"
                />
                <Image
                  src={'/assets/images/caseStudy/12.jpg/'}
                  alt="ikea"
                  width={300}
                  height={300}
                  className="object-cover image3"
                />
                <Image
                  src={'/assets/images/caseStudy/13.jpg/'}
                  alt="asian paint"
                  width={300}
                  height={300}
                  className="object-cover image4"
                />
              </div>
            </div>
          </section>
          {/* end case study section */}

          {/* category filter 2 */}
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
                        data-filter=".social1"
                      >
                        Social
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".website1"
                      >
                        Website
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".marketPlace1"
                      >
                        MarketPlace
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".paid1"
                      >
                        Paid
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".production1"
                      >
                        Production
                      </a>
                    </li>
                    <li>
                      <a
                        className="button link filter"
                        href="#"
                        data-filter=".customSolutions1"
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
                <div className="grid-item column social1">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/casestudy2/social.jpg"
                    />
                    <div className="labels">Social</div>
                    <div className="caption">
                      <div className="title">Internation Academy</div>
                      <div className="sub">Identity Design</div>
                    </div>
                  </a>
                </div>
                <div className="grid-item column website1">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/casestudy2/website.webp"
                    />
                    <div className="labels">Website</div>
                    <div className="caption">
                      <div className="title">Collect</div>
                      <div className="sub">Logo selection</div>
                    </div>
                  </a>
                </div>
                <div className="grid-item column marketPlace1">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/casestudy2/mm.jpg"
                    />
                    <div className="labels">Marketing</div>
                    <div className="caption">
                      <div className="title">Untold</div>
                      <div className="sub">Branding</div>
                    </div>
                  </a>
                </div>
                {/* <div className="grid-item column paid1">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-hopscotch.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/casestudy2/paid1.jpg"
                    />
                    <div className="labels">Paid</div>
                    <div className="caption">
                      <div className="title">Sequential</div>
                      <div className="sub">Magazine</div>
                    </div>
                  </a>
                </div> */}
                <div className="grid-item column production1">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/casestudy2/production.jpg"
                    />
                    <div className="labels">Production</div>
                    <div className="caption">
                      <div className="title">Tropical Thunder</div>
                      <div className="sub">Photography</div>
                    </div>
                  </a>
                </div>
                {/* <div className="grid-item column customSolutions1">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-harrys.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/casestudy2/custom1.jpg"
                    />
                    <div className="labels">Custom Solutions</div>
                    <div className="caption">
                      <div className="title">Harry&apos;s</div>
                      <div className="sub">Work selection</div>
                    </div>
                  </a>
                </div> */}
                <div className="grid-item column paid1">
                  <a
                    className="thumb space-2 animated"
                    href="pages/project-single-logos.html"
                  >
                    <img
                      alt="Nevo example image"
                      src="assets/images/casestudy2/ads.jpg"
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
          {/* end category filter 2 */}

          {/* full image sction 7 */}
          <section className="section-size-1">
            <div className="container">
              <div className="w-full h-screen ">
                <Image
                  src={'/assets/images/section7.jpg'}
                  alt="section 7"
                  width={100}
                  height={400}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </section>
          {/* end full image section 7 */}

          {/* section 8 */}
          <section className="section-size-2 lighter-bg">
            <div className="container">
              <div className="grid center text-center">
                <div className="column-10">
                  <p className="font-size-3 font-semibold text-socialblack mb-0">
                    Leave this page with a{' '}
                    <span className="text-socialred">smile</span>. If your day
                    isn’t going great, remember—
                    <span className="text-socialred">you are enough</span>, and
                    your brand has{' '}
                    <span className="text-socialred">no limits</span> to reach!
                  </p>
                  <p className="pl-60"> --dont be a stranger</p>
                </div>
              </div>
            </div>
          </section>
          {/* end section 8 */}
        </div>
        <section className="section-size-2 lighter-bg">
          <footer className=" text-white py-50">
            {/* Container */}
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-5 space-y-8 lg:space-y-0">
              {/* Stalk Our Feed Section */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-3 text-socialblack">
                  Stalk our feed
                </h3>

                <div className="flex items-center space-x-3 mt-4 text-socialblack">
                  <a href="#" className=" p-2">
                    <span className="">Instagram</span>
                    {/* <i className="fab fa-instagram text-black"></i> */}
                  </a>
                  <a href="#" className=" p-2 ">
                    <span className="">LinkedIn</span>
                    {/* <i className="fab fa-linkedin text-black"></i> */}
                  </a>
                  <a href="#" className=" p-2 ">
                    <span className="">X </span>
                    {/* <i className="fab fa-twitter text-black"></i> */}
                  </a>
                </div>
                {/* Copyright Section */}
                <div className=" text-center py-4">
                  <p className="text-sm text-socialblack">
                    &copy; 2024. All rights reserved.
                  </p>
                </div>
              </div>

              {/* Our Services Section */}
              <div className="flex-1 text-socialblack">
                <h3 className="text-sm font-semibold uppercase mb-3">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  <li>Social</li>
                  <li>Paid</li>
                  <li>Creative</li>
                  <li>Influencer</li>
                </ul>
              </div>
              {/* Company and Connect Section */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-socialblack uppercase mb-3">
                  Company
                </h3>
                <ul className="space-y-2 mb-4 text-socialblack">
                  <li>About Us</li>
                  <li>Newsletter</li>
                  <li>Case Studies</li>
                  <li>Contact</li>
                </ul>
              </div>
              {/* Contact Section */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-socialblack uppercase mb-3">
                  Don&apos;t be a stranger
                </h3>
                <p className="mb-2 text-socialblack">+91 90412 90773</p>
                <p className="text-socialblack">
                  socialcanvasdigital@gmail.com
                </p>
              </div>
            </div>

            {/* Newsletter Section */}
            {/* <div className="mt-10 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5 py-5 space-y-4 md:space-y-0">
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <input
              type="email"
              placeholder="Your email for contact"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
            >
              Submit your inquiry now
            </button>
          </form>
        </div>
      </div> */}
          </footer>
        </section>
        {/* <!-- Footer--> */}
        {/* <footer className="footer section-size-1 border-top">
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
        </footer> */}
      </div>
    </>
  );
}
