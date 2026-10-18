import React from "react";

const WhyChooseTwo = () => {
  return (
    <section className="why-choose-two">

      <div
        className="why-choose-two__pattern"
        style={{
          backgroundImage:
            "url(/images/shapes/why-choose-two-pattern.png)",
        }}
      ></div>


      <div className="why-choose-two__bg-box">
        <div
          className="why-choose-two__shape-bg"
          style={{
            backgroundImage:
              "url(/images/shapes/why-choose-two-shpae-bg.png)",
          }}
        ></div>
      </div>


      <div className="why-choose-two__img reveal">
        <img
          src="/images/resources/why-choose-two-img-1.png"
          alt="Logistics"
        />
      </div>


      <div className="why-choose-two__client-box">

        <ul className="why-choose-two__review-list">

          {[
            "why-choose-two-review-img-1-1.jpg",
            "why-choose-two-review-img-1-2.jpg",
            "why-choose-two-review-img-1-3.jpg",
            "why-choose-two-review-img-1-4.jpg",
          ].map((img, index) => (
            <li key={index}>
              <div className="why-choose-two__review-img">
                <img
                  src={`/images/resources/${img}`}
                  alt="Client"
                />
              </div>
            </li>
          ))}

        </ul>


        <div className="why-choose-two__client-content">

          <div className="why-choose-two__client-count">
            <h3 className="odometer" data-count="2500">
              00
            </h3>
            <span>+</span>
          </div>

          <p className="why-choose-two__client-text">
            Happy Clients
          </p>

        </div>

      </div>



      <div className="container">

        <div className="row">

          <div className="col-xl-8">

            <div className="why-choose-two__left">


              <div className="why-choose-two__title-box">

                <div className="section-title text-left sec-title-animation animation-style1">

                  <div className="section-title__tagline-box">

                    <span className="section-title__tagline-border"></span>

                    <div className="section-title__shape-1">
                      <i className="fas fa-plane"></i>
                    </div>


                    <h6 className="section-title__tagline">
                      Why Choose us
                    </h6>


                    <span className="section-title__tagline-border"></span>


                    <div className="section-title__shape-2">
                      <i className="fas fa-plane"></i>
                    </div>

                  </div>


                  <h3 className="section-title__title title-animation">
                    Reason For Choosing
                    <span> Logistics Solution!</span>
                  </h3>


                </div>


                <p className="why-choose-two__text">
                  A logistic service provider company plays a pivotal role in
                  the global supply chain ecosystem by efficiently managing the
                  movement of goods from point of origin to final destination.
                  These companies offer a diverse range.
                </p>

              </div>




              <div className="why-choose-two__point-box">


                <ul className="why-choose-two__point">

                  <FeatureItem
                    icon="icon-international-shipping"
                    title={
                      <>
                        Global Logistics <br /> Operation
                      </>
                    }
                  />


                  <FeatureItem
                    icon="icon-professional-services"
                    title={
                      <>
                        Professional Logistics <br /> Management
                      </>
                    }
                  />

                </ul>



                <ul className="why-choose-two__point why-choose-two__point--two">


                  <FeatureItem
                    icon="icon-protection"
                    title={
                      <>
                        Safety & Security <br /> Delivery
                      </>
                    }
                  />


                  <FeatureItem
                    icon="icon-tracking"
                    title={
                      <>
                        Real Time location <br /> Tracking
                      </>
                    }
                  />

                </ul>


              </div>



              <div className="why-choose-two__btn-box">

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

      </div>


    </section>
  );
};



const FeatureItem = ({ icon, title }) => {
  return (
    <li>

      <div className="why-choose-two__icon">
        <span className={icon}></span>
      </div>


      <div className="why-choose-two__content">

        <h4>{title}</h4>

        <p>
          A logistic service provider company plays a role in the global chain
        </p>

      </div>

    </li>
  );
};


export default WhyChooseTwo;