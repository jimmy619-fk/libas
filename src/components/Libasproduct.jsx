import React, { useState } from "react";
import { motion } from "framer-motion";
import Libasproductsleftsidemobielslider from "./Libasproductsleftsidemobielslider";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdClose, MdArrowBack, MdArrowForward } from "react-icons/md";

function Libasproduct() {
  // Array of product images
  const images = [
    "libasshoes3.png",
    "libasshoes1.svg",
    "sample4.jpg",
    "sample1.jpg",
    "sample2.jpg",
    "sample6.jpg",
  ];

  // State for main image and modal
  const [mainImage, setMainImage] = useState(images[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  // Open Modal
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate Left
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate Right
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const visibleThumbnails = 4; // Number of thumbnails visible at a time

  const nextThumbnail = () => {
    if (thumbnailIndex + visibleThumbnails < images.length) {
      setThumbnailIndex(thumbnailIndex + 1);
    }
  };

  const prevThumbnail = () => {
    if (thumbnailIndex > 0) {
      setThumbnailIndex(thumbnailIndex - 1);
    }
  };
  return (
    <div
      className="container  mt-2 border-top product-detail-border"
      style={{
        maxWidth: "90%",
      }}
    >
      <div className="row">
        {/* Left Section (Product Images)   */}
        <div className="col-md-6 libas-web-slider-container">
          <div className="product-image-wrapper">
            {/* Main product image */}
            <div
              className="d-flex gap-3 justify-content-end "
              style={{ marginRight: "5px", marginTop: "12px" }}
            >
              <img
                src="/libasring.svg"
                alt=""
                style={{
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src="/libasshare.svg"
                alt=""
                style={{
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src="/libasbandage.svg"
                alt=""
                style={{
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              {/* Heart Icon with Like Count */}
              <div className="d-flex align-items-center gap-1 m-0 p-0">
                {/* Toggle between outlined and filled heart */}
                {isLiked ? (
                  <FaHeart
                    size={30}
                    color="#C6AC96"
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsLiked(false)}
                  />
                ) : (
                  <img
                    src="/heart.svg"
                    alt=""
                    style={{
                      cursor: "pointer",

                      height: "27px",
                    }}
                    onClick={() => setIsLiked(true)}
                  />
                )}

                <p
                  style={{
                    fontSize: "22px",
                    color: "#808080",
                    marginBottom: "0px",
                  }}
                  className="helvetica-font"
                >
                  16
                </p>
              </div>
            </div>
            <motion.img
              src={mainImage}
              alt="Main Product"
              className="img-fluid product-image"
              style={{
                height: "500px",
                width: "100%",
                objectFit: "contain",
                cursor: "pointer",
                marginTop: "2px",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(images.indexOf(mainImage))}
            />
            {/* Image Gallery with Left/Right Arrows */}
            <div
              className="d-flex align-items-center mt-3"
              style={{ justifyContent: "center", position: "relative" }}
            >
              {/* Left Arrow */}
              {thumbnailIndex > 0 && (
                <MdArrowBack
                  size={30}
                  style={{
                    cursor: "pointer",
                    color: "#C6AC96",
                    marginRight: "10px",
                  }}
                  onClick={prevThumbnail}
                />
              )}

              {/* Thumbnails */}
              <div className="d-flex" style={{ gap: "10px" }}>
                {images
                  .slice(thumbnailIndex, thumbnailIndex + visibleThumbnails)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="img-fluid"
                      onClick={() => setMainImage(image)}
                      style={{
                        height: "90px",
                        width: "90px",
                        border: mainImage === image ? "2px solid #C6AC96" : "",
                        cursor: "pointer",
                      }}
                    />
                  ))}
              </div>

              {/* Right Arrow */}
              {thumbnailIndex + visibleThumbnails < images.length && (
                <MdArrowForward
                  size={30}
                  style={{
                    cursor: "pointer",
                    color: "#C6AC96",
                    marginLeft: "10px",
                  }}
                  onClick={nextThumbnail}
                />
              )}
            </div>
          </div>
        </div>

        {/* Full-Screen Modal */}
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="full-screen-modal"
            onClick={closeModal}
          >
            <MdClose
              size={40}
              className="modal-close-icon"
              onClick={closeModal}
            />
            <MdArrowBack
              size={50}
              className="modal-arrow left-arrow"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            />
            <motion.img
              src={images[currentIndex]}
              alt="Full View"
              className="modal-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing on image click
            />
            <MdArrowForward
              size={50}
              className="modal-arrow right-arrow"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            />
          </motion.div>
        )}

        {/* Left side for mobile */}
        <Libasproductsleftsidemobielslider images={images} />

        {/* Right Section (Product Info) */}
        <div
          className="col-lg-6 product-right"
          style={{ backgroundColor: "#FCFAF9" }}
        >
          <div
            className="product-info montserrat-font product-right-side"
            style={{
              paddingTop: "30px",
              paddingLeft: "73px",
            }}
          >
            <h2
              className="product-right-heading  product-right-heading-mobile mb-0"
              style={{
                fontSize: "40px",
                fontWeight: "500",
                color: "#262626",
              }}
            >
              Saint Laurent
            </h2>
            <p
              style={{ fontSize: "22px", fontWeight: "400", color: "#808080" }}
              className="product-right-side-subheading mb-0"
            >
              Studded Ankle Boots
            </p>
            <div
              className="price product-right-side-price"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#404040",
                  textDecoration: "line-through",
                }}
              >
                411 USD
              </span>
              <span
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                  color: "#BC1010",
                  marginLeft: "15px",
                }}
              >
                311 USD
              </span>
              <img
                src="/info2.svg"
                alt=""
                style={{
                  cursor: "pointer",
                  marginLeft: "7px",
                }}
              />
            </div>
            <div
              className="col"
              style={{
                marginTop: "17px",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#808080",
                  lineHeight: "29.26px",
                  margin: "0", // Removing the default margin
                }}
              >
                EU 39
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "#808080",
                  lineHeight: "24.38px",
                  margin: "0", // Removing the default margin
                }}
              >
                Very Good
              </p>
            </div>
            {/* authentication */}
            <div
              className=" d-flex align-items-center gap-2 authentication"
              style={{
                marginTop: "32px",
                border: "1px solid #C6AC96",
                borderRadius: "8px",
                maxWidth: "445px",
                height: "64px",
                padding: "7px",
                backgroundColor: "#FCFAF9",
              }}
            >
              <img src="/libasauth.svg" alt="Physical Authentication" />
              <div>
                <p
                  className="auth"
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#1F1F1F",
                    lineHeight: "11px",
                    margin: "0",
                  }}
                >
                  PHYSICAL AUTHENTICATION INCLUDED
                </p>
                <p
                  className="auth-2"
                  style={{
                    fontSize: "12px",
                    fontWeight: "300",
                    color: "#777777",
                    margin: "0",
                  }}
                >
                  Physical control and authentication by our expert.{" "}
                  <a
                    href="#"
                    style={{
                      color: "#C6AC96",
                      textDecoration: "underline",
                      fontSize: "13px",
                    }}
                  >
                    learn more
                  </a>
                </p>
              </div>
            </div>
            {/* Add to Bag and Make an Offer section */}
            <div
              className=" d-flex align-items-center"
              style={{
                marginTop: "25px",
              }}
            >
              <motion.button
                className="me-3 product-right-side-add-to-bag"
                style={{
                  backgroundColor: "#5C5C5C",
                  color: "#fff",
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: "500",
                  width: "287px",
                  height: "50px",
                  borderRadius: "1px",
                  border: "none",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Bag
              </motion.button>
              <motion.button
                className="btn product-right-side-make-an-offer"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #808080",
                  color: "#808080",
                  padding: "10px 20px",
                  fontSize: "16px",
                  fontWeight: "500",
                  width: "192px",
                  height: "50px",
                  borderRadius: "1px",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Make an Offer
              </motion.button>
            </div>
            {/* Tabby Payment Info */}
            <div className="d-flex align-items-center gap-2 mb-2 mx-auto">
              <span
                style={{
                  color: "#808080",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "28px",
                }}
              >
                4 interest - free payments of ~ 79 USD with
              </span>
              <img
                src="/tabby.svg"
                alt="Tabby"
                style={{
                  verticalAlign: "middle",
                  marginBottom: "0",
                  marginTop: "20px",
                }}
              />
              <img
                src="/info.svg"
                alt="Information"
                style={{
                  cursor: "pointer",
                  verticalAlign: "middle",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* seller */}
            <div
              className="seller-info d-none d-md-flex mt-3  flex-col align-items-center "
              style={{
                border: "1px solid #00000012",
                borderRadius: "5px",
                padding: "15px",
                maxWidth: "500px",
                marginBottom: "2px",
              }}
            >
              {/* Seller Profile Picture */}
              <img
                src="/libasseller.svg" // Placeholder for seller profile image
                alt="Seller Profile"
                className="rounded-circle"
                style={{
                  height: "100px",
                  width: "100px",
                }}
              />

              {/* Seller Information */}
              <div className="ms-2 " style={{ flexGrow: 1 }}>
                <div className="d-flex align-items-center">
                  <div className="mb-0 d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src="/libasverify.svg"
                        alt="Trusted Seller Icon"
                        style={{
                          height: "20px", // Adjust image height
                          verticalAlign: "middle",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#C6AC96",
                          marginLeft: "4px", // Add some space between the image and the text
                          marginBottom: "0px", // Ensure no bottom margin
                          marginTop: "0px", // Ensure no top margin
                        }}
                        className="mb-0 Trusted"
                      >
                        Trusted Seller
                      </p>
                    </div>
                    <div>
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "0px", // Remove bottom margin for 0 gap
                          color: "#262626",
                        }}
                      >
                        @mhijazi
                      </p>
                    </div>
                  </div>

                  {/* Buttons aligned to the right */}
                  <div className="ms-auto d-flex align-items-center gap-2 mobile-hidee">
                    <motion.button
                      className="btn helvetica-font mobile-hidee"
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        borderRadius: "3px",
                        borderColor: "#D9D9D9",
                        color: "#777777",
                        width: "70px",
                        height: "35px",
                      }}
                      whileHover={{ scale: 1.05 }} // Slight scale up on hover
                      whileTap={{ scale: 0.95 }}
                    >
                      Follow
                    </motion.button>
                    <motion.button
                      className="btn helvetica-font mobile-hidee"
                      style={{
                        fontSize: "12px",
                        fontWeight: "400",
                        borderRadius: "3px",
                        width: "70px",
                        height: "35px",
                        backgroundColor: "#404040",
                        color: "#FFFFFF",
                      }}
                      whileHover={{ scale: 1.05 }} // Slight scale up on hover
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact
                    </motion.button>
                  </div>
                </div>

                {/* Last active section */}
                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "17px" }}
                >
                  <div className="d-flex flex-column">
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: "400",
                        color: "#808080",
                        marginBottom: "2px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          height: "9px",
                          width: "9px",
                          borderRadius: "50%",
                          backgroundColor: "#3A9F64",
                          marginRight: "5px",
                        }}
                      ></span>
                      Last active today
                    </p>
                    <p
                      style={{
                        color: "#808080",
                        fontSize: "11px",
                      }}
                    >
                      44 items sold
                    </p>
                  </div>

                  {/* Rating & See More section for desktop */}
                  <div className="d-none d-md-flex flex-column m-0 p-0 ">
                    <div
                      className="d-flex align-items-center"
                      style={{
                        marginRight: "10px",
                      }}
                    >
                      <img src="/libasrate.svg" alt="Rating" />
                      <img src="/libasrate.svg" alt="Rating" />
                      <img src="/libasrate.svg" alt="Rating" />
                      <img src="/libasrate.svg" alt="Rating" />
                      <img src="/libasrate.svg" alt="Rating" />
                      <p className="mb-0 ms-2">(100)</p>
                    </div>
                    <motion.button
                      className="mt-2"
                      style={{
                        backgroundColor: "#C6AC96",
                        color: "#fff",
                        width: "64px",
                        height: "28px",
                        borderRadius: "2px",
                        border: "none",
                        fontSize: "10px",
                      }}
                      whileHover={{ scale: 1.05 }} // Slight scale up on hover
                      whileTap={{ scale: 0.95 }}
                    >
                      See More
                    </motion.button>
                  </div>
                </div>

                {/* Seller Location */}
                <div className="d-flex align-items-center">
                  <img
                    src="/libasloc.svg"
                    alt="Location Icon"
                    style={{
                      width: "14px",
                      height: "14px",
                      marginRight: "4px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#262626",
                      marginBottom: "0",
                    }}
                  >
                    Lebanon
                  </p>
                </div>

                {/* Mobile-only rating section at the bottom */}
                <div className="d-flex d-md-none flex-column mt-2">
                  <div className="d-flex align-items-center">
                    <img src="/libasrate.svg" alt="Rating" />
                    <img src="/libasrate.svg" alt="Rating" />
                    <img src="/libasrate.svg" alt="Rating" />
                    <img src="/libasrate.svg" alt="Rating" />
                    <img src="/libasrate.svg" alt="Rating" />
                    <p className="mb-0 ms-2">(100)</p>
                  </div>
                  <button
                    className="mt-2"
                    style={{
                      backgroundColor: "#C6AC96",
                      color: "#fff",
                      width: "64px",
                      height: "28px",
                      borderRadius: "2px",
                      border: "none",
                      fontSize: "10px",
                    }}
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
            {/* seller for mobile */}
            <div className="d-flex d-md-none flex-column align-items-center ">
              {/* Seller Profile Picture */}
              <img
                src="/libasseller.svg"
                alt="Seller Profile"
                className="rounded-circle"
                style={{ marginBottom: "15px", marginTop: "20px" }}
              />

              {/* Seller Information */}
              <div className="w-100">
                {/* Trusted Badge & Username */}
                <div className="text-center">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <img
                      src="/libasverify.svg"
                      alt="Trusted Seller Icon"
                      style={{ height: "20px" }}
                    />
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#C6AC96",
                        marginLeft: "10px",
                        marginBottom: "0",
                      }}
                    >
                      Trusted Seller
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#262626",
                      marginBottom: "17px",
                    }}
                  >
                    @mhijazi
                  </p>
                </div>
                <div
                  className="justify-content-center  d-flex align-items-center gap-2"
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <motion.button
                    className="btn helvetica-font "
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      borderRadius: "3px",
                      borderColor: "#D9D9D9",

                      color: "#777777",
                      width: "81px",
                      height: "35px",
                    }}
                    whileHover={{ scale: 1.05 }} // Slight scale up on hover
                    whileTap={{ scale: 0.95 }}
                  >
                    Follow
                  </motion.button>
                  <motion.button
                    className="btn helvetica-font"
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      borderRadius: "3px",
                      width: "81px",
                      height: "35px",
                      backgroundColor: "#404040",
                      color: "#FFFFFF",
                    }}
                    whileHover={{ scale: 1.05 }} // Slight scale up on hover
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </motion.button>
                </div>
                {/* Activity Status & Items Sold */}
                <div className="text-center mb-3">
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "2px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        height: "9px",
                        width: "9px",
                        borderRadius: "50%",
                        backgroundColor: "#3A9F64",
                        marginRight: "5px",
                      }}
                    ></span>
                    Last active today
                  </p>
                  <p
                    style={{
                      color: "#808080",
                      fontSize: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    44 items sold
                  </p>
                </div>

                {/* Location */}
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <img
                    src="/libasloc.svg"
                    alt="Location Icon"
                    style={{
                      width: "14px",
                      height: "14px",
                      marginRight: "4px",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#262626",
                      marginBottom: "0",
                    }}
                  >
                    Lebanon
                  </p>
                </div>

                {/* Rating */}
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex align-items-center">
                    <img src="/libasrate.svg" alt="Rating" />
                    <img src="/libasrate.svg" alt="Rating" />
                    <img src="/libasrate.svg" alt="Rating" />
                    <img src="/libasrate.svg" alt="Rating" />
                    <img src="/libasrate.svg" alt="Rating" />
                    <p
                      className="mb-0 ms-2"
                      style={{ fontSize: "12px", color: "#808080" }}
                    >
                      (100)
                    </p>
                  </div>
                  <button
                    className="mt-2 mb-3"
                    style={{
                      backgroundColor: "#C6AC96",
                      color: "#fff",
                      width: "70px",
                      height: "28px",
                      borderRadius: "2px",
                      border: "none",
                      fontSize: "10px",
                    }}
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Libasproduct;
