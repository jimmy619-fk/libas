import React, { useState } from "react";
import { Carousel } from "react-bootstrap"; // Assuming you are using Bootstrap

function Libasproductsleftsidemobielslider({ images }) {
  const [mainImageIndex, setMainImageIndex] = useState(0); // Track index of main image

  const handleSelect = (selectedIndex) => {
    setMainImageIndex(selectedIndex); // Update image index when indicator is clicked
  };

  return (
    <div className="libas-mobile-slider-container">
      {/* Mobile Product Slider */}
      <div className="product-image-wrapper">
        {/* Carousel Slider for Mobile */}
        <Carousel
          indicators={false}
          controls={false}
          interval={null} // No auto-slide
          activeIndex={mainImageIndex} // Bind activeIndex to current selected image
          onSelect={handleSelect} // Handle image change
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image}
                alt={`Product Image ${index + 1}`}
                className="img-fluid product-image"
                style={{ height: "282px", width: "100%", objectFit: "contain" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Circle Indicators */}
        <div className="d-flex justify-content-center mt-3">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => handleSelect(index)} // On click, change to corresponding image
              style={{
                height: "12px",
                width: "12px",
                backgroundColor:
                  mainImageIndex === index ? "#C6AC96" : "#D3D3D3", // Active indicator color
                borderRadius: "50%",
                display: "inline-block",
                margin: "0 5px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Libasproductsleftsidemobielslider;
