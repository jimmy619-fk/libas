import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Libasproductsleftsidemobielslider from "./Libasproductsleftsidemobielslider";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdClose, MdArrowBack, MdArrowForward } from "react-icons/md";

function Libasproduct() {
  // Array of product images
  const images = [
    "sample2.jpg",
    "libasshoes3.png",
    "libasshoes1.svg",
    "sample4.jpg",
    "sample1.jpg",
    "sample6.jpg",
    "sample2.jpg",
    "libasshoes3.png",
    "libasshoes1.svg",
    "sample4.jpg",
    "sample1.jpg",
    "sample6.jpg",
  ];

  // State for main image and modal
  const [mainImage, setMainImage] = useState(images[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = useState(5);

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
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);

    // Ensure the current image is visible in thumbnails
    if (newIndex < thumbnailIndex) {
      setThumbnailIndex(newIndex);
    } else if (newIndex >= thumbnailIndex + visibleThumbnails) {
      setThumbnailIndex(newIndex - visibleThumbnails + 1);
    }
  };
  // Navigate Right
  const nextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setMainImage(images[newIndex]);

    // Ensure the current image is visible in thumbnails
    if (newIndex < thumbnailIndex) {
      setThumbnailIndex(newIndex);
    } else if (newIndex >= thumbnailIndex + visibleThumbnails) {
      setThumbnailIndex(newIndex - visibleThumbnails + 1);
    }
  };

  // Handle thumbnail click
  const handleThumbnailClick = (image, index) => {
    setMainImage(image);
    setCurrentIndex(index + thumbnailIndex);
  };

  // Thumbnail navigation that changes the main image when arrows are clicked
  const nextThumbnail = () => {
    if (thumbnailIndex + visibleThumbnails < images.length) {
      // Update thumbnail slice
      const newThumbnailIndex = thumbnailIndex + 1;
      setThumbnailIndex(newThumbnailIndex);

      // Only update current image if we're using arrows to navigate thumbnails
      // Don't force image change when just scrolling thumbnails
    }
  };

  const prevThumbnail = () => {
    if (thumbnailIndex > 0) {
      // Update thumbnail slice
      const newThumbnailIndex = thumbnailIndex - 1;
      setThumbnailIndex(newThumbnailIndex);

      // Only update current image if we're using arrows to navigate thumbnails
      // Don't force image change when just scrolling thumbnails
    }
  };
  // ESC ,left and right keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) return;

      if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, currentIndex]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1114) {
  //       setVisibleThumbnails(5);
  //     } else {
  //       setVisibleThumbnails(5);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [visibleThumbnails]);

  // useEffect(() => {
  //   setVisibleThumbnails(window.innerWidth < 1114 ? 5 : 5);
  // }, []);

  return (
    <div
      className="container   product-detail-border"
      style={{
        maxWidth: "90%",
      }}
    >
      <div className="row ">
        {/* Left Section (Product Images)   */}
        <div className="col-md-6 libas-web-slider-container p-2">
          <div
            className="product-image-wrapper"
            style={{
              border: "0.5px solid #C6AC96",
            }}
          >
            {/* Main product image */}
            <div
              className="d-flex gap-3 justify-content-end "
              style={{
                marginRight: "5px",
                marginTop: "12px",
              }}
            >
              <img
                src="/libasring.svg"
                alt=""
                style={{
                  cursor: "pointer",
                  height: "20px",
                }}
              />
              <img
                src="/libasshare.svg"
                alt=""
                style={{
                  cursor: "pointer",
                  height: "20px",
                }}
              />
              <img
                src="/libasbandage.svg"
                alt=""
                style={{
                  cursor: "pointer",
                  height: "20px",
                }}
              />
              {/* Heart Icon with Like Count */}
              <div className="d-flex align-items-center gap-1 m-0 p-0">
                {/* Toggle between outlined and filled heart */}
                {isLiked ? (
                  <FaHeart
                    size={20}
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
                      height: "20px",
                    }}
                    onClick={() => setIsLiked(true)}
                  />
                )}

                <p
                  style={{
                    fontSize: "14px",
                    color: "#808080",
                    marginBottom: "0px",
                  }}
                  className="helvetica-font"
                >
                  16
                </p>
              </div>
            </div>

            {/* Left Product details Image section */}
            <div
              style={{
                position: "relative",
                width: "80%",
                margin: "0 auto",
              }}
            >
              {/* Left Arrow */}
              <img
                src="/leftnew.svg"
                alt=""
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "-30px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#C6AC96",
                  zIndex: 2,
                  height: "30px",
                }}
                onClick={() => {
                  prevImage();
                  // Ensure thumbnail index is updated to show current image
                  if (currentIndex < thumbnailIndex) {
                    setThumbnailIndex(Math.max(0, currentIndex - 2));
                  }
                }}
              />

              {/* Main Image */}
              <motion.img
                src={mainImage}
                alt="Main Product"
                className="img-fluid product-image"
                style={{
                  height: "460px",
                  objectFit: "contain",
                  cursor: "pointer",
                  marginTop: "2px ",
                  outline: "none",
                }}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(images.indexOf(mainImage))}
              />

              {/* Right Arrow */}
              <img
                src="/rightnew.svg"
                alt=""
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-30px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#C6AC96",
                  zIndex: 2,
                  height: "30px",
                }}
                onClick={() => {
                  nextImage();
                  // Ensure thumbnail index is updated to show current image
                  if (currentIndex >= thumbnailIndex + 4) {
                    setThumbnailIndex(
                      Math.min(images.length - 5, currentIndex - 2)
                    );
                  }
                }}
              />
            </div>
          </div>
          {/* bottom */}
          {/* Image Gallery Tiles */}
          <div
            className="d-flex align-items-center mt-3"
            style={{ justifyContent: "center", position: "relative" }}
          >
            {/* Thumbnails */}
            <div className="d-flex" style={{ gap: "12px" }}>
              {images
                .slice(thumbnailIndex, thumbnailIndex + visibleThumbnails)
                .map((image, index) => {
                  const actualIndex = index + thumbnailIndex;
                  return (
                    <img
                      id="thumnails-ipad"
                      key={actualIndex}
                      src={image}
                      alt={`Thumbnail ${actualIndex + 1}`}
                      className="img-fluid "
                      onClick={() => handleThumbnailClick(image, index)}
                      style={{
                        height: "119.1px",
                        width: "136px",
                        border:
                          currentIndex === actualIndex
                            ? "1px solid #C6AC96"
                            : "",
                        borderRadius: "5px",
                        cursor: "pointer",
                        opacity: currentIndex === actualIndex ? 1 : 0.5, // Reduce opacity for inactive images
                        filter:
                          currentIndex === actualIndex ? "none" : "blur(2px)", // Blur effect for inactive images
                        transition: "opacity 0.3s ease, filter 0.3s ease", // Smooth transition
                      }}
                    />
                  );
                })}
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

            {/* left arrow expand */}
            <img
              src="/leftexpand.svg"
              alt=""
              className="modal-arrow left-arrow"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
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
            {/* right arrow expand */}
            <img
              src="/rightexpand.svg"
              alt=""
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
            <div className="interest-pay d-flex align-items-center gap-2 mb-2 mx-auto">
              <span
                style={{
                  color: "#808080",
                  fontSize: "14px",
                  fontWeight: "400",
                  marginTop: "23px",
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
              className="seller-info seller-info-ipad d-none d-md-flex   flex-col align-items-center mb-3"
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
                src="/libasseller.svg"
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
                          height: "20px",
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
            <div
              className="seller-info seller-info-ipad d-flex d-md-none flex-col mb-3"
              style={{
                border: "1px solid #00000012",
                borderRadius: "5px",
                padding: "15px",
                maxWidth: "500px",
                marginBottom: "2px",
              }}
            >
              <div className="flex-col align-items-start w-100">
                <div className="d-flex align-items-start">
                  {/* Seller Profile Picture - Positioned at top left */}
                  <img
                    src="/libasseller.svg"
                    alt="Seller Profile"
                    className="rounded-circle"
                    style={{
                      height: "58px",
                      width: "58px",
                      marginRight: "10px",
                    }}
                  />

                  {/* Seller Information */}
                  <div style={{ flexGrow: 1, width: "100%" }}>
                    <div className="d-flex align-items-center">
                      <div className="mb-0 d-flex flex-column">
                        <div className="d-flex align-items-center">
                          <img
                            src="/libasverify.svg"
                            alt="Trusted Seller Icon"
                            style={{
                              height: "12px",
                              verticalAlign: "middle",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "10px",
                              fontWeight: "400",
                              color: "#C6AC96",
                              marginLeft: "2px",
                              marginBottom: "0px",
                              marginTop: "0px",
                            }}
                            className="mb-0"
                          >
                            Trusted Seller
                          </p>
                        </div>
                        <div>
                          <p
                            className="mb-0"
                            style={{
                              fontSize: "10px",
                              fontWeight: "500",
                              marginBottom: "0px",
                              color: "#262626",
                            }}
                          >
                            @mhijazi
                          </p>
                        </div>
                      </div>

                      {/* follow /contact */}
                      <div className="ms-auto d-flex align-items-center gap-1 mt-2 ">
                        <motion.button
                          className="btn helvetica-font"
                          style={{
                            fontSize: "8px",
                            fontWeight: "400",
                            borderRadius: "4px",
                            borderColor: "#D9D9D9",
                            color: "#777777",
                            padding: "7px 6px",
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Follow
                        </motion.button>
                        <motion.div
                          className="btn helvetica-font"
                          style={{
                            fontSize: "8px",
                            fontWeight: "400",
                            borderRadius: "4px",
                            outline: "none",
                            padding: "7px 6px",
                            backgroundColor: "#404040",
                            color: "#FFFFFF",
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Contact
                        </motion.div>
                      </div>
                    </div>

                    {/* Last active section */}
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginTop: "2px" }}
                    >
                      <div className="d-flex flex-column">
                        <p
                          style={{
                            fontSize: "8px",
                            fontWeight: "400",
                            color: "#808080",
                            marginBottom: "0px",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              height: "6px",
                              width: "6px",
                              borderRadius: "100%",
                              backgroundColor: "#3A9F64",
                              marginRight: "3px",
                            }}
                          ></span>
                          Last active today
                        </p>
                        <p
                          style={{
                            color: "#808080",
                            fontSize: "8px",
                            marginBottom: "2px",
                          }}
                        >
                          44 items sold
                        </p>
                        {/* Seller Location - */}
                        <div className="d-flex align-items-center mt-0">
                          <img
                            src="/libasloc.svg"
                            alt="Location Icon"
                            style={{
                              width: "6px",
                              height: "6px",
                              marginRight: "4px",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "8px",
                              fontWeight: "400",
                              color: "#262626",
                              marginBottom: "0",
                            }}
                          >
                            Lebanon
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating and See More on same line */}
                <div className="d-flex gap-3 align-items-center mt-2">
                  <div className="d-flex align-items-center">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src="/libasrate.svg"
                        alt="Rating"
                        style={{
                          height: "12px",
                          width: "12px",
                        }}
                      />
                    ))}
                    <p
                      className="mb-0 ms-1"
                      style={{
                        fontSize: "10px",
                        color: "#808080",
                      }}
                    >
                      (100)
                    </p>
                  </div>

                  {/* See More button - Adjacent to ratings */}
                  <button
                    style={{
                      backgroundColor: "#C6AC96",
                      color: "#fff",
                      width: "64px",
                      height: "28px",
                      borderRadius: "2px",
                      border: "none",
                      fontSize: "10px",
                      padding: "0 8px",
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
