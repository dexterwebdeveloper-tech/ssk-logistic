import React, { useState } from "react";

import {
  FaArrowRight,
  FaBriefcase,
  FaCheck,
  FaEnvelope,
  FaHeadset,
  FaLocationDot,
  FaPhone,
  FaTruckFast,
  FaUpload,
  FaUser,
  FaWhatsapp,
  FaChartLine,
  FaUsers,
  FaGraduationCap,
  FaArrowTrendUp,
} from "react-icons/fa6";

import "./Career.css";

const positions = [
  {
    icon: <FaTruckFast />,
    title: "Transport Coordinator",
    type: "Full Time",
    location: "Pune",
  },
  {
    icon: <FaBriefcase />,
    title: "Logistics Executive",
    type: "Full Time",
    location: "Pune",
  },
  {
    icon: <FaLocationDot />,
    title: "Operations Executive",
    type: "Full Time",
    location: "Pune",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support Executive",
    type: "Full Time",
    location: "Pune",
  },
];

const careerBenefits = [
  {
    icon: <FaChartLine />,
    title: "Career Growth",
    description: "Learn, grow and build your logistics career.",
  },
  {
    icon: <FaUsers />,
    title: "Professional Team",
    description: "Work with an experienced logistics team.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Practical Experience",
    description: "Gain hands-on transport and operations experience.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Growing Opportunities",
    description: "Build your future with a growing logistics company.",
  },
];

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
  });

  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});

  /* ==========================================
     INPUT CHANGE
  ========================================== */

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

  /* ==========================================
     POSITION CARD CLICK
  ========================================== */

  const selectPosition = (position) => {
    setFormData((prev) => ({
      ...prev,
      position,
    }));

    setErrors((prev) => ({
      ...prev,
      position: "",
    }));
  };

  /* ==========================================
     VALIDATION
  ========================================== */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }

    if (!formData.position) {
      newErrors.position = "Please select a position";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ==========================================
     WHATSAPP SUBMIT
  ========================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const whatsappNumber = "919876543210";

    const message = `
*Career Application - SSK Logistics*

*Applicant Details*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not Provided"}

*Job Details*
Position: ${formData.position}
Experience: ${formData.experience || "Not Provided"}

Resume: ${
      resume
        ? `${resume.name} - I will attach it in WhatsApp.`
        : "Will be shared separately."
    }

I am interested in joining SSK Logistics. Please let me know about the next steps.
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
 <>


    <section className="page-banner">
                <div className="page-banner-container">
                    <h2>
                      Career
                    </h2>
                </div>
            </section>

    <section className="ssk-career">

      {/* Background Decorations */}
      <div className="career-decoration career-decoration-one"></div>
      <div className="career-decoration career-decoration-two"></div>

      <div className="ssk-career-container">

        {/* ==================================================
            LEFT CONTENT
        ================================================== */}

        <div className="career-left">

          {/* Heading */}
          <div className="career-label">
            <span></span>
            CAREERS AT SSK LOGISTICS
          </div>

          <h2>
            Build Your Career.
            <strong>Move With Us.</strong>
          </h2>

          <p className="career-intro">
            Join our growing logistics team and build practical experience
            in transportation, operations and customer service.
          </p>

          {/* ================================================
              OPEN POSITIONS
          ================================================ */}

          <div className="career-position-title">
            <span>OPEN POSITIONS</span>

            <small>
              {positions.length} Opportunities
            </small>
          </div>

          <div className="career-position-grid">

            {positions.map((position, index) => (
              <button
                type="button"
                key={index}
                className={`career-position-card ${
                  formData.position === position.title
                    ? "career-position-active"
                    : ""
                }`}
                onClick={() =>
                  selectPosition(position.title)
                }
              >

                {/* Icon */}
                <div className="career-position-icon">
                  {position.icon}
                </div>

                {/* Content */}
                <div className="career-position-content">

                  <h3>
                    {position.title}
                  </h3>

                  <div className="career-position-meta">

                    <span>
                      <FaLocationDot />
                      {position.location}
                    </span>

                    <span>
                      <FaBriefcase />
                      {position.type}
                    </span>

                  </div>

                </div>

                {/* Arrow / Check */}
                <div className="career-select">

                  {formData.position === position.title ? (
                    <FaCheck />
                  ) : (
                    <FaArrowRight />
                  )}

                </div>

              </button>
            ))}

          </div>


          {/* ================================================
              WHY WORK WITH SSK
          ================================================ */}

          <div className="career-work-section">

            <div className="career-work-heading">

              <span>
                WHY WORK WITH SSK?
              </span>

              <div></div>

            </div>

            <div className="career-work-grid">

              {careerBenefits.map((benefit, index) => (
                <div
                  className="career-work-item"
                  key={index}
                >

                  <div className="career-work-icon">
                    {benefit.icon}
                  </div>

                  <div className="career-work-content">

                    <h4>
                      {benefit.title}
                    </h4>

                    <p>
                      {benefit.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* ==================================================
            RIGHT APPLICATION FORM
        ================================================== */}

        <div className="career-form-card">

          {/* Form Heading */}
          <div className="career-form-heading">

            <span>
              JOIN OUR TEAM
            </span>

            <h3>
              Apply for a Position
            </h3>

            <p>
              Fill in your details and our team will get in touch.
            </p>

          </div>


          <form onSubmit={handleSubmit} noValidate>

            {/* ==============================================
                FULL NAME
            ============================================== */}

            <div className="career-form-group">

              <label>
                Full Name <span>*</span>
              </label>

              <div
                className={`career-input ${
                  errors.name
                    ? "career-input-error"
                    : ""
                }`}
              >

                <FaUser />

                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              {errors.name && (
                <small className="career-error">
                  {errors.name}
                </small>
              )}

            </div>


            {/* ==============================================
                PHONE
            ============================================== */}

            <div className="career-form-group">

              <label>
                Phone Number <span>*</span>
              </label>

              <div
                className={`career-input ${
                  errors.phone
                    ? "career-input-error"
                    : ""
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
                <small className="career-error">
                  {errors.phone}
                </small>
              )}

            </div>


            {/* ==============================================
                EMAIL
            ============================================== */}

            <div className="career-form-group">

              <label>
                Email Address
              </label>

              <div className="career-input">

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


            {/* ==============================================
                POSITION
            ============================================== */}

            <div className="career-form-group">

              <label>
                Position <span>*</span>
              </label>

              <div
                className={`career-input ${
                  errors.position
                    ? "career-input-error"
                    : ""
                }`}
              >

                <FaBriefcase />

                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Position
                  </option>

                  {positions.map((position, index) => (
                    <option
                      value={position.title}
                      key={index}
                    >
                      {position.title}
                    </option>
                  ))}

                </select>

              </div>

              {errors.position && (
                <small className="career-error">
                  {errors.position}
                </small>
              )}

            </div>


            {/* ==============================================
                EXPERIENCE
            ============================================== */}

            <div className="career-form-group">

              <label>
                Experience
              </label>

              <div className="career-input">

                <FaBriefcase />

                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Experience
                  </option>

                  <option value="Fresher">
                    Fresher
                  </option>

                  <option value="1 - 2 Years">
                    1 - 2 Years
                  </option>

                  <option value="2 - 5 Years">
                    2 - 5 Years
                  </option>

                  <option value="5+ Years">
                    5+ Years
                  </option>

                </select>

              </div>

            </div>


            {/* ==============================================
                RESUME
            ============================================== */}

            <div className="career-form-group">

              <label>
                Upload Resume
              </label>

              <label className="career-resume-upload">

                <div className="career-upload-icon">
                  <FaUpload />
                </div>

                <div className="career-upload-content">

                  <strong>
                    {resume
                      ? resume.name
                      : "Choose your resume"}
                  </strong>

                  <span>
                    PDF / DOC / DOCX
                  </span>

                </div>

                <div className="career-upload-button">
                  Browse
                </div>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) =>
                    setResume(
                      e.target.files?.[0] || null
                    )
                  }
                />

              </label>

            </div>


            {/* ==============================================
                SUBMIT
            ============================================== */}

            <button
              type="submit"
              className="career-submit"
            >

              <div className="career-submit-icon">
                <FaWhatsapp />
              </div>

              <span>
                Apply via WhatsApp
              </span>

              <FaArrowRight />

            </button>

            <p className="career-form-note">
              After WhatsApp opens, attach your resume directly
              in the conversation.
            </p>

          </form>

        </div>

      </div>

    </section>
 
 </>
  );
};

export default Career;