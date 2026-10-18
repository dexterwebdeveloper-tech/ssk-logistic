import React, { useState } from "react";
import {
  FaArrowRightLong,
  FaBoxOpen,
  FaBuilding,
  FaCheck,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaTruckFast,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa6";

import "./Enquiry.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    pickup: "",
    delivery: "",
    cargo: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const services = [
    "Full Truck Load (FTL)",
    "Part Truck Load (PTL)",
    "Industrial Transportation",
    "Corporate Logistics",
    "Warehouse Transportation",
    "FMCG Transportation",
    "Automotive Logistics",
    "Machinery Transportation",
    "Pan India Transportation",
    "Other Logistics Requirement",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = "Please enter pickup location";
    }

    if (!formData.delivery.trim()) {
      newErrors.delivery = "Please enter delivery location";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const whatsappNumber = "919876543210";

    const whatsappMessage = `
*New Logistics Enquiry - SSK Logistics*

*Customer Details*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not Provided"}

*Shipment Details*
Service Required: ${formData.service}
Pickup Location: ${formData.pickup}
Delivery Location: ${formData.delivery}
Cargo / Material: ${formData.cargo || "Not Specified"}

*Additional Requirement*
${formData.message || "No additional message"}

Please share the availability and quotation for this requirement.
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (

<>

       <section className="page-banner">
                <div className="page-banner-container">
                    <h2>
                      ENQUIRY
                    </h2>
                </div>
            </section>

    <section className="ssk-enquiry-section">

      {/* Background Decoration */}
      <div className="ssk-enquiry-circle circle-a"></div>
      <div className="ssk-enquiry-circle circle-b"></div>

      <div className="ssk-enquiry-container">

        {/* ===============================
            LEFT SIDE
        =============================== */}
        <div className="ssk-enquiry-info">

          <div className="ssk-enquiry-eyebrow">
            <span></span>
            QUICK LOGISTICS ENQUIRY
          </div>

          <h2>
            Move Your Cargo
            <strong> With Confidence.</strong>
          </h2>

          <p className="ssk-enquiry-description">
            Tell us about your transportation requirement and our team will
            help you find a suitable logistics solution for your business.
          </p>

          {/* Feature Points */}
          <div className="ssk-enquiry-benefits">

            <div className="ssk-enquiry-benefit">
              <span>
                <FaCheck />
              </span>
              Pan-India Transportation
            </div>

            <div className="ssk-enquiry-benefit">
              <span>
                <FaCheck />
              </span>
              Business & Industrial Logistics
            </div>

            <div className="ssk-enquiry-benefit">
              <span>
                <FaCheck />
              </span>
              Flexible Transport Solutions
            </div>

          </div>

          {/* Orange Contact Card */}
          <div className="ssk-enquiry-contact">

            <div className="ssk-contact-icon">
              <FaWhatsapp />
            </div>

            <div>
              <small>NEED QUICK ASSISTANCE?</small>

              <span>Talk to our logistics team</span>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 9876543210
              </a>
            </div>

          </div>

          {/* Bottom Visual */}
          <div className="ssk-logistics-visual">

            <div className="ssk-visual-icon">
              <FaTruckFast />
            </div>

            <div className="ssk-visual-line"></div>

            <div className="ssk-visual-icon small">
              <FaLocationDot />
            </div>

            <div className="ssk-visual-text">
              <small>SSK LOGISTICS</small>
              <strong>Delivered With Pride.</strong>
            </div>

          </div>

        </div>


        {/* ===============================
            RIGHT FORM
        =============================== */}
        <div className="ssk-enquiry-form-wrapper">

          <div className="ssk-form-top">

            <div>
              <span>GET A QUOTE</span>

              <h3>
                Tell Us About Your Shipment
              </h3>
            </div>

            <div className="ssk-form-top-icon">
              <FaBoxOpen />
            </div>

          </div>

          <form
            className="ssk-enquiry-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* NAME */}
            <div className="ssk-form-group">

              <label>
                Full Name <span>*</span>
              </label>

              <div
                className={`ssk-input-box ${
                  errors.name ? "input-error" : ""
                }`}
              >
                <FaUser />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {errors.name && (
                <small className="ssk-error">
                  {errors.name}
                </small>
              )}

            </div>


            {/* PHONE */}
            <div className="ssk-form-group">

              <label>
                Phone Number <span>*</span>
              </label>

              <div
                className={`ssk-input-box ${
                  errors.phone ? "input-error" : ""
                }`}
              >
                <FaPhone />

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {errors.phone && (
                <small className="ssk-error">
                  {errors.phone}
                </small>
              )}

            </div>


            {/* EMAIL */}
            <div className="ssk-form-group">

              <label>Email Address</label>

              <div className="ssk-input-box">
                <FaEnvelope />

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

            </div>


            {/* SERVICE */}
            <div className="ssk-form-group">

              <label>
                Service Required <span>*</span>
              </label>

              <div
                className={`ssk-input-box ${
                  errors.service ? "input-error" : ""
                }`}
              >
                <FaTruckFast />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Logistics Service
                  </option>

                  {services.map((service, index) => (
                    <option value={service} key={index}>
                      {service}
                    </option>
                  ))}

                </select>
              </div>

              {errors.service && (
                <small className="ssk-error">
                  {errors.service}
                </small>
              )}

            </div>


            {/* PICKUP */}
            <div className="ssk-form-group">

              <label>
                Pickup Location <span>*</span>
              </label>

              <div
                className={`ssk-input-box ${
                  errors.pickup ? "input-error" : ""
                }`}
              >
                <FaLocationDot />

                <input
                  type="text"
                  name="pickup"
                  placeholder="Pickup city / location"
                  value={formData.pickup}
                  onChange={handleChange}
                />
              </div>

              {errors.pickup && (
                <small className="ssk-error">
                  {errors.pickup}
                </small>
              )}

            </div>


            {/* DELIVERY */}
            <div className="ssk-form-group">

              <label>
                Delivery Location <span>*</span>
              </label>

              <div
                className={`ssk-input-box ${
                  errors.delivery ? "input-error" : ""
                }`}
              >
                <FaLocationDot />

                <input
                  type="text"
                  name="delivery"
                  placeholder="Delivery city / location"
                  value={formData.delivery}
                  onChange={handleChange}
                />
              </div>

              {errors.delivery && (
                <small className="ssk-error">
                  {errors.delivery}
                </small>
              )}

            </div>


            {/* CARGO */}
            <div className="ssk-form-group ssk-full-field">

              <label>Cargo / Material</label>

              <div className="ssk-input-box">
                <FaBoxOpen />

                <input
                  type="text"
                  name="cargo"
                  placeholder="e.g. Machinery, FMCG, Auto Parts, Electronics..."
                  value={formData.cargo}
                  onChange={handleChange}
                />
              </div>

            </div>


            {/* MESSAGE */}
            <div className="ssk-form-group ssk-full-field">

              <label>Additional Requirement</label>

              <div className="ssk-textarea-box">

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about quantity, vehicle requirement, preferred date or other shipment details..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>

            </div>


            {/* SUBMIT */}
            <div className="ssk-submit-area ssk-full-field">

              <button
                type="submit"
                className="ssk-whatsapp-submit"
              >
                <span className="ssk-submit-whatsapp">
                  <FaWhatsapp />
                </span>

                <span className="ssk-submit-content">
                  <small>QUICK RESPONSE ON WHATSAPP</small>
                  Send Logistics Enquiry
                </span>

                <FaArrowRightLong className="ssk-submit-arrow" />
              </button>

              <p>
                By submitting, your enquiry will open directly in WhatsApp.
              </p>

            </div>

          </form>

        </div>

      </div>

    </section>

</>
  );
};

export default Enquiry;