import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header">
        <a className="brand" href="/">
          <img
            className="default"
            alt="Nevo example image"
            src="assets/images/logo.png"
          />
          <img
            className="white"
            alt="Nevo example image"
            src="assets/images/logo.png"
          />
        </a>
        {/* <!-- Navigation--> */}
        <ul className="menu main">
          <li className="menu-item  ">
            <a className="menu-link" href="/">
              Home
            </a>
            {/* <!-- Dropdown--> */}
            {/* <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="index.html">
                  Services
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="index-freelancer.html">
                  Portfolio
                </a>
              </li>
            </ul> */}
          </li>
          <li className="menu-item">
            <a className="menu-link" href="services">
              Services
            </a>
            {/* <!-- Dropdown--> */}
            {/* <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="pages/about-studio.html">
                  Studio
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/about-freelancer.html">
                  Freelancer
                </a>
              </li>
            </ul> */}
          </li>
          {/* <li className="menu-item has-dropdown"> */}
          <li className="menu-item">
            <a className="menu-link" href="#">
              Portfolio
            </a>
            {/* <!-- Dropdown--> */}
            {/* <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="pages/elements.html">
                  Elements
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/alt-menu.html">
                  Alternative Menu
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/one-pager.html">
                  One-page website
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/error.html">
                  Error page
                </a>
              </li>
            </ul> */}
          </li>
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="#">
              Case Studies
            </a>
            <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="theirapproach">
                  Their Approach: Analyzed
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="revamp">
                  Our Take: Revamped
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item ">
            <a className="menu-link" href="about-us">
              About
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="contact">
              Contact
            </a>
          </li>
        </ul>
        {/* <!-- About section--> */}
        {/* <div className="menu about">
          <p>
            My goal is to make the digital world more beautiful. I believe that
            true craftmanship stands out with passion.
          </p>
        </div> */}
        {/* <!-- Social Navigation--> */}
        {/* <ul className="menu social">
          <li className="menu-item">
            <a className="menu-link anchor-link" href="#">
              Instagram
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link anchor-link" href="#">
              LinkedIn
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link anchor-link" href="#">
              Twitter
            </a>
          </li>
        </ul> */}
      </header>

      <div className="burger">
        <hr />
        <hr />
        <hr />
      </div>
    </>
  );
};

export default Header;
