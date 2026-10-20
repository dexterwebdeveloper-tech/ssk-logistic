// components/FleetHighway.jsx
import React from "react";
import "../css/FleetHighway.css";

const cars = [
  "/images/gallery/1.jpeg",
  "/images/gallery/6.jpeg",
  "/images/gallery/3.jpeg",
  "/images/gallery/4.jpeg",
  "/images/gallery/5.jpeg",

];

const FleetHighway = () => {
  // duplicate to create seamless loop
  const lane = [...cars, ...cars];

  return (
    <section className="highway-wrap">
      <h2 className="fleet-title">Our Vehicle</h2>

      {/* LANE 1 → */}
      <div className="lane lane-top">
        <div className="lane-track">
          {lane.map((src, i) => (
            <figure className="car-card" key={`t-${i}`}>
              <img src={src} alt={`Fleet ${i + 1}`} />
              {/* <figcaption>SAS Group (Safe & Secure Delivery Solution)</figcaption> */}
            </figure>
          ))}
        </div>
      </div>

      {/* LANE 2 ← */}
      <div className="lane lane-bottom">
        <div className="lane-track">
          {lane.map((src, i) => (
            <figure className="car-card" key={`b-${i}`}>
              <img src={src} alt={`Fleet ${i + 1}`} />
              {/* <figcaption>SAS Group (Safe & Secure Delivery Solution)</figcaption> */}
            </figure>
          ))}
        </div>
      </div>

      {/* dotted center divider */}
      <div className="center-divider" />
    </section>
  );
};

export default FleetHighway;
