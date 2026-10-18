
import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Images,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

const galleryImages = [
{ id: 1, src: "/images/gallery/1.jpeg", title: "" },
{ id: 2, src: "/images/gallery/2.jpeg", title: "" },
{ id: 3, src: "/images/gallery/3.jpeg", title: "" },
{ id: 4, src: "/images/gallery/4.jpeg", title: "" },
{ id: 5, src: "/images/gallery/5.jpeg", title: "" },
{ id: 6, src: "/images/gallery/6.jpeg", title: "" },
{ id: 7, src: "/images/gallery/7.jpeg", title: "" },
{ id: 8, src: "/images/gallery/8.jpeg", title: "" },
{ id: 9, src: "/images/gallery/9.jpeg", title: "" },
{ id: 10, src: "/images/gallery/10.jpeg", title: "" },
{ id: 11, src: "/images/gallery/11.jpeg", title: "" },
{ id: 12, src: "/images/gallery/12.jpeg", title: "" },
{ id: 13, src: "/images/gallery/13.jpeg", title: "" },
{ id: 14, src: "/images/gallery/14.jpeg", title: "" },
{ id: 15, src: "/images/gallery/15.jpeg", title: "" },
{ id: 16, src: "/images/gallery/16.jpeg", title: "" },
{ id: 17, src: "/images/gallery/17.jpeg", title: "" },
{ id: 18, src: "/images/gallery/18.jpeg", title: "" },
{ id: 19, src: "/images/gallery/19.jpeg", title: "" },
{ id: 20, src: "/images/gallery/20.jpeg", title: "" },
{ id: 21, src: "/images/gallery/21.jpeg", title: "" },
{ id: 22, src: "/images/gallery/22.jpeg", title: "" },
{ id: 23, src: "/images/gallery/23.jpeg", title: "" },
{ id: 24, src: "/images/gallery/24.jpeg", title: "" },
{ id: 25, src: "/images/gallery/25.jpeg", title: "" },
{ id: 26, src: "/images/gallery/26.jpeg", title: "" },
{ id: 27, src: "/images/gallery/27.jpeg", title: "" },
{ id: 28, src: "/images/gallery/28.jpeg", title: "" },
{ id: 29, src: "/images/gallery/29.jpeg", title: "" },
{ id: 30, src: "/images/gallery/30.jpeg", title: "" },

];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const touchStart = useRef(null);

  const isOpen = activeIndex !== null;

  const openGallery = (index) => {
    setDirection("next");
    setActiveIndex(index);
  };

  const closeGallery = () => {
    setActiveIndex(null);
  };

  const nextImage = () => {
    setDirection("next");
    setActiveIndex((prev) =>
      (prev + 1) % galleryImages.length
    );
  };

  const prevImage = () => {
    setDirection("prev");
    setActiveIndex((prev) =>
      (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeGallery();

      if (e.key === "ArrowRight") {
        setDirection("next");
        setActiveIndex((prev) =>
          (prev + 1) % galleryImages.length
        );
      }

      if (e.key === "ArrowLeft") {
        setDirection("prev");
        setActiveIndex((prev) =>
          (prev - 1 + galleryImages.length) %
          galleryImages.length
        );
      }
    };

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;

    const distance =
      e.changedTouches[0].clientX - touchStart.current;

    if (Math.abs(distance) > 50) {
      if (distance < 0) nextImage();
      else prevImage();
    }

    touchStart.current = null;
  };

  return (
    <>


   <section className="page-banner">
                <div className="page-banner-container">
                    <h2>
                      Gallery
                    </h2>
                </div>
            </section>


      <section className="premium-gallery py-5">
        <div className="container">
          {/* <div className="gallery-heading text-center mb-5">
            <span className="gallery-subtitle">
              <Images size={17} />
              OUR COLLECTION
            </span>

            <h2>Our Photo Gallery</h2>

            <p>
              Explore our beautiful collection of travel
              experiences and memorable journeys.
            </p>
          </div> */}

          {/* Bootstrap 3 Column Gallery */}
          <div className="row g-4">
            {galleryImages.map((image, index) => (
              <div
                className="col-12 col-sm-6 col-md-4"
                key={image.id}
              >
                <button
                  type="button"
                  className="gallery-card"
                  onClick={() => openGallery(index)}
                  aria-label={`View ${image.title}`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                  />

                  <div className="gallery-overlay">
                    <div className="gallery-card-info">
                      <h4>{image.title}</h4>
                      <span>View Photo</span>
                    </div>

                    <div className="gallery-zoom">
                      <ZoomIn size={23} />
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Image Popup */}
      {isOpen && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeGallery();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="lightbox-topbar">
            <span className="lightbox-counter">
              {activeIndex + 1} / {galleryImages.length}
            </span>

            <button
              type="button"
              className="lightbox-close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <X size={26} />
            </button>
          </div>

          <button
            type="button"
            className="lightbox-arrow lightbox-prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="lightbox-content">
            <div
              key={activeIndex}
              className={`lightbox-slide slide-${direction}`}
            >
              <img
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].title}
              />
            </div>

            <h3 className="lightbox-title">
              {galleryImages[activeIndex].title}
            </h3>
          </div>

          <button
            type="button"
            className="lightbox-arrow lightbox-next"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>

          {/* Bottom Thumbnail Slider */}
          <div className="lightbox-thumbnails">
            {galleryImages.map((image, index) => (
              <button
                type="button"
                key={image.id}
                className={`lightbox-thumb ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => {
                  setDirection(
                    index < activeIndex ? "prev" : "next"
                  );
                  setActiveIndex(index);
                }}
                aria-label={`View ${image.title}`}
                aria-current={
                  index === activeIndex ? "true" : undefined
                }
              >
                <img src={image.src} alt={image.title} />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
