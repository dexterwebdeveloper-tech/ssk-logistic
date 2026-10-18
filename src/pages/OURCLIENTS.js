import React from "react";
import "./Clients.css";

const clients = [
  {
    name: "Allied Aero Systems",
    logo: "/images/clients/allied.jpg",
  },
  {
    name: "Avenue Supermarts",
    logo: "/images/clients/avenue.png",
  },
  {
    name: "Budhani Bros",
    logo: "/images/clients/budhani.png",
  },
  {
    name: "Carlsberg India",
    logo: "/images/clients/carlsberg.png",
  },
  {
    name: "Fiora",
    logo: "/images/clients/fiora.webp",
  },
  {
    name: "FSC",
    logo: "/images/clients/fsc.png",
  },
  {
    name: "MA'AM Arts",
    logo: "/images/clients/maamarts.png",
  },
  {
    name: "Reliance Retail",
    logo: "/images/clients/Reliance_Retail.png",
  },
  {
    name: "Trent Limited",
    logo: "/images/clients/Trent.jpg",
  },
  {
    name: "Trent Hypermarket",
    logo: "/images/clients/trentHyper.png",
  },
];

const OurClients = () => {
  // Duplicate logos for seamless infinite sliding
  const sliderClients = [...clients, ...clients];

  return (
    <section className="ssk-clients" id="clients">

      <div className="client-container">

        {/* Heading */}
        <div className="client-heading">

          <div className="client-small-title">
            <span></span>
            OUR CLIENTS
            <span></span>
          </div>

          <h2>
            Trusted by
            <strong> Industry Leaders</strong>
          </h2>

          <p>
            SSK Logistics proudly serves leading businesses across
            multiple industries with dependable, safe and efficient
            transportation and logistics solutions.
          </p>

        </div>

        {/* Slider */}
        <div className="client-slider">

          <div className="client-slider-fade client-fade-left"></div>
          <div className="client-slider-fade client-fade-right"></div>

          <div className="client-slider-track">

            {sliderClients.map((client, index) => (
              <div
                className="client-slide"
                key={`${client.name}-${index}`}
              >

                <div className="client-logo-box">

                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="client-logo"
                    loading="lazy"
                  />

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Text */}
        <div className="client-bottom">

          <span></span>

          <p>
            Building long-term partnerships through reliable logistics
          </p>

          <span></span>

        </div>

      </div>

    </section>
  );
};

export default OurClients;