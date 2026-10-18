import React from "react";

const ContactOne = () => {
  return (
    <section className="contact-one" id="contact">

      <div
        className="contact-one__shape-bg"
        style={{
          backgroundImage:
            "url(/images/shapes/contact-one-shape-bg.png)",
        }}
      ></div>

      <div
        className="contact-one__bg-img"
        style={{
          backgroundImage:
            "url(/images/backgrounds/contact-one-bg-img.jpg)",
        }}
      ></div>


      <div className="container">

        <div className="row">

          {/* Left Side */}
          <div className="col-xl-6 col-lg-6">

            <div className="contact-one__left">

              <div className="contact-one__video-link">

                <a
                  href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                  className="video-popup"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <div className="contact-one__video-icon">
                    <span className="fa fa-play"></span>
                    <i className="ripple"></i>
                  </div>

                </a>

              </div>

            </div>

          </div>



          {/* Right Side */}
          <div className="col-xl-6 col-lg-6">

            <div
              className="contact-one__right wow slideInRight"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >

              <div className="contact-one__content">

                <p className="contact-one__tagline">
                  GET FREE QUOTE
                </p>

                <h2 className="contact-one__title">
                  Request a Quote
                </h2>


                <form
                  className="contact-one__form contact-form-validated"
                  action="#"
                  method="POST"
                >

                  <div className="contact-one__content-box">

                    <div className="contact-one__input-box">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        required
                      />
                    </div>


                    <div className="contact-one__input-box">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>


                    <div className="contact-one__input-box">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        required
                      />
                    </div>


                    <div className="contact-one__input-box">
                      <input
                        type="text"
                        placeholder="Property Types"
                        name="subject"
                        required
                      />
                    </div>

                  </div>



                  <div className="contact-one__progress">

                    <div className="contact-one__progress-single">

                      <h4 className="contact-one__progress-title">
                        DIST (Miles):
                      </h4>


                      <div className="bar">

                        <div
                          className="bar-inner count-bar"
                          data-percent="70%"
                        >

                          <div className="count-text"></div>

                        </div>

                      </div>


                    </div>

                  </div>




                  <div className="contact-one__content-bottom">


                    <button
                      type="submit"
                      className="thm-btn"
                    >

                      Get Your Quote

                      <span>
                        <i className="icon-right-arrow"></i>
                      </span>

                    </button>



                    <div className="contact-one__content-bottom-text-box">


                      <div className="contact-one__count-box">

                        <div className="contact-one__count count-box">

                          <h3
                            className="count-text"
                            data-stop="212"
                            data-speed="1500"
                          >
                            00
                          </h3>

                          <span>
                            +
                          </span>

                        </div>


                        <p>
                          Reviews
                        </p>

                      </div>




                      <div className="contact-one__ratting">

                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>
                        <span className="fas fa-star"></span>

                      </div>


                    </div>


                  </div>


                  <div className="result"></div>


                </form>


              </div>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
};


export default ContactOne;