// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // const services = [
// //   {
// //     image: "/images/services/services-two-2-1.jpg",
// //     icon: "icon-worldwide-shipping",
// //     title: "International Transport",
// //     link: "/international-transport",
// //   },
// //   {
// //     image: "/images/services/services-two-2-2.jpg",
// //     icon: "icon-shipment",
// //     title: "Ocean Freight",
// //     link: "/ocean-transport",
// //   },
// //   {
// //     image: "/images/services/services-two-2-3.jpg",
// //     icon: "icon-delivery-man",
// //     title: "Rail Freight",
// //     link: "/track-transport",
// //   },
// //   {
// //     image: "/images/services/services-two-2-4.jpg",
// //     icon: "icon-truck",
// //     title: "Road Freight",
// //     link: "/personal-delivery",
// //   },
// //   {
// //     image: "/images/services/services-two-2-5.jpg",
// //     icon: "icon-shipment",
// //     title: "Local Truck Transport",
// //     link: "/track-transport",
// //   },
// //   {
// //     image: "/images/services/services-two-2-6.jpg",
// //     icon: "icon-delivery-man",
// //     title: "Fast Personal Delivery",
// //     link: "/personal-delivery",
// //   },
// //   {
// //     image: "/images/services/services-two-2-3.jpg",
// //     icon: "icon-delivery-man",
// //     title: "Rail Freight",
// //     link: "/emergency-transport",
// //   },
// // ];

// const services = [
//   {
//     image: "/images/services/services-two-2-1.jpg",
//     icon: "icon-truck",
//     title: "Full Truck Load (FTL)",
//     link: "/full-truck-load",
//     description:
//       "Reliable end-to-end transportation solutions for bulk shipments across India with dedicated vehicles, faster transit, and complete shipment visibility.",
//     tagline:
//       "Move more, faster and safer with dependable full truck load services.",
//   },

//   {
//     image: "/images/services/services-two-2-2.jpg",
//     icon: "icon-shipment",
//     title: "Part Truck Load (PTL)",
//     link: "/part-truck-load",
//     description:
//       "Cost-effective logistics for smaller consignments using optimized routing and shared transportation without compromising delivery timelines.",
//     tagline:
//       "Smart logistics that lets you pay only for the space you use.",
//   },

//   {
//     image: "/images/services/services-two-2-3.jpg",
//     icon: "icon-delivery-man",
//     title: "3PL Solutions",
//     link: "/3pl-solutions",
//     description:
//       "Integrated third-party logistics services including transportation, inventory management, warehousing, and distribution for seamless operations.",
//     tagline:
//       "Complete logistics management designed to support your growing business.",
//   },

//   {
//     image: "/images/services/services-two-2-4.jpg",
//     icon: "icon-worldwide-shipping",
//     title: "Warehousing & Distribution",
//     link: "/warehousing-distribution",
//     description:
//       "Secure warehousing, efficient inventory control, and nationwide distribution backed by modern logistics infrastructure.",
//     tagline:
//       "Efficient storage, faster dispatch and reliable nationwide distribution.",
//   },

//   {
//     image: "/images/services/services-two-2-5.jpg",
//     icon: "icon-delivery-man",
//     title: "Express & Last-Mile Delivery",
//     link: "/express-delivery",
//     description:
//       "Technology-driven express transportation and last-mile delivery solutions ensuring timely and accurate deliveries across every destination.",
//     tagline:
//       "Delivering every shipment on time with speed, precision and reliability.",
//   },

//   {
//     image: "/images/services/services-two-2-6.jpg",
//     icon: "icon-shipment",
//     title: "Sustainable & Green Logistics",
//     link: "/green-logistics",
//     description:
//       "Environmentally responsible logistics solutions focused on fuel efficiency, route optimization, and sustainable transportation practices.",
//     tagline:
//       "Building a greener future through smarter logistics and responsible transportation.",
//   },
// ];

// const ServicesTwo = () => {
//   return (
//     <section className="services-two" id="services">
//       <div className="container">

//         {/* Section Title */}
//         <div className="section-title text-center sec-title-animation animation-style1">

//           <div className="section-title__tagline-box">

//             <span className="section-title__tagline-border"></span>

//             <div className="section-title__shape-1">
//               <i className="fas fa-plane"></i>
//             </div>

//             <h6 className="section-title__tagline">
//               Our Services
//             </h6>

//             <span className="section-title__tagline-border"></span>

//             <div className="section-title__shape-2">
//               <i className="fas fa-plane"></i>
//             </div>

//           </div>


//           <h3 className="section-title__title title-animation">
//             Efficient Logistics Services <br />
//             <span>for Your Business</span>
//           </h3>

//         </div>


//         {/* Services Slider */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={3}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//           }}
//           navigation
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1200: {
//               slidesPerView: 3,
//             },
//           }}
//           className="services-two__carousel"
//         >

//           {services.map((service, index) => (

//             <SwiperSlide key={index}>

//               <div className="services-two__single">

//                 <div className="services-two__img">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                   />
//                 </div>


//                 <div className="services-two__content">

//                   <div className="services-two__icon">
//                     <span className={service.icon}></span>
//                   </div>


//                   <div className="services-two__title">
//                     <h3>
//                       <a href={service.link}>
//                         {service.title}
//                       </a>
//                     </h3>
//                   </div>


                 
//                   <p className="services-two__text">
//   {service.description}
// </p>

// <h6
//   style={{
//     color: "#ED1D23",
//     fontWeight: "700",
//     marginTop: "18px",
//     lineHeight: "28px",
//     fontStyle: "italic",
//   }}
// >
//   "{service.tagline}"
// </h6>


             

                

//                 </div>

//               </div>

//             </SwiperSlide>

//           ))}

//         </Swiper>

//       </div>
//     </section>
//   );
// };

// export default ServicesTwo;


import React from "react";
import {
  FaTruckMoving,
  FaBoxes,
  FaNetworkWired,
  FaWarehouse,
  FaShippingFast,
  FaLeaf,
} from "react-icons/fa";

// const services = [
//   {
//     image: "/images/services/services-two-2-1.jpg",
//     icon: "icon-truck",
//     title: "Full Truck Load (FTL)",
//     link: "/full-truck-load",
//     description:
//       "Reliable end-to-end transportation solutions for bulk shipments across India with dedicated vehicles, faster transit and complete shipment visibility.",
//     tagline:
//       "Move more, faster and safer with dependable full truck load services.",
//   },
//   {
//     image: "/images/services/services-two-2-2.jpg",
//     icon: "icon-shipment",
//     title: "Part Truck Load (PTL)",
//     link: "/part-truck-load",
//     description:
//       "Cost-effective logistics for smaller consignments using optimized routing and shared transportation without compromising delivery timelines.",
//     tagline:
//       "Smart logistics that lets you pay only for the space you use.",
//   },
//   {
//     image: "/images/services/services-two-2-3.jpg",
//     icon: "icon-delivery-man",
//     title: "3PL Solutions",
//     link: "/3pl-solutions",
//     description:
//       "Integrated third-party logistics services including transportation, inventory management, warehousing and distribution.",
//     tagline:
//       "Complete logistics management designed to support your growing business.",
//   },
//   {
//     image: "/images/services/services-two-2-4.jpg",
//     icon: "icon-worldwide-shipping",
//     title: "Warehousing & Distribution",
//     link: "/warehousing-distribution",
//     description:
//       "Secure warehousing, inventory control and nationwide distribution supported by modern logistics infrastructure.",
//     tagline:
//       "Efficient storage, faster dispatch and reliable nationwide distribution.",
//   },
//   {
//     image: "/images/services/services-two-2-5.jpg",
//     icon: "icon-delivery-man",
//     title: "Express & Last-Mile Delivery",
//     link: "/express-delivery",
//     description:
//       "Fast, technology-driven transportation and last-mile delivery ensuring accurate and timely shipments.",
//     tagline:
//       "Delivering every shipment with speed, precision and reliability.",
//   },
//   {
//     image: "/images/services/services-two-2-6.jpg",
//     icon: "icon-shipment",
//     title: "Sustainable & Green Logistics",
//     link: "/green-logistics",
//     description:
//       "Eco-friendly logistics solutions focused on route optimization, fuel efficiency and sustainable transportation.",
//     tagline:
//       "Building a greener future through smarter logistics.",
//   },
// ];

const services = [
  {
    image: "/images/services/full-truck-load.jpg",
    icon: <FaTruckMoving />,
    title: "Full Truck Load (FTL)",
    link: "/full-truck-load",
    description:
      "Reliable end-to-end transportation solutions for bulk shipments across India with dedicated vehicles, faster transit and complete shipment visibility.",
    tagline:
      "Move more, faster and safer with dependable full truck load services.",
  },

  {
    image: "/images/services/part-truck-load.jpg",
    icon: <FaBoxes />,
    title: "Part Truck Load (PTL)",
    link: "/part-truck-load",
    description:
      "Cost-effective logistics for smaller consignments using optimized routing and shared transportation without compromising delivery timelines.",
    tagline:
      "Smart logistics that lets you pay only for the space you use.",
  },

  {
    image: "/images/services/3PL-Solutions.jpg",
    icon: <FaNetworkWired />,
    title: "3PL Solutions",
    link: "/3pl-solutions",
    description:
      "Integrated third-party logistics services including transportation, inventory management, warehousing and distribution.",
    tagline:
      "Complete logistics management designed to support your growing business.",
  },

  {
    image: "/images/services/Distribution-and-Warehousing.jpg",
    icon: <FaWarehouse />,
    title: "Warehousing & Distribution",
    link: "/warehousing-distribution",
    description:
      "Secure warehousing, inventory control and nationwide distribution supported by modern logistics infrastructure.",
    tagline:
      "Efficient storage, faster dispatch and reliable nationwide distribution.",
  },

  {
    image: "/images/services/Express-and-fast-mile.jpg",
    icon: <FaShippingFast />,
    title: "Express & Last-Mile Delivery",
    link: "/express-delivery",
    description:
      "Fast, technology-driven transportation and last-mile delivery ensuring accurate and timely shipments.",
    tagline:
      "Delivering every shipment with speed, precision and reliability.",
  },

  {
    image: "/images/services/Sustainable-and-green-logistic.jpg",
    icon: <FaLeaf />,
    title: "Sustainable & Green Logistics",
    link: "/green-logistics",
    description:
      "Eco-friendly logistics solutions focused on route optimization, fuel efficiency and sustainable transportation.",
    tagline:
      "Building a greener future through smarter logistics.",
  },
];

const ServicesTwo = () => {
  return (

<>


     <section className="page-banner">
                <div className="page-banner-container">
                    <h2>
                      Services
                    </h2>
                </div>
            </section>
    <section className="services-two py-5" id="services">

      <div className="container">

        <div className="section-title text-center mb-5">

          <h6 className="section-title__tagline">
            SSK LOGISTICS SERVICES
          </h6>

          <h2 className="section-title__title">
            Smart Logistics Solutions
            <br />
            <span>Built Around Your Business</span>
          </h2>

        </div>

        <div className="row">

          {services.map((service, index) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={index}
            >

              <div className="services-two__single h-100">

                <div className="services-two__img">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                </div>

                <div className="services-two__content">

                  {/* <div className="services-two__icon">

                    <span className={service.icon}></span>

                  </div> */}
                  <div className="services-two__icon">
    {service.icon}
</div>

                  <div className="services-two__title">

                    <h3>

                      <a href={service.link}>
                        {service.title}
                      </a>

                    </h3>

                  </div>

                  <p className="services-two__text">
                    {service.description}
                  </p>

                  <h6
                    style={{
                      color: "#ED1D23",
                      fontWeight: "700",
                      lineHeight: "28px",
                      fontStyle: "italic",
                      margin: "20px 0",
                    }}
                  >
                    "{service.tagline}"
                  </h6>

                  <div className="services-two__btn">

                   

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

</>
  );
};

export default ServicesTwo;