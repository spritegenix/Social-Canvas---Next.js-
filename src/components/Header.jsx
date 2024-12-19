import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header">
        <a className="brand" href="index.html">
          <img
            className="default"
            alt="Nevo example image"
            src="assets/images/logo.svg"
          />
          <img
            className="white"
            alt="Nevo example image"
            src="assets/images/logo-white.svg"
          />
        </a>
        {/* <!-- Navigation--> */}
        <ul className="menu main">
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="index.html">
              Home
            </a>
            {/* <!-- Dropdown--> */}
            <ul className="dropdown-nav">
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
            </ul>
          </li>
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="pages/about-studio.html">
              Services
            </a>
            {/* <!-- Dropdown--> */}
            <ul className="dropdown-nav">
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
            </ul>
          </li>
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="pages/elements.html">
              Portfolio
            </a>
            {/* <!-- Dropdown--> */}
            <ul className="dropdown-nav">
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
            </ul>
          </li>
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="pages/portfolio-default.html">
              Case Studies
            </a>
            {/* <!-- Dropdown--> */}
            <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-default.html">
                  Default
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-lightbox.html">
                  Lightbox
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-masonry.html">
                  Masonry
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-no-space.html">
                  No-space
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="menu-link"
                  href="pages/portfolio-random-space.html"
                >
                  Random-space
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/portfolio-filters.html">
                  Filterable
                </a>
              </li>
              <li className="menu-item">
                <a
                  className="menu-link"
                  href="pages/project-single-harrys.html"
                >
                  Single Project
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item has-dropdown">
            <a className="menu-link" href="pages/blog.html">
              About
            </a>
            {/* <!-- Dropdown--> */}
            <ul className="dropdown-nav">
              <li className="menu-item">
                <a className="menu-link" href="pages/blog.html">
                  Blog
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="pages/blog-single.html">
                  Single post
                </a>
              </li>
              <li className="menu-item"></li>
            </ul>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="pages/contact.html">
              Contact
            </a>
          </li>
        </ul>
        {/* <!-- About section--> */}
        <div className="menu about">
          <p>
            My goal is to make the digital world more beautiful. I believe that
            true craftmanship stands out with passion.
          </p>
        </div>
        {/* <!-- Social Navigation--> */}
        <ul className="menu social">
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
        </ul>
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
