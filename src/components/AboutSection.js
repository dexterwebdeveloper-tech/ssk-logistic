// import React from "react";
// import { Link } from "react-router-dom";

// const AboutUs = () => {
//   return (
//     <div className="about-us">
//       <div className="container">
//         <div className="row">
//           {/* Left Side */}
//           <div className="col-xl-6">
//             <div className="about-us-image-box wow fadeInUp">
//               {/* About Image */}
//               <div className="about-us-image">
//                 <figure className="image-anime">
//                   <img
//                     src="/images/about-us-image.jpg"
//                     alt="About Best Industries"
//                   />
//                 </figure>
//               </div>

//               {/* Review Box */}
//               <div className="about-us-review-box">
//                 <div className="about-us-review-box-header">
//                   <h2>
//                     <span className="counter">4.9</span>/5
//                   </h2>

//                   <span className="google-rating-star">
//                     <i className="fa-solid fa-star"></i>
//                     <i className="fa-solid fa-star"></i>
//                     <i className="fa-solid fa-star"></i>
//                     <i className="fa-solid fa-star"></i>
//                     <i className="fa-solid fa-star"></i>
//                   </span>
//                 </div>

//                 <div className="about-us-review-box-body">
//                   <div className="satisfy-client-images">
//                     <div className="satisfy-client-image">
//                       <figure className="image-anime">
//                         <img
//                           src="/images/author-1.jpg"
//                           alt="Client 1"
//                         />
//                       </figure>
//                     </div>

//                     <div className="satisfy-client-image">
//                       <figure className="image-anime">
//                         <img
//                           src="/images/author-2.jpg"
//                           alt="Client 2"
//                         />
//                       </figure>
//                     </div>

//                     <div className="satisfy-client-image">
//                       <figure className="image-anime">
//                         <img
//                           src="/images/author-3.jpg"
//                           alt="Client 3"
//                         />
//                       </figure>
//                     </div>

//                     <div className="satisfy-client-image add-more">
//                       <h2>
//                         <span className="counter">5</span>K+
//                       </h2>
//                     </div>
//                   </div>

//                   <div className="satisfy-client-content">
//                     <p>Powering Industries Worldwide</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="col-xl-6">
//             <div className="about-us-content">
//               {/* Section Title */}
//               <div className="section-title">
//                 <span className="section-sub-title wow fadeInUp">
//                   About Our Manufacturing
//                 </span>

//                 <h2
//                   className="text-anime-style-3"
//                   data-cursor="-opaque"
//                 >
//                   Commitment to excellence In every product
//                 </h2>

//                 <p
//                   className="wow fadeInUp"
//                   data-wow-delay="0.2s"
//                 >
//                   We build strong industrial foundations by combining advanced
//                   manufacturing technologies with deep technical expertise and
//                   proven processes.
//                 </p>
//               </div>

//               {/* Body */}
//               <div
//                 className="about-us-body wow fadeInUp"
//                 data-wow-delay="0.4s"
//               >
//                 <div className="about-us-body-content">
//                   <div className="about-us-body-list">
//                     <h3>
//                       Committed To Innovation And Industrial Growth
//                     </h3>

//                     <ul>
//                       <li>Advanced Technology Driven Production</li>
//                       <li>Customize Industrial Manufacture Solution</li>
//                       <li>Innovation Focus Manufacturing Approach</li>
//                     </ul>
//                   </div>

//                   <div className="about-us-btn">
//                     <Link to="/about" className="btn-default">
//                       Learn More About
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Experience */}
//                 <div className="about-experience-box">
//                   <div className="about-experience-content">
//                     <h2>
//                       <span className="counter">25</span>+
//                     </h2>

//                     <p>Years of Industry Experience</p>
//                   </div>

//                   <div className="satisfy-client-images">
//                     <div className="satisfy-client-image">
//                       <figure className="image-anime">
//                         <img
//                           src="/images/author-1.jpg"
//                           alt="Client 1"
//                         />
//                       </figure>
//                     </div>

//                     <div className="satisfy-client-image">
//                       <figure className="image-anime">
//                         <img
//                           src="/images/author-2.jpg"
//                           alt="Client 2"
//                         />
//                       </figure>
//                     </div>

//                     <div className="satisfy-client-image">
//                       <figure className="image-anime">
//                         <img
//                           src="/images/author-3.jpg"
//                           alt="Client 3"
//                         />
//                       </figure>
//                     </div>

//                     <div className="satisfy-client-image add-more">
//                       <h2>
//                         <span className="counter">5</span>K+
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Experience End */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;









import React from "react";
import {
  FaArrowRightLong,
  FaCheck,
  FaClock,
  FaHandshake,
  FaRoute,
  FaShieldHalved,
  FaTruckFast,
} from "react-icons/fa6";

import "./AboutUs.css";
import TestimonialTwo from "../pages/Testimonialabout";
import Leadership from "./Leadership";

const AboutUs = () => {
  const strengths = [
    {
      icon: <FaShieldHalved />,
      title: "Safe & Secure",
      text: "Careful handling at every stage.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Service",
      text: "Committed to timely movement.",
    },
    {
      icon: <FaHandshake />,
      title: "Customer First",
      text: "Solutions built around your needs.",
    },
    {
      icon: <FaRoute />,
      title: "Reliable Network",
      text: "Dependable logistics connectivity.",
    },
  ];

  return (
  <>
  
   <section className="page-banner">
                <div className="page-banner-container">
                    <h2>
                      About Us
                    </h2>
                </div>
            </section>

    <main className="ssk-about-page">

      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}
      <section className="ssk-about-section">

        <div className="ssk-about-bg-text">
          LOGISTICS
        </div>

        <div className="ssk-about-container">

          {/* =================================================
              LEFT IMAGE
          ================================================= */}
          <div className="ssk-about-visual">

            <div className="ssk-about-image-wrap">

              <img
                src="/images/about.jpeg"
                alt="SSK Logistics transportation and logistics services"
              />

              {/* Image Corner Decoration */}
              <div className="ssk-about-image-corner"></div>

              {/* Floating Badge */}
              <div className="ssk-about-badge">

                <div className="ssk-about-badge-icon">
                  <FaTruckFast />
                </div>

                <div>
                  <small>OUR PROMISE</small>
                  <strong>Delivered With Pride.</strong>
                </div>

              </div>

            </div>

            {/* Decorative Route */}
            <div className="ssk-about-route">

              <span></span>

              <div className="ssk-about-route-line"></div>

              <FaTruckFast />

              <div className="ssk-about-route-line"></div>

              <span></span>

            </div>

          </div>


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}
          <div className="ssk-about-content">

            <div className="ssk-about-label">
              <span></span>
              ABOUT SSK LOGISTICS
            </div>

            <h1>
              Delivering More Than
              <strong> Just Goods.</strong>
            </h1>

            <div className="ssk-about-title-line">
              <span></span>
            </div>

            <p className="ssk-about-lead">
              At SSK Logistics, we believe logistics is far more than
              transporting goods from one destination to another—it is
              about delivering trust, creating value, and building lasting
              relationships with every client.
            </p>

            <p className="ssk-about-description">
              Since our journey began, we have remained committed to
              providing dependable transportation and supply chain
              solutions that help businesses operate smoothly and grow
              with confidence.
            </p>

            <p className="ssk-about-description">
              With a customer-first approach, experienced professionals,
              and a modern fleet, we ensure every shipment is handled with
              precision, safety, and efficiency. From full truckload
              transportation and industrial logistics to warehousing,
              distribution, and time-critical deliveries, our focus is
              always on maintaining high service standards while meeting
              every commitment on time.
            </p>


            {/* ===============================================
                SMALL HIGHLIGHTS
            =============================================== */}
            <div className="ssk-about-highlights">

              <div className="ssk-about-highlight">

                <span>
                  <FaCheck />
                </span>

                <div>
                  <strong>Dependable Transportation</strong>
                  <small>
                    Reliable movement for business requirements.
                  </small>
                </div>

              </div>

              <div className="ssk-about-highlight">

                <span>
                  <FaCheck />
                </span>

                <div>
                  <strong>Business-Focused Solutions</strong>
                  <small>
                    Flexible logistics support for every requirement.
                  </small>
                </div>

              </div>

            </div>


            {/* ===============================================
                CTA
            =============================================== */}
            <div className="ssk-about-actions">

              <a
                href="/contact-us"
                className="ssk-about-primary-btn"
              >
                <span>Talk to Our Team</span>
                <FaArrowRightLong />
              </a>

              <div className="ssk-about-mini-message">

                <FaShieldHalved />

                <div>
                  <small>OUR COMMITMENT</small>
                  <strong>Safety. Reliability. Trust.</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STRENGTHS
      ===================================================== */}
      <section className="ssk-about-strength-section">

        <div className="ssk-about-container">

          <div className="ssk-about-strength-header">

            <div>
              <span>WHAT DRIVES US</span>

              <h2>
                Logistics Built Around
                <strong> Reliability.</strong>
              </h2>
            </div>

            <p>
              Every shipment is supported by responsible operations,
              clear coordination and a commitment to dependable service.
            </p>

          </div>


          <div className="ssk-about-strength-grid">

            {strengths.map((item, index) => (
              <div
                className="ssk-about-strength-card"
                key={index}
              >

                <span className="ssk-about-strength-number">
                  0{index + 1}
                </span>

                <div className="ssk-about-strength-icon">
                  {item.icon}
                </div>

                <div className="ssk-about-strength-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
    <Leadership/>

    <TestimonialTwo/>
  </>
  );
};

export default AboutUs;