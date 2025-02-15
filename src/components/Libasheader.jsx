import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Libasheader() {
  const menuItems = [
    "New Drops",
    "Designers",
    "Women",
    "Men",
    "Bags",
    "Shoes",
    "Vintage",
  ];

  return (
    <Navbar bg="white" expand="lg" className="navbar-web helvetica-font">
      <Container
        style={{ maxWidth: "90%" }}
        className="border-bottom p-0 pb-1 pt-1"
      >
        <div
          style={{ maxWidth: "90%", gap: "60px" }}
          className="d-flex mx-auto"
        >
          {menuItems.map((item, index) => (
            <motion.p
              key={index}
              initial={{ color: "#808080" }} // Default color
              whileHover={{ color: "#C6AC96" }} // Color on hover
              transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "13.45px",
                cursor: "pointer",
              }}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </Container>
    </Navbar>
  );
}

export default Libasheader;
