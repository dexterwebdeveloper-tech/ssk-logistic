import React from "react";
import CountUp from "react-countup";

const counters = [
  {
    icon: "icon-world-wide-web",
    count: 850,
    suffix: "+",
    text: "Worldwide Branches",
    delay: "100ms",
  },
  {
    icon: "icon-user-avatar",
    count: 50,
    suffix: "k",
    text: "Total Clients in World",
    delay: "300ms",
  },
  {
    icon: "icon-rating",
    count: 2.7,
    suffix: "k",
    text: "Satisfied Customers",
    delay: "500ms",
    decimal: true,
  },
  {
    icon: "icon-delivery-man-1",
    count: 99,
    suffix: "%",
    text: "Successful Delivery",
    delay: "700ms",
  },
];


const CounterTwo = () => {
  return (
    <section className="counter-two">

      <div className="container">

        <div className="row">

          {counters.map((item, index) => (

            <div
              className={`col-xl-3 col-lg-6 col-md-6 wow ${
                index < 2 ? "fadeInLeft" : "fadeInRight"
              }`}
              data-wow-delay={item.delay}
              key={index}
            >

              <div className="counter-two__single">

                <div className="counter-two__icon">
                  <span className={item.icon}></span>
                </div>


                <div className="counter-two__content">

                  <div className="counter-two__count">

                    <h3 className="odometer">

                      <CountUp
                        start={0}
                        end={item.count}
                        duration={3}
                        decimals={item.decimal ? 1 : 0}
                        enableScrollSpy
                        scrollSpyOnce
                      />

                    </h3>

                    <span>{item.suffix}</span>

                  </div>


                  <p className="counter-two__count-text">
                    {item.text}
                  </p>


                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};


export default CounterTwo;