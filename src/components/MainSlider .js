import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const MainSlider = () => {
  return (
    <section className="main-slider" id="home">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: "#main-slider-pagination",
        }}
        navigation={{
          nextEl: "#main-slider__swiper-button-next",
          prevEl: "#main-slider__swiper-button-prev",
        }}
        className="thm-swiper__slider"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="main-slider__pattern-bg"
            style={{
              backgroundImage:
                "url(/images/shapes/main-slider-pattern.png)",
            }}
          ></div>

          <div className="main-slider__bg-box">
            <div
              className="main-slider__bg"
              style={{
                backgroundImage:
                  "url(/images/backgrounds/slider-1-1.jpg)",
              }}
            ></div>
          </div>

          <div className="main-slider__shape-1"></div>
          <div className="main-slider__shape-2"></div>

          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider__content">
                  <h4 className="main-slider__sub-title">
                    Fastest & Secure Logistics
                  </h4>

                  <h2 className="main-slider__title">
                    Transport Goods <br />
                    Priority <span>Logistics</span> <br />
                    <span>Simplified</span>
                  </h2>

                  <p className="main-slider__text">
                    Logistic service provider company plays a pivotal role in
                    the global <br />
                    supply chain ecosystem managing.
                  </p>

                  <div className="main-slider__btn-box">
                    <a href="/about" className="thm-btn">
                      Discover More
                      <span>
                        <i className="icon-right-arrow"></i>
                      </span>
                    </a>
                  </div>

                  <div className="main-slider__map">
                    <img
                      src="/images/shapes/main-slider-map-1.png"
                      alt="Map"
                      className="float-bob-y"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="main-slider__pattern-bg"
            style={{
              backgroundImage:
                "url(/images/shapes/main-slider-pattern.png)",
            }}
          ></div>

          <div className="main-slider__bg-box">
            <div
              className="main-slider__bg"
              style={{
                backgroundImage:
                  "url(/images/backgrounds/slider-1-2.jpg)",
              }}
            ></div>
          </div>

          <div className="main-slider__shape-1"></div>
          <div className="main-slider__shape-2"></div>

          <div className="container">
            <div className="main-slider__content">
              <h4 className="main-slider__sub-title">
                100% Satisfaction
              </h4>

              <h2 className="main-slider__title">
                Smart Logistic <br />
                <span>& Transportation Solutions</span>
              </h2>

              <p className="main-slider__text">
                Logistic service provider company plays a pivotal role in the
                global <br />
                supply chain ecosystem managing.
              </p>

              <div className="main-slider__btn-box">
                <a href="/about" className="thm-btn">
                  Discover More
                  <span>
                    <i className="icon-right-arrow"></i>
                  </span>
                </a>
              </div>

              <div className="main-slider__map">
                <img
                  src="/images/shapes/main-slider-map-1.png"
                  alt="Map"
                  className="float-bob-y"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="main-slider__pattern-bg"
            style={{
              backgroundImage:
                "url(/images/shapes/main-slider-pattern.png)",
            }}
          ></div>

          <div className="main-slider__bg-box">
            <div
              className="main-slider__bg"
              style={{
                backgroundImage:
                  "url(/images/backgrounds/slider-1-3.jpg)",
              }}
            ></div>
          </div>

          <div className="main-slider__shape-1"></div>
          <div className="main-slider__shape-2"></div>

          <div className="container">
            <div className="main-slider__content">
              <h4 className="main-slider__sub-title">
                International Logistics
              </h4>

              <h2 className="main-slider__title">
                Air Logistics, <br />
                Cargo <span>Solutions</span> <br />
                <span>& Business</span>
              </h2>

              <p className="main-slider__text">
                Logistic service provider company plays a pivotal role in the
                global <br />
                supply chain ecosystem managing.
              </p>

              <div className="main-slider__btn-box">
                <a href="/about" className="thm-btn">
                  Discover More
                  <span>
                    <i className="icon-right-arrow"></i>
                  </span>
                </a>
              </div>

              <div className="main-slider__map">
                <img
                  src="/images/shapes/main-slider-map-1.png"
                  alt="Map"
                  className="float-bob-y"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div
        className="swiper-pagination"
        id="main-slider-pagination"
      ></div>
    </section>
  );
};

export default MainSlider;