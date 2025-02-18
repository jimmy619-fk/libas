import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const items = [
  {
    image: "libasshoes1.svg",
    brand: "Louis Vuitton",
    name: "Louise",
    oldPrice: "1,818 USD",
    newPrice: "1,630 USD",
    size: "Medium",
    condition: "Unworn with tags",
    location: "Dubai",
    likes: 12,
  },
  {
    image: "libasshoes1.svg",
    brand: "Louis Vuitton",
    name: "Louise",
    oldPrice: "1,818 USD",
    newPrice: "1,630 USD",
    size: "Medium",
    condition: "Unworn with tags",
    location: "Dubai",
    likes: 8,
  },
  {
    image: "libasshoes1.svg",
    brand: "Louis Vuitton",
    name: "Louise",
    oldPrice: "1,818 USD",
    newPrice: "1,630 USD",
    size: "Medium",
    condition: "Unworn with tags",
    location: "Dubai",
    likes: 15,
  },
  {
    image: "libasshoes1.svg",
    brand: "Louis Vuitton",
    name: "Louise",
    oldPrice: "1,818 USD",
    newPrice: "1,630 USD",
    size: "Medium",
    condition: "Unworn with tags",
    location: "Dubai",
    likes: 10,
  },
  {
    image: "libasshoes1.svg",
    brand: "Louis Vuitton",
    name: "Louise",
    oldPrice: "1,818 USD",
    newPrice: "1,630 USD",
    size: "Medium",
    condition: "Unworn with tags",
    location: "Dubai",
    likes: 5,
  },
];

function Libasalsolike() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Slick Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 cards on large screens
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    touchThreshold: 90,
    responsive: [
      {
        breakpoint: 3200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200, // For Apple devices
        settings: {
          slidesToShow: 4, // Show 4 cards
        },
      },
      {
        breakpoint: 992, // Tablets
        settings: {
          slidesToShow: 3, // Show 3 cards
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2.5, // Show 2.5 cards
        },
      },
      {
        breakpoint: 480, // Small mobile
        settings: {
          slidesToShow: 2, // Show 2 cards
        },
      },
    ],
  };

  return (
    <div
      className="my-4  montserrat-font overflow-hidden"
      style={{
        margin: "0 auto",

        maxWidth: "89%",
      }}
    >
      <div
        className="you-may-also-like-top d-flex justify-content-between align-items-center w-100"
        style={{
          fontSize: "40px",
          marginTop: "25px",
        }}
      >
        <h3
          className="fw-bold also-like-heading m-0"
          style={{
            fontSize: "35px",
          }}
        >
          You May Also Like
        </h3>

        <div
          className="mb-0 "
          style={{
            cursor: "pointer",
          }}
        >
          <img
            src="viewallmobile.svg"
            alt="View All"
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <Slider {...settings}>
        {items.map((item, idx) => (
          <div key={idx} className="p-2 ">
            <div
              className="card border shadow-sm position-relative"
              style={{
                cursor: "pointer",
              }}
            >
              {/* Heart & Like Count */}
              <div
                className="position-absolute top-0 end-0 p-2 d-flex align-items-center"
                style={{
                  cursor: "pointer",
                  fontSize: "16px",
                  color: favorites[idx] ? "#C6AC96" : "#777",
                }}
                onClick={() => toggleFavorite(idx)}
              >
                <span
                  className="me-1"
                  style={{
                    cursor: "pointer",
                    fontSize: "16px",
                    color: "#777",
                  }}
                >
                  {item.likes}
                </span>
                {favorites[idx] ? (
                  <FaHeart style={{ color: "#C6AC96" }} />
                ) : (
                  <FaRegHeart style={{ color: "#8C8C8C" }} />
                )}
              </div>

              {/* Product Image */}
              <img
                src={item.image}
                className="card-img-top"
                alt="Product"
                style={{
                  marginTop: "15px",
                  height: "200px",
                  width: "70%",
                  margin: "0 auto",
                }}
              />

              {/* Product Info */}
              <div className="card-body text-start">
                <h5
                  className="card-title fw-medium mb-0"
                  style={{
                    fontSize: "24px",
                    color: "#262626",
                  }}
                  draggable="false"
                >
                  {item.brand}
                </h5>

                <p
                  className="card-text mb-0"
                  style={{
                    fontSize: "16px",
                    color: "#808080",
                    marginTop: "2px",
                  }}
                >
                  {item.name}
                </p>

                <p
                  className="card-oldprice mb-0"
                  style={{
                    fontSize: "14px",
                    color: "#262626",
                    marginTop: "9px",
                  }}
                >
                  <del>{item.oldPrice}</del>{" "}
                  <span
                    className="card-newprice"
                    style={{
                      fontSize: "18px",
                      color: "#A2191F",
                    }}
                  >
                    {item.newPrice}
                  </span>
                </p>

                {/* Size & Condition */}
                <div className="d-flex flex-column mb-0 size-cond">
                  <p
                    className="mb-0 size-cond"
                    style={{
                      color: "#808080",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                  >
                    {item.size}
                  </p>
                  <p
                    className="mb-0 size-cond"
                    style={{
                      color: "#808080",
                      fontWeight: "400",
                      fontSize: "16px",
                    }}
                  >
                    {item.condition}
                  </p>
                </div>

                <div className="d-flex  align-items-center gap-2 mt-1">
                  <img
                    src="/libasloc.svg"
                    alt=""
                    className="text-muted mb-0 mt-1"
                  />
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: "14px",
                      marginTop: "6px",
                    }}
                  >
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* For mobile side */}
      {/* <div
        className="mb-0 d-block text-center d-md-none"
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src="/viewallmobile.svg"
          alt="View All"
          style={{
            cursor: "pointer",
            marginTop: "20px",
          }}
        />
      </div> */}
    </div>
  );
}

export default Libasalsolike;
