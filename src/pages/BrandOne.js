import React from "react";
import Slider from "react-slick";

const brands = [
  "/images/brand/brand-1-1.png",
  "/images/brand/brand-1-2.png",
  "/images/brand/brand-1-3.png",
  "/images/brand/brand-1-4.png",
  "/images/brand/brand-1-5.png",
  "/images/brand/brand-1-6.png",
];


const BrandOne = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <section className="brand-one">

      <div className="container">

        <Slider
          className="brand-one__carousel"
          {...settings}
        >

          {brands.map((brand, index) => (

            <div
              className="brand-one__single"
              key={index}
            >

              <div className="brand-one__single-inner">

                <a href="#">
                  <img
                    src={brand}
                    alt={`Brand ${index + 1}`}
                  />
                </a>

              </div>

            </div>

          ))}


        </Slider>

      </div>

    </section>
  );
};


export default BrandOne;