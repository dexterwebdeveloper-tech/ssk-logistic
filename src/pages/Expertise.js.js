import React from "react";
import {
  FaTruckMoving,
  FaWarehouse,
  FaShippingFast,
  FaBoxes,
  FaRoute,
  FaShieldAlt,
} from "react-icons/fa";
import "./Expertise.css";

const expertise = [
  {
    icon: <FaTruckMoving />,
    title: "Nationwide Transport",
    desc: "Reliable transportation services connecting businesses across India with safe and timely deliveries.",
    color: "#ED1C24",
  },
  {
    icon: <FaBoxes />,
    title: "Supply Chain",
    desc: "Efficient logistics planning, inventory movement and end-to-end supply chain management.",
    color: "#0d6efd",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing",
    desc: "Secure storage, inventory control and distribution solutions designed for modern businesses.",
    color: "#16a34a",
  },
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    desc: "Express freight and last-mile delivery with speed, precision and real-time coordination.",
    color: "#dc2626",
  },
  {
    icon: <FaRoute />,
    title: "Route Optimization",
    desc: "Smart route planning to reduce transit time, improve efficiency and lower logistics costs.",
    color: "#7c3aed",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure",
    desc: "Professional handling, shipment monitoring and secure transportation for every delivery.",
    color: "#111827",
  },
];

const Expertise = () => {
  return (
    <section className="expertise-section" id="expertise">

      <div className="container">

        <div className="expertise-heading">

          <span>OUR EXPERTISE</span>

          <h2>Delivering Logistics Excellence Every Day</h2>

          <p>
            Combining modern technology, experienced professionals and
            customer-focused logistics solutions to keep your business
            moving without interruption.
          </p>

        </div>

        <div className="row">

          {expertise.map((item, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="expertise-card">

                <div
                  className="expertise-icon"
                  style={{ background: item.color }}
                >
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Expertise;