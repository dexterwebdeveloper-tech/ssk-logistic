import React from "react";

const AboutTwo = () => {
  return (
    <section className="about-two" id="about">
      <div className="container">
        <div className="row">

          {/* Left Side */}
          <div className="col-xl-6 d-none d-md-block">
            <div
              className="about-two__left wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="about-two__img-box">

                <div className="about-two__img">
                  <img
                    src="/images/about-two-img-1.jpeg"
                    alt="SSK Logistics"
                  />
                </div>

                <div className="about-two__img-two">
                  <img
                    src="/images/about-two-img-2.jpeg"
                    alt="Logistics Service"
                  />
                </div>


                {/* Experience */}
                <div className="about-two__counter">

                  <div className="shape1">
                    <img
                      src="/images/shapes/about-two-shape-1.png"
                      alt=""
                    />
                  </div>

                  <div className="count-text-box count-box">
                    <h2 className="count-text">
                      15
                    </h2>
                    <span className="plus">+</span>
                  </div>

                  <p>
                    Years Of <br />
                    Logistics Experience
                  </p>

                </div>


                <div className="about-two__shape-2 float-bob-x">
                  <img
                    src="/images/shapes/about-two-shape-2.png"
                    alt=""
                  />
                </div>


                <div className="about-two__shape-3">
                  <img
                    src="/images/shapes/about-two-shape-3.png"
                    alt=""
                  />
                </div>


                <div className="about-two__shape-4 float-bob-y">
                  <img
                    src="/images/shapes/about-two-shape-4.png"
                    alt=""
                  />
                </div>

              </div>
            </div>
          </div>


          {/* Right Side */}
          <div className="col-xl-6">

            <div className="about-two__right">

              <div className="section-title text-left sec-title-animation animation-style2">

                <div className="section-title__tagline-box">

                  <span className="section-title__tagline-border"></span>


                  <div className="section-title__shape-1">
                    <i className="fas fa-plane"></i>
                  </div>


                  <h6 className="section-title__tagline">
                    ABOUT SSK LOGISTICS
                  </h6>


                  <span className="section-title__tagline-border"></span>


                  <div className="section-title__shape-2">
                    <i className="fas fa-plane"></i>
                  </div>

                </div>


                <h3 className="section-title__title title-animation">
                  Your Trusted Partner For{" "}
                  <span>
                    Reliable Logistics Solutions
                  </span>
                </h3>

              </div>



           <p className="leader-text">

  At SSK Logistics, we believe logistics is far more than transporting
  goods from one destination to another—it is about delivering trust,
  creating value, and building lasting relationships with every client.
  Since our journey began, we have remained committed to providing
  dependable transportation and supply chain solutions that help
  businesses operate smoothly and grow with confidence.

  <br /><br />

  With a customer-first approach, experienced professionals, and a
  modern fleet, we ensure every shipment is handled with precision,
  safety, and efficiency. 
  
  From full truckload transportation and
  industrial logistics to warehousing, distribution, and time-critical
  deliveries, our focus is always on maintaining the highest standards
  of service while meeting every commitment on time.


</p>


          





            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutTwo;