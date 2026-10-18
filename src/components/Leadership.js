import React from "react";
import "./Leadership.css";

import {
  FaTruckMoving,
  FaShippingFast,
  FaArrowRight,
} from "react-icons/fa";

const Leadership = () => {
  return (
    <section className="leadership-section">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}

          <div className="col-lg-5">

            <div className="leader-image-wrapper">

              <div className="orange-circle"></div>

              <div className="blue-circle"></div>

              <img
                src="/images/founder.jpeg"
                alt="Founder"
                className="leader-image"
              />

              <div className="experience-card">

                <h2>15+</h2>

                <span>Years Experience</span>

              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="col-lg-7">

            <span className="section-tag">
              OUR LEADERSHIP
            </span>

            <h2 className="leader-title">
              Driven by Vision,
              <br />
              Powered by Trust
            </h2>

            <p className="leader-text">
              At SSK Logistics, we believe logistics is more than moving
              goods—it is about building trust, delivering commitments, and
              creating long-term relationships. Our experienced team ensures
              every shipment reaches safely, efficiently and on time while
              maintaining the highest standards of professionalism and
              customer satisfaction.
            </p>

            <div className="row g-4 mt-2">

              {/* Vision */}

              <div className="col-md-6">

                <div className="info-card">

                  <div className="icon orange-bg">

                    <FaTruckMoving />

                  </div>

                  <h4>Our Vision</h4>

                  <p>
                    To become India's most trusted logistics company by
                    providing innovative, reliable and technology-driven
                    transportation solutions.
                  </p>

                </div>

              </div>

              {/* Mission */}

              <div className="col-md-6">

                <div className="info-card">

                  <div className="icon blue-bg">

                    <FaShippingFast />

                  </div>

                  <h4>Our Mission</h4>

                  <p>
                    Deliver safe, timely and cost-effective logistics
                    solutions while building lasting relationships through
                    service excellence and operational efficiency.
                  </p>

                </div>

              </div>

            </div>

            <div className="leader-footer">

              <div>

                <h3>Mr. Ritesh Bhatiya</h3>

                <span>Founder & Managing Director</span>

              </div>

           

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Leadership;