// import React from "react";

// const clients = [
//   {
//     name: "Allied Aero Systems",
//     logo: "/images/clients/allied.jpg",
//   },
//   {
//     name: "Avenue Supermarts",
//     logo: "/images/clients/avenue.png",
//   },
//   {
//     name: "Budhani Bros",
//     logo: "/images/clients/budhani.png",
//   },
//   {
//     name: "Carlsberg India",
//     logo: "/images/clients/carlsberg.png",
//   },
//   {
//     name: "Fiora",
//     logo: "/images/clients/fiora.webp",
//   },
//   {
//     name: "FSC",
//     logo: "/images/clients/fsc.png",
//   },
//   {
//     name: "MA'AM Arts",
//     logo: "/images/clients/maamarts.png",
//   },
//   {
//     name: "Reliance Retail",
//     logo: "/images/clients/Reliance_Retail.png",
//   },
//   {
//     name: "Trent Limited",
//     logo: "/images/clients/Trent.jpg",
//   },
//   {
//     name: "Trent Hypermarket",
//     logo: "/images/clients/trentHyper.png",
//   },
// ];

// const Clients = () => {
//   return (
//     <section className="ssk-clients" id="clients">

//       <div className="container">

//         <div className="client-heading">

//           <span>OUR CLIENTS</span>

//           <h2>Trusted by India's Leading Brands</h2>

//           <p>
//             We proudly serve renowned organizations across retail,
//             manufacturing, logistics, FMCG and industrial sectors with
//             reliable transportation solutions.
//           </p>

//         </div>

//         <div className="client-grid">

//           {clients.map((client, index) => (

//             <div className="client-card" key={index}>

//               <div className="client-logo">

//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                 />

//               </div>

//               <h5>{client.name}</h5>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Clients;




import React from "react";

const clients = [
  {
    name: "Allied Aero Systems",
    logo: "/images/clients/allied.jpg",
    color: "#0d6efd",
  },
  {
    name: "Avenue Supermarts",
    logo: "/images/clients/avenue.png",
    color: "#198754",
  },
  {
    name: "Budhani Bros",
    logo: "/images/clients/budhani.png",
    color: "#dc3545",
  },
  {
    name: "Carlsberg India",
    logo: "/images/clients/carlsberg.png",
    color: "#198754",
  },
  {
    name: "Fiora",
    logo: "/images/clients/fiora.webp",
    color: "#000000",
  },
  {
    name: "FSC",
    logo: "/images/clients/fsc.png",
    color: "#795548",
  },
  {
    name: "MA'AM Arts",
    logo: "/images/clients/maamarts.png",
    color: "#ff6b00",
  },
  {
    name: "Reliance Retail",
    logo: "/images/clients/Reliance_Retail.png",
    color: "#0d6efd",
  },
  {
    name: "Trent Limited",
    logo: "/images/clients/Trent.jpg",
    color: "#111111",
  },
  {
    name: "Trent Hypermarket",
    logo: "/images/clients/trentHyper.png",
    color: "#198754",
  },
];

const Clients = () => {
  return (
   <>


      <section className="page-banner">
                <div className="page-banner-container">
                    <h2>
                      OUR CLIENTS
                    </h2>
                </div>
            </section>


    <section className="ssk-clients" id="clients">

      <div className="container">

        <div className="client-heading">

          {/* <span>OUR CLIENTS</span> */}

          <h2>Trusted by Industry Leaders</h2>

          <p>
            SSK Logistics proudly serves some of India's leading
            companies by delivering safe, reliable and efficient
            logistics solutions across multiple industries.
          </p>

        </div>

    <div className="client-grid">

  {clients.map((client, index) => (

    <div className="client-card" key={index}>

      <div className="client-logo-box">

        <img
          src={client.logo}
          alt={client.name}
          className="client-logo"
        />

      </div>

      {/* <h5>{client.name}</h5> */}

    </div>

  ))}

</div>

      </div>

    </section>
   
   </>
  );
};

export default Clients;