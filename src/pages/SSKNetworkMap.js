import React from "react";
import {
  FaLocationDot,
  FaTruckFast,
  FaArrowRightLong,
  FaRoute,
} from "react-icons/fa6";

import "./SSKNetworkMap.css";

const SSKNetworkMap = () => {
  const cities = [
    { name: "Pune", x: 34, y: 61, hub: true },
    { name: "Thane", x: 29, y: 55 },
    { name: "Bhiwandi", x: 30, y: 52 },

    { name: "Ahmedabad", x: 26, y: 39 },
    { name: "Indore", x: 39, y: 43 },

    { name: "Jaipur", x: 39, y: 25 },
    { name: "Gurugram", x: 46, y: 19 },

    { name: "Lucknow", x: 60, y: 30 },
    { name: "Patna", x: 72, y: 36 },
    { name: "Kolkata", x: 82, y: 46 },

    { name: "Raipur", x: 59, y: 50 },

    { name: "Hyderabad", x: 51, y: 66 },
    { name: "Bangalore", x: 47, y: 82 },
  ];

  const pune = cities.find((city) => city.hub);

  return (
    <section className="ssk-network">

      {/* Background Text */}
      <div className="ssk-network__watermark">
        INDIA
      </div>

      <div className="ssk-network__container">

        {/* ==============================================
            LEFT CONTENT
        ============================================== */}
        <div className="ssk-network__content">

          <div className="ssk-network__tag">
            <span></span>
            OUR TRANSPORT NETWORK
          </div>

          <h2 className="ssk-network__heading">
            Connecting Pune With
            <span> Major Cities Across India.</span>
          </h2>

          <p className="ssk-network__description">
            SSK Logistics provides dependable transportation and
            logistics connectivity from Pune to important commercial,
            industrial and distribution locations across India.
          </p>


          {/* Stats */}
          <div className="ssk-network__stats">

            <div className="ssk-network__stat">
              <strong>13+</strong>
              <span>Major Cities</span>
            </div>

            <div className="ssk-network__stat">
              <strong>Pan India</strong>
              <span>Transport Network</span>
            </div>

          </div>


          {/* City List */}
          <div className="ssk-network__city-list">

            {cities.map((city, index) => (
              <div
                className={`ssk-network__city ${
                  city.hub ? "ssk-network__city--hub" : ""
                }`}
                key={index}
              >
                <FaLocationDot />

                <span>
                  {city.name}
                </span>
              </div>
            ))}

          </div>


          {/* Button */}
          <a
            href="/contact-us"
            className="ssk-network__button"
          >
            Get Transport Quote

            <span>
              <FaArrowRightLong />
            </span>
          </a>

        </div>


        {/* ==============================================
            MAP
        ============================================== */}
        <div className="ssk-network__map-area">

          {/* Map Header */}
          <div className="ssk-network__map-header">

            <div>
              <FaRoute />

              <span>
                SSK Logistics Network
              </span>
            </div>

            <span className="ssk-network__live">
              <i></i>
              PAN INDIA
            </span>

          </div>


          {/* ==============================================
              INDIA MAP
          ============================================== */}
          <div className="ssk-network__map">

            {/* SVG MAP */}
            <svg
              className="ssk-network__india"
              viewBox="0 0 600 700"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="SSK Logistics India transport network"
            >

              {/* INDIA SILHOUETTE */}
              <path
                className="ssk-network__india-shape"
                d="
                M242 43
                L280 52
                L306 70
                L330 82
                L350 108
                L380 116
                L404 140
                L434 151
                L462 176
                L480 204
                L468 229
                L489 251
                L475 276
                L497 301
                L476 329
                L451 342
                L437 371
                L408 385
                L392 415
                L365 427
                L350 459
                L329 481
                L320 520
                L301 550
                L292 589
                L276 625
                L260 654
                L244 625
                L226 597
                L211 560
                L192 531
                L178 496
                L153 474
                L143 441
                L119 418
                L110 386
                L90 361
                L98 331
                L82 305
                L99 279
                L92 249
                L110 225
                L119 193
                L142 177
                L151 147
                L174 128
                L183 101
                L207 86
                L218 62
                Z
                "
              />


              {/* ==========================================
                  ROUTE LINES FROM PUNE
              ========================================== */}

              {cities
                .filter((city) => !city.hub)
                .map((city, index) => (

                  <line
                    key={index}
                    className="ssk-network__route-line"
                    x1={`${pune.x}%`}
                    y1={`${pune.y}%`}
                    x2={`${city.x}%`}
                    y2={`${city.y}%`}
                  />

                ))}

            </svg>


            {/* ==============================================
                CITY MARKERS
            ============================================== */}

            {cities.map((city, index) => (

              <div
                key={index}
                className={`ssk-map-marker ${
                  city.hub ? "ssk-map-marker--hub" : ""
                }`}
                style={{
                  left: `${city.x}%`,
                  top: `${city.y}%`,
                }}
              >

                {/* Pulse */}
                <span className="ssk-map-marker__pulse"></span>


                {/* Dot */}
                <span className="ssk-map-marker__dot">

                  {city.hub ? (
                    <FaTruckFast />
                  ) : (
                    <FaLocationDot />
                  )}

                </span>


                {/* City Name */}
                <span className="ssk-map-marker__label">
                  {city.name}
                </span>

              </div>

            ))}


            {/* Pune Hub Badge */}
            <div className="ssk-network__hub-label">
              <span>
                <FaTruckFast />
              </span>

              <div>
                <small>MAIN HUB</small>
                <strong>PUNE</strong>
              </div>
            </div>

          </div>


          {/* Map Bottom */}
          <div className="ssk-network__map-bottom">

            <div>
              <FaTruckFast />

              <span>
                Transportation • Distribution • Logistics
              </span>
            </div>

            <strong>
              Delivered With Pride.
            </strong>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SSKNetworkMap;