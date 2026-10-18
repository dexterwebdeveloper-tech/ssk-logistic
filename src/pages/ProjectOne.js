import React from "react";
import Slider from "react-slick";

const projects = [
  {
    image: "/images/project/project-1-1.jpg",
    title: "Quality Equipment",
  },
  {
    image: "/images/project/project-1-2.jpg",
    title: "International Shipping",
  },
  {
    image: "/images/project/project-1-3.jpg",
    title: "Safety Guaranteed",
  },
  {
    image: "/images/project/project-1-4.jpg",
    title: "Product Distribution",
  },
];


const ProjectOne = () => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,

    slidesToShow: 3,
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
    <section className="project-one project-two" id="projects">

      <div className="container">

        <div className="project-one__top">

          <div className="section-title text-left">

            <h6 className="section-title__tagline">
              SEE OUR PORTFOLIO
            </h6>

            <h3 className="section-title__title">
              Explore Our <span>Recent Work</span>
            </h3>

          </div>


          <div className="project-one__btn-box">
            <a href="/projects" className="thm-btn">
              View All Projects
            </a>
          </div>

        </div>


        <Slider {...settings}>

          {projects.map((project, index) => (

            <div className="item" key={index}>

              <div className="project-one__single">

                <div className="project-one__img-box">

                  <div className="project-one__img">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                  </div>


                  <div className="project-one__content">

                    <div className="project-one__title-box">

                      <p className="project-one__sub-title">
                        Logistics
                      </p>

                      <h3 className="project-one__title">
                        <a href="/project-details">
                          {project.title}
                        </a>
                      </h3>

                    </div>


                    <div className="project-one__arrow">

                      <a href={project.image}>
                        <span className="icon-right-arrow"></span>
                      </a>

                    </div>

                  </div>


                </div>

              </div>

            </div>

          ))}

        </Slider>


      </div>

    </section>
  );
};


export default ProjectOne;