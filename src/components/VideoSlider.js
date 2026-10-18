import React from "react";

const VideoSlider = () => {
  return (
    <div className="container-fluid p-0">
      <video
        className="w-100"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        style={{
          height: "500px",
          objectFit: "cover",
        }}
      >
        <source src="/images/slider/slider.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSlider;