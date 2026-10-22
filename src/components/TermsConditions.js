import React from "react";
import {
  FaFileContract,
  FaTruckFast,
  FaIndianRupeeSign,
  FaBoxOpen,
  FaClock,
  FaShieldHalved,
  FaTriangleExclamation,
  FaBan,
  FaRotateLeft,
  FaScaleBalanced,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

import "./TermsConditions.css";

const TermsConditions = () => {
  const terms = [
    {
      number: "01",
      icon: <FaFileContract />,
      title: "Service Agreement",
      text: "By booking or using transportation services from SSK Logistics, the customer agrees to these Terms & Conditions. Service availability may depend on vehicle availability, route, cargo type and operational requirements.",
    },
    {
      number: "02",
      icon: <FaBoxOpen />,
      title: "Shipment Information",
      text: "Customers must provide correct information regarding the goods, weight, quantity, dimensions, pickup location and delivery location. Any incorrect or incomplete information may affect the quotation, vehicle allocation or delivery.",
    },
    {
      number: "03",
      icon: <FaIndianRupeeSign />,
      title: "Rates & Payments",
      text: "Transportation charges are based on the agreed quotation, route, vehicle type and shipment requirements. Additional expenses such as tolls, permits, waiting charges or other applicable costs may be charged when agreed.",
    },
    {
      number: "04",
      icon: <FaTruckFast />,
      title: "Vehicle & Transportation",
      text: "SSK Logistics will arrange a suitable vehicle according to the confirmed requirement. Vehicle allocation may vary depending on availability, cargo capacity, route conditions and operational requirements.",
    },
    {
      number: "05",
      icon: <FaClock />,
      title: "Pickup & Delivery",
      text: "We aim to maintain timely pickup and delivery. However, delivery times may be affected by traffic, weather, road restrictions, vehicle issues, government regulations or other circumstances beyond reasonable control.",
    },
    {
      number: "06",
      icon: <FaShieldHalved />,
      title: "Goods & Packaging",
      text: "Customers are responsible for ensuring that goods are packed appropriately for transportation unless packing services have been separately agreed. Fragile or special cargo requirements should be communicated before booking.",
    },
    {
      number: "07",
      icon: <FaBan />,
      title: "Restricted Goods",
      text: "Illegal, hazardous, prohibited or undeclared goods will not be accepted for transportation. Customers must disclose any material requiring special permits, handling procedures or regulatory compliance before dispatch.",
    },
    {
      number: "08",
      icon: <FaTriangleExclamation />,
      title: "Loss or Damage",
      text: "Any visible shortage or damage should be reported promptly with supporting documents and photographs where applicable. Liability will be considered according to the agreed service terms and applicable law.",
    },
    {
      number: "09",
      icon: <FaRotateLeft />,
      title: "Cancellation",
      text: "Cancellation or changes after vehicle confirmation may be subject to charges depending on vehicle deployment, distance travelled, waiting time and other expenses already incurred.",
    },
    {
      number: "10",
      icon: <FaScaleBalanced />,
      title: "Applicable Terms",
      text: "These terms may be updated when required to reflect changes in our services, business practices or applicable requirements. Continued use of our services will be subject to the current terms published on this website.",
    },
  ];

  return (
    <main className="ssk-terms-page">

      {/* =====================================
          HERO
      ====================================== */}
      <section className="ssk-terms-hero">

        <div className="terms-hero-decoration terms-circle-one"></div>
        <div className="terms-hero-decoration terms-circle-two"></div>

        <div className="terms-container">

          <div className="terms-breadcrumb">
            <span>SSK LOGISTICS</span>
            <FaArrowRight />
            <span>TERMS &amp; CONDITIONS</span>
          </div>

          <div className="terms-hero-content">

            <div>

              <div className="terms-label">
                <span></span>
                LEGAL INFORMATION
              </div>

              <h1>
                Terms &amp;
                <strong> Conditions</strong>
              </h1>

              <p>
                Please review the terms governing transportation,
                bookings and logistics services provided by SSK Logistics.
              </p>

            </div>

            <div className="terms-hero-icon">
              <FaFileContract />
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          CONTENT
      ====================================== */}
      <section className="ssk-terms-content">

        <div className="terms-container">

          {/* Intro */}
          <div className="terms-intro">

            <div className="terms-intro-icon">
              <FaCheck />
            </div>

            <div>
              <span>PLEASE READ CAREFULLY</span>

              <p>
                These Terms &amp; Conditions explain the general conditions
                applicable when you enquire about, book or use transportation
                and logistics services offered by SSK Logistics.
              </p>
            </div>

          </div>


          {/* Terms */}
          <div className="terms-list">

            {terms.map((term, index) => (
              <article
                className="terms-item"
                key={index}
              >

                <div className="terms-number">
                  {term.number}
                </div>

                <div className="terms-item-icon">
                  {term.icon}
                </div>

                <div className="terms-item-content">

                  <h2>{term.title}</h2>

                  <p>{term.text}</p>

                </div>

              </article>
            ))}

          </div>


          {/* =====================================
              CONTACT BOX
          ====================================== */}
          <div className="terms-contact-box">

            <div className="terms-contact-left">

              <div className="terms-contact-icon">
                <FaFileContract />
              </div>

              <div>
                <span>NEED CLARIFICATION?</span>

                <h3>
                  Have questions about our terms?
                </h3>

                <p>
                  Contact our team for assistance regarding your
                  transportation or logistics requirement.
                </p>
              </div>

            </div>


            <div className="terms-contact-actions">

              <a href="tel:+918956581790">
                <FaPhone />

                <div>
                  <small>CALL US</small>
                  <strong>+91 8956581790</strong>
                </div>
              </a>

              <a href="mailto:info@ssklogistics.in">
                <FaEnvelope />

                <div>
                  <small>EMAIL US</small>
                  <strong>info@ssklogistics.in</strong>
                </div>
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default TermsConditions;