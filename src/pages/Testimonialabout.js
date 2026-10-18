import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaUserCircle } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mr. Sandeep Kulkarni",
    role: "Automotive Parts Supplier",
    review:
      "We regularly depend on SSK Logistics for movement of automotive components. Their coordination is smooth, vehicles are arranged as required, and deliveries are handled professionally.",
  },
  {
    name: "Mr. Rohit Agarwal",
    role: "FMCG Distributor",
    review:
      "Managing regular distribution requires dependable transport support. SSK Logistics has helped us maintain our delivery schedules with responsive coordination and reliable service.",
  },
  {
    name: "Ms. Anjali Deshmukh",
    role: "Procurement Manager",
    review:
      "Our experience with SSK Logistics has been very positive. The team communicates clearly, understands our transport requirements, and provides suitable logistics solutions whenever required.",
  },
  {
    name: "Mr. Nitin Jadhav",
    role: "Engineering Company",
    review:
      "We use SSK Logistics for industrial material transportation between our suppliers and project locations. Their team provides good coordination and handles our consignments with proper care.",
  },
  {
    name: "Mr. Akash Shah",
    role: "Wholesale Business",
    review:
      "From vehicle arrangement to final delivery, the overall process is simple and well managed. SSK Logistics gives us dependable transportation support for our regular business requirements.",
  },
  {
    name: "Ms. Sneha Patil",
    role: "Operations Manager",
    review:
      "What we appreciate most is their quick response and practical approach to logistics. They understand changing operational requirements and work closely with our team to keep shipments moving.",
  },
];

const TestimonialTwo = () => {
  return (
    <section className="testimonial-two">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-left sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline-border"></span>

            <div className="section-title__shape-1">
              <i className="fas fa-plane"></i>
            </div>

            <h6 className="section-title__tagline">
              Client Testimonials
            </h6>

            <span className="section-title__tagline-border"></span>

            <div className="section-title__shape-2">
              <i className="fas fa-plane"></i>
            </div>
          </div>

          <h3 className="section-title__title title-animation">
            Trusted by Businesses
            <br />
            <span>Across India</span>
          </h3>
        </div>

        <div className="testimonial-two__middle">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-two__carousel"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-two__single">
                  <div className="testimonial-two__single-inner">
                    <div className="testimonial-two__shape-1">
                      <img
                        src="/images/shapes/testimonial-two-shape-1.png"
                        alt=""
                      />
                    </div>

                    <div className="testimonial-two__quote">
                      <i className="fas fa-quote-left"></i>
                    </div>

                    <div className="testimonial-two__ratting">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className="fas fa-star"
                        ></span>
                      ))}
                    </div>

                    <p className="testimonial-two__text">
                      {item.review}
                    </p>

                    <div className="testimonial-two__client-info">
                      {/* Dummy Profile Icon */}
                      <div className="testimonial-two__client-img dummy-profile">
                        <FaUserCircle />
                      </div>

                      <div className="testimonial-two__client-content">
                        <h3>
                          <a href="/testimonials">
                            {item.name}
                          </a>
                        </h3>

                        <p>{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;