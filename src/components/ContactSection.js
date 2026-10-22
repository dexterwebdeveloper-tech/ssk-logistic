import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  return (

<>


       <section className="page-banner">
                <div className="page-banner-container">
                    <h2>
                      CONTACT US
                    </h2>
                </div>
            </section>

    <section className="ssk-contact" id="contact">

      <div className="container">

        {/* Heading */}

        <div className="contact-heading text-center">

          <span>CONTACT US</span>

          <h2>Let's Move Your Business Forward</h2>

          <p>
            Looking for dependable logistics and transportation services?
            Our experienced team is ready to provide reliable freight,
            warehousing and supply chain solutions across India.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="row g-4">

          <div className="col-lg-3 col-md-6">

            <div className="contact-box">

              <div className="contact-icon">

                <FaPhoneAlt />

              </div>

              <h4>Call Us</h4>

              <p>+91 8956581790</p>

            </div>

          </div>

          <div className="col-lg-3 col-md-6">

            <div className="contact-box">

              <div className="contact-icon">

                <FaEnvelope />

              </div>

              <h4>Email</h4>

              <p>info@ssklogistics.in</p>

            </div>

          </div>
  <div className="col-lg-3 col-md-6">

  <div className="contact-box">

    <div className="contact-icon">

      <FaHeadset />

    </div>

    <h4>Support Email</h4>

    <p>
      support@ssklogistics.in
    </p>

  </div>

</div>
          <div className="col-lg-3 col-md-6">

            <div className="contact-box">

              <div className="contact-icon">

                <FaMapMarkerAlt />

              </div>

              <h4>Office</h4>

              <p>
                Office no. 109 first Floor, Ashoka Plaza, above dominos Pizza, Beside Hyatt Hotel, Viman Nagar, Pune- 411014
              </p>

            </div>

          </div>

      
        </div>

        {/* Bottom */}

        <div className="row align-items-center mt-5">

          <div className="col-lg-5">

            <div className="contact-left">

              <h3>Reliable Logistics Solutions Across India</h3>

              <p>
                SSK Logistics delivers professional transportation,
                Full Truck Load (FTL), Part Truck Load (PTL),
                Warehousing, Distribution and 3PL services with
                safety, speed and complete customer satisfaction.
              </p>

              <a href="tel:+918956581790" className="contact-btn">

                Contact Now

                <FaArrowRight />

              </a>

            </div>

          </div>

          <div className="col-lg-7">

            <div className="contact-map">

         

<iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11524.244536451155!2d73.912605!3d18.55978!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMzJzM1LjIiTiA3M8KwNTQnNDUuNCJF!5e1!3m2!1sen!2sus!4v1785510645625!5m2!1sen!2sus" width="100%" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>

            </div>

          </div>

        </div>

      </div>

    </section>
</>
  );
};

export default ContactSection;