


import React from "react";

const FaqSection = ({ title = "Asked Questions", subtitle = "Faq", items = [] }) => {
  return (
    <section className="faq-section">
      <div className="container">
        {/* Title */}
        <div className="faq-title text-center">
          <span className="faq-subtitle">{subtitle}</span>
          <h2 className="faq-heading">{title}</h2>
        </div>

        {/* Accordion */}
        <div className="accordion" id="accordionFaq">
          {items.map((item, index) => {
            const collapseId = `collapse${index}`;
            const headingId = `heading${index}`;
            return (
              <div className="accordion-item faq-item" key={index}>
                <h6 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    {item.question}
                  </button>
                </h6>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  data-bs-parent="#accordionFaq"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;


// import React, { useState } from "react";

// const FaqSection = ({
//     title = "Asked Questions",
//     subtitle = "FAQ",
//     items = [],
// }) => {

//     const [activeIndex, setActiveIndex] = useState(0);

//     const handleToggle = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <section className="faq-section">

//             {/* FAQ Title */}
//             {(title || subtitle) && (
//                 <div className="faq-title text-center">

//                     {subtitle && (
//                         <span className="faq-subtitle">
//                             {subtitle}
//                         </span>
//                     )}

//                     {title && (
//                         <h2 className="faq-heading">
//                             {title}
//                         </h2>
//                     )}

//                 </div>
//             )}

//             {/* FAQ Accordion */}
//             <div className="accordion faq-react-accordion">

//                 {items.map((item, index) => {

//                     const isOpen = activeIndex === index;

//                     return (
//                         <div
//                             className={`faq-item ${isOpen ? "active" : ""}`}
//                             key={index}
//                         >

//                             {/* Question */}
//                             <button
//                                 type="button"
//                                 className={`faq-question ${isOpen ? "active" : ""}`}
//                                 onClick={() => handleToggle(index)}
//                                 aria-expanded={isOpen}
//                             >

//                                 <span>
//                                     {item.question}
//                                 </span>

//                                 <span className="faq-arrow">
//                                     <i
//                                         className={`fa ${
//                                             isOpen
//                                                 ? "fa-chevron-up"
//                                                 : "fa-chevron-down"
//                                         }`}
//                                     ></i>
//                                 </span>

//                             </button>


//                             {/* Answer */}
//                             <div
//                                 className={`faq-answer ${
//                                     isOpen ? "open" : ""
//                                 }`}
//                             >

//                                 <div className="faq-answer-content">
//                                     {item.answer}
//                                 </div>

//                             </div>

//                         </div>
//                     );
//                 })}

//             </div>

//         </section>
//     );
// };

// export default FaqSection;