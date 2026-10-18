


import React from "react";
import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { IoPaperPlaneSharp } from "react-icons/io5";

const FooterTwo = () => {
  return (
    <footer className="site-footer-two">

      <div className="site-footer-two__shape-1 float-bob-x">
        <img
          src="/images/shapes/site-footer-two-shape-1.png"
          alt=""
        />
      </div>

      <div className="container">

        <div className="site-footer-two__top">

          <div className="row">

            {/* About */}

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >

              <div className="footer-widget-two__column footer-widget-two__about">

                <div className="footer-widget-two__logo">

                  <a href="/">
                    <img
                      src="/images/logo.jpg"
                      alt="SSK Logistics" className="logoo"
                    />
                  </a>

                </div>

                <p className="footer-widget-two__about-text">

                  SSK Logistics is a trusted logistics and transportation
                  company delivering reliable, safe and cost-effective
                  supply chain solutions across India. 

                </p>

                <ul className="footer-widget-two__contact list-unstyled">

                  <li>

                    <div className="icon">

                      <FaPhoneAlt />

                    </div>

                    <div className="content">

                      <h5>Phone</h5>

                      <p>

                        <a href="tel:+919876543210">
                          +91 98765 43210
                        </a>

                      </p>

                    </div>

                  </li>

                  <li>

                    <div className="icon">

                      <FaEnvelope />

                    </div>

                    <div className="content">

                      <h5>Email</h5>

                      <p>

                        <a href="mailto:info@ssklogistics.com">
                          info@ssklogistics.com
                        </a>

                      </p>

                    </div>

                  </li>

                  <li>

                    <div className="icon">

                      <FaMapMarkerAlt />

                    </div>

                    <div className="content">

                      <h5>Office</h5>

                      <p>

                        Office no. 109 first Floor, Ashoka Plaza, above dominos Pizza, Beside Hyatt Hotel, Viman Nagar, Pune- 411014


                      </p>

                    </div>

                  </li>

                </ul>
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11524.244536451155!2d73.912605!3d18.55978!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMzJzM1LjIiTiA3M8KwNTQnNDUuNCJF!5e1!3m2!1sen!2sus!4v1790784985283!5m2!1sen!2sus" width="100%" height="230"  allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>

              </div>

            </div>

            {/* Quick Links */}

            {/* <div className="col-xl-2 col-lg-6 col-md-6">

              <div className="footer-widget-two__column footer-widget-two__usefull-link">

                <div className="footer-widget-two__title-box">

                  <h3 className="footer-widget-two__title">

                    Quick Links

                  </h3>

                </div>

                <ul className="footer-widget-two__link list-unstyled">

                  <li>
                    <a href="/">Home</a>
                  </li>

                  <li>
                    <a href="/about">About Us</a>
                  </li>

                  <li>
                    <a href="/services">Services</a>
                  </li>

                  <li>
                    <a href="/clients">Clients</a>
                  </li>

                  <li>
                    <a href="/contact">Contact</a>
                  </li>

                </ul>

              </div>

            </div> */}

            {/* Services */}

            <div className="col-xl-4 col-lg-6 col-md-6">

              <div className="footer-widget-two__column footer-widget-two__services">

                <div className="footer-widget-two__title-box">

                  <h3 className="footer-widget-two__title">

                    Our Services

                  </h3>

                </div>

                <ul className="footer-widget-two__link list-unstyled">

                  {/* <li>
                    <a href="">
                      Full Truck Load (FTL)
                    </a>
                  </li>

                  <li>
                    <a href="">
                      Part Truck Load (PTL)
                    </a>
                  </li>

                  <li>
                    <a href="">
                      3PL Solutions
                    </a>
                  </li>

                  <li>
                    <a href="">
                      Warehousing & Distribution
                    </a>
                  </li>

                  <li>
                    <a href="">
                      Express & Last Mile Delivery
                    </a>
                  </li>

                  <li>
                    <a href="">
                      Sustainable & Green Logistics
                    </a>
                  </li> */}





<li className="">
  <Link to="/Logistics-Company-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Logistics Company Pune
  </Link>
</li>

<li className="">
  <Link to="/Best-Logistics-Companies-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Best Logistics Companies in Pune
  </Link>
</li>

<li className="">
  <Link to="/Top-Logistics-Companies-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Top Logistics Companies in Pune
  </Link>
</li>

<li className="">
  <Link to="/Logistics-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Logistics in Pune
  </Link>
</li>

<li className="">
  <Link to="/Transport-Company-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Transport Company in Pune
  </Link>
</li>

<li className="">
  <Link to="/Logistics-Companies-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Logistics Companies in Pune
  </Link>
</li>

<li className="">
  <Link to="/Transporters-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Transporters in Pune
  </Link>
</li>

<li className="">
  <Link to="/Pune-Transport-Office">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune Transport Office
  </Link>
</li>

<li className="">
  <Link to="/Best-Logistics-Company-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Best Logistics Company in Pune
  </Link>
</li>

<li className="">
  <Link to="/Goods-Transport-Services-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Goods Transport Services in Pune
  </Link>
</li>

<li className="">
  <Link to="/Transportation-Services-for-Industrial">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Transportation Services for Industrial
  </Link>
</li>

<li className="">
  <Link to="/Pune-Transport-Service-for-Company">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune Transport Service for Company
  </Link>
</li>

<li className="">
  <Link to="/Industrial-Transport-Company-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Industrial Transport Company in Pune
  </Link>
</li>

<li className="">
  <Link to="/Supply-Chain-Management-Company-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Supply Chain Management Company in Pune
  </Link>
</li>

<li className="">
  <Link to="/Cargo-Transportation-Company-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Cargo Transportation Company in Pune
  </Link>
</li>

<li className="">
  <Link to="/Commercial-Transportation-Services-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Commercial Transportation Services in Pune
  </Link>
</li>

<li className="">
  <Link to="/Container-Transportation-Company-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Container Transportation Company in Pune
  </Link>
</li>

<li className="">
  <Link to="/Third-Party-Logistics-Company-in-India">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Third Party Logistics Company in India
  </Link>
</li>

                

<li className="">
  <Link to="/Pune-to-Mumbai-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Mumbai Transport Service
  </Link>
</li>



                </ul>

              </div>

            </div>




                <div className="col-xl-4 col-lg-6 col-md-6">

              <div className="footer-widget-two__column footer-widget-two__services">

                <div className="footer-widget-two__title-box">

                  <h3 className="footer-widget-two__title">

                    Our Services

                  </h3>

                </div>

                <ul className="footer-widget-two__link list-unstyled">

               





<li className="">
  <Link to="/Pune-to-Bangalore-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Bangalore Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Hyderabad-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Hyderabad Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Chennai-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Chennai Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Delhi-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Delhi Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Ahmedabad-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Ahmedabad Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Surat-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Surat Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Nashik-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Nashik Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Nagpur-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Nagpur Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Kolhapur-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Kolhapur Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Goa-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Goa Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Pune-to-Indore-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Pune to Indore Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Mumbai-to-Pune-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Mumbai to Pune Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Bangalore-to-Pune-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Bangalore to Pune Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Hyderabad-to-Pune-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Hyderabad to Pune Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Chennai-to-Pune-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Chennai to Pune Transport Service
  </Link>
</li>

<li className="">
  <Link to="/Delhi-to-Pune-Transport-Service">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Delhi to Pune Transport Service
  </Link>
</li>

<li className="">
  <Link to="/LG-Transport-Services-Vendor-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    LG Transport Services Vendor in Pune
  </Link>
</li>

<li className="">
  <Link to="/Samsung-Transportation-Vendor-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Samsung Transportation Vendor in Pune
  </Link>
</li>

<li className="">
  <Link to="/Transportation-Service-Company-in-PCMC">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Transportation Service Company in PCMC
  </Link>
</li>

<li className="">
  <Link to="/Warehouse-Transportation-Company-in-Pune">
    <i className="fa fa-truck darkcolor"></i>{" "}
    Warehouse Transportation Company in Pune
  </Link>
</li>


                




                </ul>

              </div>

            </div>
                        {/* Newsletter */}

            {/* <div className="col-xl-3 col-lg-6 col-md-6">

              <div className="footer-widget-two__column footer-widget-two__newsletter">

                <h3 className="footer-widget-two__newsletter-title">
                  Stay Connected With SSK Logistics
                </h3>

                <p
                  style={{
                    color: "#cfcfcf",
                    lineHeight: "28px",
                    marginBottom: "25px",
                  }}
                >
                  Subscribe to receive the latest logistics updates,
                  transportation news, and service announcements directly
                  in your inbox.
                </p>

                <form
                  className="footer-widget-two__newsletter-form"
                  action="#"
                  method="POST"
                >

                  <div className="footer-widget-two__newsletter-form-input-box">

                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      required
                    />

                    <button
                      type="submit"
                      className="footer-widget-two__newsletter-btn"
                    >

                      <IoPaperPlaneSharp />

                    </button>

                  </div>

                </form>

                <div className="site-footer-two__social">

                  <a href="#">
                    <FaFacebookF />
                  </a>

                  <a href="#">
                    <FaLinkedinIn />
                  </a>

                  <a href="#">
                    <FaInstagram />
                  </a>

                  <a href="#">
                    <FaYoutube />
                  </a>

                </div>

              </div>

            </div> */}

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="site-footer-two__bottom text-center">

        <div className="container">

          <div className="site-footer-two__bottom-inner">

            <p className="site-footer-two__bottom-text">

              © Copyright 2026 by{" "}

              <a href="/">
                SSK Logistics
              </a>

              . All Rights Reserved.

            </p>

          

          </div>

        </div>

      </div>

    </footer>
  );
};

export default FooterTwo;