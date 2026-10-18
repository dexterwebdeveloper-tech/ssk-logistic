import React from "react";
import Slider from "react-slick";

const teamMembers = [
  {
    image: "/images/team/team-2-1.jpg",
    name: "Jessica Brown",
    role: "Founder",
  },
  {
    image: "/images/team/team-2-2.jpg",
    name: "James Fuller",
    role: "Senior Worker",
  },
  {
    image: "/images/team/team-2-3.jpg",
    name: "Jasmet Mangat",
    role: "Senior Associate",
  },
  {
    image: "/images/team/team-2-4.jpg",
    name: "Tim Southe",
    role: "Founder",
  },
  {
    image: "/images/team/team-2-5.jpg",
    name: "Alisa Fox",
    role: "Junior Worker",
  },
  {
    image: "/images/team/team-2-6.jpg",
    name: "Andre Staus",
    role: "Delivery Man",
  },
];


const TeamTwo = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <section className="team-two" id="team">

      <div className="container">

        <div className="section-title text-center">

          <div className="section-title__tagline-box">

            <span className="section-title__tagline-border"></span>

            <div className="section-title__shape-1">
              <i className="fas fa-plane"></i>
            </div>

            <h6 className="section-title__tagline">
              Our Team Members
            </h6>

            <span className="section-title__tagline-border"></span>

            <div className="section-title__shape-2">
              <i className="fas fa-plane"></i>
            </div>

          </div>


          <h3 className="section-title__title">
            Our Talented <span>Team</span>
            <br />
            <span>Member</span> Behind Tanspot
          </h3>

        </div>


        <Slider {...settings}>

          {teamMembers.map((member, index) => (

            <div className="item" key={index}>

              <div className="team-two__single">


                <div className="team-two__img-box">

                  <div className="team-two__img">

                    <img
                      src={member.image}
                      alt={member.name}
                    />


                    <div className="team-two__social">

                      <a href="/team-details">
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a href="/team-details">
                        <i className="fab fa-twitter"></i>
                      </a>

                      <a href="/team-details">
                        <i className="fab fa-pinterest-p"></i>
                      </a>

                      <a href="/team-details">
                        <i className="fab fa-instagram"></i>
                      </a>

                    </div>


                  </div>

                </div>



                <div className="team-two__content">

                  <h3 className="team-two__name">
                    <a href="/team-details">
                      {member.name}
                    </a>
                  </h3>

                  <p className="team-two__sub-title">
                    {member.role}
                  </p>

                </div>


              </div>

            </div>

          ))}

        </Slider>


      </div>

    </section>
  );
};


export default TeamTwo;