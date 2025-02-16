import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
function Brandpartners() {
  return (
    <footer
      style={{
        backgroundColor: "white",
        color: "#FFFFFF",
      }}
      className="montserrat-font d-none d-md-block mt-0"
    >
      <Container
        fluid
        className="py-5 px-4"
        style={{
          maxWidth: "95%",
        }}
      >
        <div>
          <p
            style={{
              color: "#808080",
              fontSize: "14px",
            }}
          >
            Except for brand-partner items, Libas International FZCO has no
            association and/or affiliation with the brands whose items are
            offered for sale on our platform.
            <br /> Except for brand-approved items, the authentication is
            performed independently by Libas International FZCO.
          </p>

          <img src="/banks.svg" alt="" />
        </div>
      </Container>
    </footer>
  );
}

export default Brandpartners;
