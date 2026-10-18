import React from "react";
import {
  FaTruckFast,
  FaUserTie,
  FaShieldHalved,
  FaLocationDot,
  FaArrowRightLong,
  FaCheck,
} from "react-icons/fa6";

import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const whyChooseData = [
    {
      icon: <FaTruckFast />,
      title: (
        <>
          Reliable Transportation <br /> Solutions
        </>
      ),
      description:
        "Dependable transportation solutions designed to move your goods safely and efficiently across multiple locations.",
    },
    {
      icon: <FaUserTie />,
      title: (
        <>
          Professional Logistics <br /> Management
        </>
      ),
      description:
        "Our experienced team coordinates every shipment carefully to provide smooth and dependable logistics operations.",
    },
    {
      icon: <FaShieldHalved />,
      title: (
        <>
          Safe & Secure <br /> Cargo Handling
        </>
      ),
      description:
        "We focus on responsible cargo handling and transportation practices to keep your goods protected throughout the journey.",
    },
    {
      icon: <FaLocationDot />,
      title: (
        <>
          Shipment Tracking & <br /> Coordination
        </>
      ),
      description:
        "Stay informed with effective shipment coordination and timely communication throughout the transportation process.",
    },
  ];

  return (
    <section className="why-choose-two">

      {/* Decorative Background */}
      <div className="why-choose-two__bg-text">
        SSK LOGISTICS
      </div>

      <div className="container">

        <div className="why-choose-two__wrapper">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="why-choose-two__left">

            {/* Section Tagline */}
            <div className="why-choose-two__tagline">

              <span className="why-choose-two__tagline-line"></span>

              <h6>
                WHY CHOOSE SSK LOGISTICS
              </h6>

            </div>


            {/* Heading */}
            <h2 className="why-choose-two__title">
              Logistics Solutions Built On
              <span> Trust & Reliability.</span>
            </h2>


            {/* Description */}
            <p className="why-choose-two__text">
              At SSK Logistics, we understand that dependable
              transportation is essential for keeping your business
              moving. Our focus is on providing safe, efficient and
              professionally managed logistics solutions tailored to
              different business requirements.
            </p>


            {/* Small Trust Points */}
            <div className="why-choose-two__trust">

              <div>
                <span>
                  <FaCheck />
                </span>

                Customer-Focused Service
              </div>

              <div>
                <span>
                  <FaCheck />
                </span>

                Professional Coordination
              </div>

            </div>


            {/* Button */}
            <div className="why-choose-two__btn-box">

              <a
                href="/about-us"
                className="why-choose-two__btn"
              >
                <span>Discover More</span>

                <div>
                  <FaArrowRightLong />
                </div>
              </a>

            </div>

          </div>


          {/* =================================================
              RIGHT FEATURES
          ================================================= */}
          <div className="why-choose-two__features">

            {whyChooseData.map((item, index) => (
              <article
                className="why-choose-two__card"
                key={index}
              >

                {/* Number */}
                <span className="why-choose-two__number">
                  0{index + 1}
                </span>


                {/* BIG WHITE ICON */}
                <div className="why-choose-two__icon">
                  {item.icon}
                </div>


                {/* Content */}
                <div className="why-choose-two__content">

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;