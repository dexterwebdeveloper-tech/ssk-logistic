import React from "react";
import {
  FaArrowRight,
  FaBuildingShield,
  FaCheck,
  FaCookieBite,
  FaDatabase,
  FaEnvelope,
  FaFileShield,
  FaGlobe,
  FaLock,
  FaPhone,
  FaShieldHalved,
  FaUserLock,
  FaUsers,
} from "react-icons/fa6";

import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const privacySections = [
    {
      number: "01",
      icon: <FaDatabase />,
      title: "Information We Collect",
      text:
        "We may collect information such as your name, phone number, email address, pickup and delivery locations, shipment details and other information you provide when contacting or using SSK Logistics services.",
    },
    {
      number: "02",
      icon: <FaBuildingShield />,
      title: "How We Use Your Information",
      text:
        "Information provided to us may be used to respond to enquiries, prepare quotations, arrange transportation, coordinate shipments, provide customer support and communicate important service-related information.",
    },
    {
      number: "03",
      icon: <FaUsers />,
      title: "Information Sharing",
      text:
        "Information may be shared with drivers, transport partners or service providers when reasonably necessary to complete a requested logistics service. We do not sell personal information to third parties.",
    },
    {
      number: "04",
      icon: <FaLock />,
      title: "Data Security",
      text:
        "We take reasonable measures to protect personal information from unauthorized access, misuse, alteration or disclosure. However, no internet-based system or electronic transmission can be guaranteed to be completely secure.",
    },
    {
      number: "05",
      icon: <FaCookieBite />,
      title: "Cookies & Website Data",
      text:
        "Our website may use cookies or similar technologies to support website functionality and understand general usage. Browser settings can be used to control or disable cookies, although some website features may be affected.",
    },
    {
      number: "06",
      icon: <FaGlobe />,
      title: "Third-Party Services",
      text:
        "Our website may use or link to third-party services such as WhatsApp, maps, analytics or other external platforms. Their handling of information is governed by their own privacy policies and terms.",
    },
    {
      number: "07",
      icon: <FaFileShield />,
      title: "Data Retention",
      text:
        "We may retain enquiry, booking and business records for as long as reasonably necessary for service delivery, customer support, accounting, legal obligations and legitimate business requirements.",
    },
    {
      number: "08",
      icon: <FaUserLock />,
      title: "Your Privacy Choices",
      text:
        "You may contact SSK Logistics regarding personal information you have provided to us and request appropriate correction, updating or deletion, subject to applicable legal and business record requirements.",
    },
    {
      number: "09",
      icon: <FaShieldHalved />,
      title: "Policy Updates",
      text:
        "This Privacy Policy may be updated from time to time to reflect changes in our website, services, business practices or applicable requirements. The latest version will be published on this page.",
    },
  ];

  return (
    <main className="ssk-privacy-page">

      {/* ===================================================
          HERO
      =================================================== */}
      <section className="privacy-hero">

        <div className="privacy-hero-shape shape-one"></div>
        <div className="privacy-hero-shape shape-two"></div>

        <div className="privacy-container">

          <div className="privacy-breadcrumb">
            <span>SSK LOGISTICS</span>
            <FaArrowRight />
            <span>PRIVACY POLICY</span>
          </div>

          <div className="privacy-hero-row">

            <div className="privacy-hero-content">

              <div className="privacy-label">
                <span></span>
                YOUR PRIVACY MATTERS
              </div>

              <h1>
                Privacy
                <strong> Policy</strong>
              </h1>

              <p>
                Learn how SSK Logistics collects, uses and protects
                information when you visit our website or use our
                transportation and logistics services.
              </p>

            </div>

            <div className="privacy-hero-icon">
              <FaShieldHalved />

              <span>
                <FaCheck />
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          POLICY CONTENT
      =================================================== */}
      <section className="privacy-content-section">

        <div className="privacy-container">

          <div className="privacy-layout">

            {/* =============================================
                LEFT SIDEBAR
            ============================================= */}
            <aside className="privacy-sidebar">

              <div className="privacy-sidebar-card">

                <div className="privacy-sidebar-icon">
                  <FaUserLock />
                </div>

                <span className="privacy-sidebar-small">
                  PRIVACY AT SSK
                </span>

                <h2>
                  Your information deserves responsible handling.
                </h2>

                <p>
                  We collect information only when needed for enquiries,
                  transportation services and business communication.
                </p>

                <div className="privacy-promise-list">

                  <div>
                    <span>
                      <FaCheck />
                    </span>
                    Service-related use
                  </div>

                  <div>
                    <span>
                      <FaCheck />
                    </span>
                    Responsible data handling
                  </div>

                  <div>
                    <span>
                      <FaCheck />
                    </span>
                    No sale of personal data
                  </div>

                </div>

              </div>


              {/* Contact */}
              <div className="privacy-help-card">

                <span>PRIVACY QUESTION?</span>

                <h3>Contact Our Team</h3>

                <p>
                  Have a question about your information or this policy?
                </p>

                <a href="tel:+919876543210">
                  <FaPhone />

                  <div>
                    <small>CALL US</small>
                    <strong>+91 9876543210</strong>
                  </div>
                </a>

                <a href="mailto:info@ssklogistics.com">
                  <FaEnvelope />

                  <div>
                    <small>EMAIL US</small>
                    <strong>info@ssklogistics.com</strong>
                  </div>
                </a>

              </div>

            </aside>


            {/* =============================================
                RIGHT CONTENT
            ============================================= */}
            <div className="privacy-main-content">

              {/* Intro */}
              <div className="privacy-introduction">

                <span>ABOUT THIS POLICY</span>

                <h2>
                  How we handle your information
                </h2>

                <p>
                  This Privacy Policy describes the general practices of
                  SSK Logistics regarding information submitted through
                  our website, enquiry forms, WhatsApp communication and
                  logistics service interactions.
                </p>

              </div>


              {/* Sections */}
              <div className="privacy-policy-list">

                {privacySections.map((item, index) => (
                  <article
                    className="privacy-policy-item"
                    key={index}
                  >

                    <div className="privacy-item-top">

                      <div className="privacy-item-icon">
                        {item.icon}
                      </div>

                      <div className="privacy-item-heading">

                        <span>
                          {item.number}
                        </span>

                        <h3>
                          {item.title}
                        </h3>

                      </div>

                    </div>

                    <p>
                      {item.text}
                    </p>

                  </article>
                ))}

              </div>


              {/* Bottom Note */}
              <div className="privacy-bottom-note">

                <FaShieldHalved />

                <div>
                  <span>SSK LOGISTICS</span>

                  <h3>
                    Questions about your privacy?
                  </h3>

                  <p>
                    Contact our team if you need clarification regarding
                    information submitted through our website or services.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default PrivacyPolicy;