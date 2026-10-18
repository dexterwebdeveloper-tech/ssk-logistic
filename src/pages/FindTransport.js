import React from "react";

const FindTransport = () => {
  return (
    <section className="find-transport">

      <div
        className="find-transport__shape-bg"
        style={{
          backgroundImage:
            "url(/images/shapes/find-transport-shape-bg.png)",
        }}
      ></div>


      <div className="container">

        <div className="find-transport__inner">


          <div className="find-transport__title-box">

            <h3 className="find-transport__title">
              Looking for the Best
              <br />
              logistics Transport Service?
            </h3>

          </div>



          <div className="find-transport__btn-and-call">


            <div className="find-transport__call-us">

              <div className="icon">
                <span className="icon-phone-call"></span>
              </div>


              <div className="content">

                <span>Call Us Free</span>

                <p>
                  <a href="tel:+9993256589">
                    +999 325 6589
                  </a>
                </p>

              </div>

            </div>



            <div className="find-transport__btn-box">

              <a href="/contact" className="thm-btn">
                Get a Quote

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

export default FindTransport;