import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Libasfooter() {
  // Define hover animation
  const hoverEffect = {
    scale: 1.2, // Slightly increase size on hover
    rotate: 5, // Rotate slightly
    transition: { duration: 0.2, ease: "easeInOut" },
  };
  return (
    <footer
      style={{
        backgroundColor: "#1E1E1E",
        color: "#FFFFFF",
      }}
      className="helvetica-font d-none d-md-block"
    >
      <Container
        fluid
        className="py-5 px-4"
        style={{
          maxWidth: "95%",
        }}
      >
        <Row className="gy-4 justify-content-between montserrat-font">
          {/* LIBAS Section */}
          <Col
            md={3}
            style={{
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            <img src="/libaslogowhite.svg" alt="" />
            <p
              className="mb-3"
              style={{
                marginTop: "15px",
                cursor: "pointer",
              }}
            >
              About Us
            </p>
            <p
              className="mb-3"
              style={{
                cursor: "pointer",
              }}
            >
              Affiliate Program
            </p>
            <p
              className="mb-0"
              style={{
                cursor: "pointer",
              }}
            >
              The Crypt
            </p>
          </Col>

          {/* Buy Section */}
          <Col md={2}>
            <h5
              className=""
              style={{
                fontSize: "24px",
                color: "#FFFFFF",
                fontWeight: "500",
              }}
            >
              Buy
            </h5>
            <p
              className="mb-3"
              style={{
                marginTop: "15px",
                cursor: "pointer",
              }}
            >
              Return Policy
            </p>
            <p
              className="mb-0"
              style={{
                cursor: "pointer",
              }}
            >
              Quality Control
            </p>
          </Col>

          {/* Sell Section */}
          <Col md={2}>
            <h5
              className=""
              style={{
                fontSize: "24px",
                color: "#FFFFFF",
                fontWeight: "500",
              }}
            >
              Sell
            </h5>
            <p
              className="mb-3"
              style={{
                marginTop: "15px",
                cursor: "pointer",
              }}
            >
              How to Sell
            </p>
          </Col>

          {/* Help Section */}
          <Col md={2}>
            <h5
              className=""
              style={{
                fontSize: "24px",
                color: "#FFFFFF",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Help
            </h5>
            <p
              className="mb-3"
              style={{
                marginTop: "15px",
                cursor: "pointer",
              }}
            >
              Help Center
            </p>
            <p className="mb-0">Contact Us</p>
          </Col>

          {/* Social Media */}
          <Col md={3} className="text-md-start">
            <p
              className="text-md-left"
              style={{
                fontSize: "24px",
                color: "#FFFFFF",
                fontWeight: "500",
              }}
            >
              Social Media
            </p>
            <div
              className="d-flex gap-3 justify-content-md-start"
              style={{ marginTop: "15px" }}
            >
              {/* Social Media Icons with Hover Animation */}
              {[
                "/fb.svg",
                "/insta.svg",
                "/twitter.svg",
                "/you.svg",
                "/tik.svg",
              ].map((icon, index) => (
                <motion.img
                  key={index}
                  src={icon}
                  alt={`Social Icon ${index}`}
                  whileHover={hoverEffect}
                  style={{ cursor: "pointer", width: "30px", height: "30px" }} // Adjust size
                />
              ))}
            </div>
          </Col>
        </Row>

        <hr className="mt-4" style={{ borderColor: "#555" }} />

        <Row className="  text-center text-md-start justify-content-center align-items-center montserrat-font">
          {/* Left Side: Text */}
          <Col
            md={9}
            className="text-md-start"
            style={{
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            <img
              src="usd.svg"
              alt="usd"
              className=""
              style={{
                marginRight: "6px",
              }}
            />
            <span className="me-3 ">United States ($ USD) • English US</span>
            <span
              className="me-3 terms-conditiopns"
              style={{
                marginLeft: "40px",
                cursor: "pointer",
              }}
            >
              Terms & Conditions
            </span>
            <span
              style={{
                cursor: "pointer",
              }}
            >
              Privacy Policy & Cookies
            </span>
          </Col>

          <Col
            md={3}
            className="text-md-end d-flex justify-content-end align-items-center"
          >
            <img
              src="appstore.svg"
              alt="App Store"
              style={{
                cursor: "pointer",
              }}
            />
            <img
              src="google.svg"
              alt="Google Play"
              style={{
                cursor: "pointer",
              }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Libasfooter;
