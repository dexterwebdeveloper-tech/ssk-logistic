import React from "react";
import {
  FaTruckFast,
  FaWarehouse,
  FaRoute,
  FaBoxesStacked,
  FaMapLocationDot,
  FaClipboardCheck,
  FaArrowRightLong,
  FaLocationDot,
} from "react-icons/fa6";

import "./Expertise.css";

const expertiseData = [
  {
    icon: <FaTruckFast />,
    number: "01",
    title: "Full Truck Load Solutions",
    short: "FTL Transportation",
    description:
      "Dedicated full truck load transportation designed for businesses that need secure, direct and efficient cargo movement across multiple destinations.",
  },
  {
    icon: <FaWarehouse />,
    number: "02",
    title: "Warehouse Connectivity",
    short: "Hub-to-Hub Movement",
    description:
      "Reliable transportation connecting factories, warehouses, distribution centres and business locations through coordinated logistics operations.",
  },
  {
    icon: <FaRoute />,
    number: "03",
    title: "Multi-City Distribution",
    short: "Pan-India Network",
    description:
      "Flexible transportation support for businesses requiring regular cargo movement and distribution across cities, industrial zones and major routes.",
  },
  {
    icon: <FaBoxesStacked />,
    number: "04",
    title: "Cargo Handling Expertise",
    short: "Safe Goods Movement",
    description:
      "Professional handling practices for commercial goods, industrial cargo and packaged products with attention to safety throughout the journey.",
  },
  {
    icon: <FaMapLocationDot />,
    number: "05",
    title: "Transport Coordination",
    short: "Planned Operations",
    description:
      "Well-coordinated vehicle deployment and transport planning to support scheduled dispatches, regular requirements and business supply chains.",
  },
  {
    icon: <FaClipboardCheck />,
    number: "06",
    title: "Customized Logistics",
    short: "Business-Specific Plans",
    description:
      "Flexible logistics arrangements developed around shipment volume, routes, delivery schedules and the specific transportation needs of your business.",
  },
];

const Expertisehome = () => {
  return (

<>


     

    <section className="ssk-expertise">
      {/* Decorative background */}
      <div className="ssk-expertise-glow glow-one"></div>
      <div className="ssk-expertise-glow glow-two"></div>

      <div className="ssk-expertise-route route-one"></div>
      <div className="ssk-expertise-route route-two"></div>

      <div className="ssk-expertise-container">

        {/* =========================
            HEADING
        ========================== */}
        <div className="ssk-expertise-header">

          <div className="ssk-expertise-header-left">
            <div className="ssk-expertise-label">
              <span className="label-dot"></span>
              OUR EXPERTISE
            </div>

            <h2>
              Experience That Keeps
              <span> Business Moving.</span>
            </h2>
          </div>

          <div className="ssk-expertise-header-right">
            <p>
              From dedicated truck movement to multi-city distribution,
              SSK Logistics combines transportation experience, operational
              planning and dependable service to support modern supply chains.
            </p>

            <div className="ssk-expertise-mini-line">
              <FaLocationDot />
              <span>Reliable Logistics Across India</span>
            </div>
          </div>

        </div>

        {/* =========================
            EXPERTISE GRID
        ========================== */}
        <div className="ssk-expertise-grid">

          {expertiseData.map((item, index) => (
            <div
              className={`ssk-expertise-card ${
                index === 0 || index === 5 ? "ssk-featured-card" : ""
              }`}
              key={index}
            >

              {/* Number */}
              <span className="ssk-expertise-number">
                {item.number}
              </span>

              {/* Icon */}
              <div className="ssk-expertise-icon">
                {item.icon}
              </div>

              {/* Small category */}
              <span className="ssk-expertise-short">
                {item.short}
              </span>

              {/* Title */}
              <h3>{item.title}</h3>

              {/* Description */}
              <p>{item.description}</p>

              {/* Bottom decoration */}
              <div className="ssk-expertise-card-bottom">
                <span></span>

                <div className="ssk-expertise-arrow">
                  <FaArrowRightLong />
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* =========================
            BOTTOM STRIP
        ========================== */}
        <div className="ssk-expertise-bottom">

          <div className="ssk-expertise-bottom-title">
            <span>SSK LOGISTICS</span>

            <h3>
              Your cargo. Our responsibility.
            </h3>
          </div>

          <div className="ssk-expertise-bottom-points">
            <span>
              <i></i>
              Business Logistics
            </span>

            <span>
              <i></i>
              Industrial Transport
            </span>

            <span>
              <i></i>
              Pan-India Movement
            </span>
          </div>

          <a href="/contact-us" className="ssk-expertise-button">
            Get Logistics Support
            <FaArrowRightLong />
          </a>

        </div>

      </div>
    </section>
</>
  );
};

export default Expertisehome;