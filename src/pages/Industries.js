import React from "react";
import {
  FaPills,
  FaMicrochip,
  FaCartShopping,
  FaCouch,
  FaIndustry,
  FaCarSide,
  FaGears,
  FaBuilding,
  FaShirt,
  FaBoxOpen,
  FaWheatAwn,
  FaTruckRampBox,
} from "react-icons/fa6";

import "./Industries.css";

const Industries = () => {
  const industries = [
    {
      icon: <FaPills />,
      number: "01",
      title: "Pharmaceutical & Healthcare",
      description:
        "Secure and dependable logistics solutions for pharmaceutical products, healthcare supplies and medical distribution networks.",
      services: ["Secure Handling", "Timely Delivery", "Pan-India"],
    },
    {
      icon: <FaMicrochip />,
      number: "02",
      title: "Electronics & Electricals",
      description:
        "Careful transportation solutions for electronic equipment, electrical products, components and sensitive industrial goods.",
      services: ["Safe Transit", "Careful Handling", "Distribution"],
    },
    {
      icon: <FaCartShopping />,
      number: "03",
      title: "FMCG & Retail",
      description:
        "Efficient logistics support for fast-moving consumer goods, retail products and high-volume distribution requirements.",
      services: ["Bulk Movement", "Fast Delivery", "Retail Supply"],
    },
    {
      icon: <FaCouch />,
      number: "04",
      title: "Consumer Durables",
      description:
        "Reliable transportation for appliances, furniture and consumer durable products with a focus on damage-free delivery.",
      services: ["Safe Handling", "Door Delivery", "Bulk Transport"],
    },
    {
      icon: <FaIndustry />,
      number: "05",
      title: "Manufacturing",
      description:
        "End-to-end transportation support for factories, production units and manufacturing businesses across multiple locations.",
      services: ["Factory Logistics", "Raw Material", "Finished Goods"],
    },
    {
      icon: <FaCarSide />,
      number: "06",
      title: "Automotive & Auto Parts",
      description:
        "Specialized logistics solutions for automobile components, spare parts and automotive supply chains.",
      services: ["Auto Components", "Plant Supply", "Scheduled Trips"],
    },
    {
      icon: <FaGears />,
      number: "07",
      title: "Industrial Machinery",
      description:
        "Dependable transportation solutions for industrial machinery, engineering equipment and heavy components.",
      services: ["Heavy Cargo", "Equipment", "Safe Movement"],
    },
    {
      icon: <FaBuilding />,
      number: "08",
      title: "Construction Materials",
      description:
        "Transportation support for construction materials, infrastructure supplies and project-based cargo requirements.",
      services: ["Project Cargo", "Bulk Loads", "Site Delivery"],
    },
    {
      icon: <FaShirt />,
      number: "09",
      title: "Textile & Garments",
      description:
        "Flexible logistics services for textile manufacturers, garment businesses, wholesalers and retail distribution.",
      services: ["Garments", "Textiles", "Distribution"],
    },
    {
      icon: <FaBoxOpen />,
      number: "10",
      title: "E-Commerce & Warehousing",
      description:
        "Scalable transportation solutions connecting warehouses, distribution hubs and fulfilment centres efficiently.",
      services: ["Hub Transfer", "Warehouse", "Distribution"],
    },
    {
      icon: <FaWheatAwn />,
      number: "11",
      title: "Agriculture & Food Products",
      description:
        "Reliable movement of packaged food, agricultural products and related goods across regional and national routes.",
      services: ["Food Products", "Agri Goods", "Timely Transit"],
    },
    {
      icon: <FaTruckRampBox />,
      number: "12",
      title: "General Cargo",
      description:
        "Flexible cargo transportation for businesses requiring regular, part-load or full-load movement across India.",
      services: ["FTL / PTL", "Pan-India", "Business Cargo"],
    },
  ];

  return (
<>



    <section className="page-banner">
                <div className="page-banner-container">
                    <h2>
                      INDUSTRIES WE SERVE
                    </h2>
                </div>
            </section>

            
    <section className="ssk-industries">
      {/* Background design */}
      <div className="ssk-industries-bg-text">SSK</div>
      <div className="ssk-industries-shape shape-one"></div>
      <div className="ssk-industries-shape shape-two"></div>

      <div className="ssk-industries-container">

        {/* Section Heading */}
        <div className="ssk-industries-heading">
          <div className="ssk-small-title">
            <span></span>
            INDUSTRIES WE SERVE
          </div>

          <h2>
            Logistics Solutions Built for
            <br />
            <strong>Every Industry</strong>
          </h2>

          <p>
            SSK Logistics provides reliable and flexible transportation
            solutions for businesses across diverse industries, with a focus
            on safe handling, timely movement and dependable delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="ssk-industries-grid">
          {industries.map((industry, index) => (
            <div className="ssk-industry-card" key={index}>

              {/* Top */}
              <div className="ssk-card-top">
                <div className="ssk-industry-icon">
                  {industry.icon}
                </div>

                <span className="ssk-industry-number">
                  {industry.number}
                </span>
              </div>

              {/* Orange divider */}
              <div className="ssk-card-line"></div>

              {/* Content */}
              <h3>{industry.title}</h3>

              <p>{industry.description}</p>

              {/* Services */}
              <div className="ssk-industry-services">
                {industry.services.map((service, serviceIndex) => (
                  <span key={serviceIndex}>
                    <i className="fa-solid fa-check"></i>
                    {service}
                  </span>
                ))}
              </div>

              {/* Decorative arrow */}
              <div className="ssk-card-corner">
                <i className="fa-solid fa-arrow-up-right"></i>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="ssk-industries-bottom">
          <div className="ssk-bottom-icon">
            <FaTruckRampBox />
          </div>

          <div className="ssk-bottom-content">
            <span>DON'T SEE YOUR INDUSTRY?</span>
            <h3>
              We provide customized logistics solutions for your business.
            </h3>
          </div>

          <a href="/contact-us" className="ssk-industries-btn">
            Discuss Your Requirement
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </section>
</>
  );
};

export default Industries;