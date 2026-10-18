import React from "react";

const FeatureOne = () => {
  return (
    <section className="feature-one">
      <div className="container">
        <div className="row">

          {/* Feature 1 */}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="feature-one__single">
              <div className="feature-one__icon">
                <span className="icon-international-shipping"></span>
              </div>

              <div className="feature-one__content">
                <h3 className="feature-one__title">
                  <a href="/emergency-transport">Export Logistics</a>
                </h3>

                <p className="feature-one__text">
                  A logistic service provider company plays a pivotal role in the
                  global logistic service.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="feature-one__single">
              <div className="feature-one__icon">
                <span className="icon-courier-services"></span>
              </div>

              <div className="feature-one__content">
                <h3 className="feature-one__title">
                  <a href="/ocean-transport">Safety And Reliability</a>
                </h3>

                <p className="feature-one__text">
                  A logistic service provider company plays a pivotal role in the
                  global logistic service.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
            data-wow-delay="500ms"
          >
            <div className="feature-one__single">
              <div className="feature-one__icon">
                <span className="icon-delivery-man"></span>
              </div>

              <div className="feature-one__content">
                <h3 className="feature-one__title">
                  <a href="/personal-delivery">Fast Delivery</a>
                </h3>

                <p className="feature-one__text">
                  A logistic service provider company plays a pivotal role in the
                  global logistic service.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
            data-wow-delay="700ms"
          >
            <div className="feature-one__single">
              <div className="feature-one__icon">
                <span className="icon-24-hours-service"></span>
              </div>

              <div className="feature-one__content">
                <h3 className="feature-one__title">
                  <a href="/contact">24/7 Support</a>
                </h3>

                <p className="feature-one__text">
                  A logistic service provider company plays a pivotal role in the
                  global logistic service.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureOne;