import React from "react";

const CtaOne = () => {
  return (
    <section className="cta-one">
      <div className="container">
        <div className="cta-one__inner">

          <div className="cta-one__img">
            <img
              src="/images/resources/cta-one-img-1.png"
              alt="CTA"
            />
          </div>

          <div className="cta-one__content">

            <div
              className="cta-one__shape-1"
              style={{
                backgroundImage:
                  "url(/images/shapes/cta-one-shape-1.png)",
              }}
            ></div>

            <div
              className="cta-one__shape-bg"
              style={{
                backgroundImage:
                  "url(/images/shapes/cta-one-shape-bg.png)",
              }}
            ></div>

            <div className="cta-one__shape-2 float-bob-y">
              <img
                src="/images/shapes/cta-one-shape-2.png"
                alt=""
              />
            </div>

            <div className="cta-one__shape-3 float-bob-x">
              <img
                src="/images/shapes/cta-one-shape-3.png"
                alt=""
              />
            </div>

            <h2>
              Recognized as One of The <br />
              Leading <span>Company!</span>
            </h2>

            <p>
              Logistic service provider company plays a pivotal <br />
              role in the global supply chain ecosystem.
            </p>

            <div className="cta-one__btn-box">
              <a href="/about" className="thm-btn">
                Read More
                <span>
                  <i className="icon-right-arrow"></i>
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaOne;