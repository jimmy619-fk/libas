import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHandHoldingUsd, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

function CountOnUs() {
  const features = [
    {
      src: "/trust1.svg",
      title: "Unique Luxury Pieces",
      description:
        "Extensive luxury collection where each item is unique & high on fashion",
    },
    {
      src: "/trust2.svg",
      title: "Affordable Luxury",
      description:
        "Stellar luxury pieces at irresistible discounts & with installment purchase options",
    },
    {
      src: "/trust3.svg",
      title: "Trusted Platform",
      description:
        "Reliable and secure platform with 25,000+ creations having lifetime authenticity guarantee.",
    },
    {
      src: "/trust4.svg",
      title: "Help and Support",
      description: "What you see is what you get, else money back.",
    },
  ];

  return (
    <Container
      fluid
      className="montserrat-font py-5 text-center mt-3 d-none d-md-block"
      style={{
        backgroundColor: "#FBF5F0",
      }}
    >
      {/* Section Title */}
      <h2
        className="  mb-4"
        style={{
          fontWeight: "400",
          color: "#262626",
          fontSize: "32px",
        }}
      >
        You Can Always Count On Us
      </h2>

      {/* Features Grid */}
      <Row
        className="justify-content-center"
        style={{
          fontWeight: "400",
          color: "#262626",
          marginTop: "42px",
        }}
      >
        {features.map((feature, index) => (
          <Col
            key={index}
            md={6}
            lg={3}
            className="d-flex flex-column align-items-center text-center px-4 mb-4"
          >
            <img src={feature.src} alt="" />
            <h4
              className="mt-3 "
              style={{
                fontWeight: "400",
                color: "#262626",
                fontSize: "18px",
              }}
            >
              {feature.title}
            </h4>
            <p
              className="  mt-2"
              style={{
                fontWeight: "400",
                color: "#808080",
                fontSize: "11px",
              }}
            >
              {feature.description}
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CountOnUs;
