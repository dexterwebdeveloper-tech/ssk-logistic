import React from "react";

const Hero = () => {
  return (
    <div className="hero dark-section parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">
                  Driven By Quality And Innovation
                </span>

                <h1
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                >
                  Manufacturing strength with proven expertise
                </h1>

                <p
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  We combine robust manufacturing capabilities with years of
                  proven expertise deliver reliable, high-performance
                  solutions.
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Content Body Start */}
              <div
                className="hero-content-body wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Hero Item 1 */}
                <div className="hero-body-item">
                  <div className="icon-box">
                    <img
                      src="/images/icon-hero-body-item-1.svg"
                      alt="Precision Engineer Excellence"
                    />
                  </div>

                  <div className="hero-body-item-content">
                    <h2>Precision Engineer Excellence</h2>
                  </div>
                </div>

                {/* Hero Item 2 */}
                <div className="hero-body-item">
                  <div className="icon-box">
                    <img
                      src="/images/icon-hero-body-item-2.svg"
                      alt="Customized Industrial Solutions"
                    />
                  </div>

                  <div className="hero-body-item-content">
                    <h2>Customized Industrial Solutions</h2>
                  </div>
                </div>
              </div>
              {/* Hero Content Body End */}

              {/* Hero Content Footer Start */}
              <div
                className="hero-content-footer wow fadeInUp"
                data-wow-delay="0.6s"
              >
                {/* Button */}
                <div className="hero-btn">
                  <a
                    href="/contact"
                    className="btn-default btn-highlighted"
                  >
                    Book Consultation
                  </a>
                </div>

                {/* Video */}
                <div
                  className="video-play-button"
                  data-cursor-text="Play"
                >
                  <a
                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                    className="popup-video"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bg-effect">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    <p>Watch Our Story</p>
                  </a>
                </div>
              </div>
              {/* Hero Content Footer End */}
            </div>
            {/* Hero Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;