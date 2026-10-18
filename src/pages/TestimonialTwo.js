import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaUserCircle } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mr. Rajesh Sharma",
    role: "Manufacturing Business",
    review:
      "SSK Logistics has transformed our supply chain with timely deliveries and professional service. Their team is highly reliable and responsive.",
  },
  {
    name: "Ms. Priya Patel",
    role: "E-commerce Seller",
    review:
      "Excellent logistics partner! Our shipments are always delivered safely and on schedule. Highly recommended for business transportation.",
  },
  {
    name: "Mr. Amit Verma",
    role: "Retail Distributor",
    review:
      "The FTL and PTL services are efficient and cost-effective. SSK Logistics has become an important part of our distribution network.",
  },
  {
    name: "Ms. Neha Joshi",
    role: "Warehouse Manager",
    review:
      "Professional staff, secure cargo handling, and outstanding customer support. Their warehousing solutions have exceeded our expectations.",
  },
  {
    name: "Mr. Vikram Singh",
    role: "Industrial Supplier",
    review:
      "Reliable transportation across India with real-time tracking and on-time deliveries. A trusted logistics partner for our business.",
  },
  {
    name: "Mr. Karan Mehta",
    role: "Corporate Client",
    review:
      "SSK Logistics consistently delivers quality service with excellent communication and dependable transportation solutions.",
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