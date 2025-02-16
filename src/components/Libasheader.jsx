import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Libasheader() {
  const menuItems = [
    { name: "New Drops", link: "https://libas.ae/products?topic=newdrops&" },
    { name: "Designers", link: "https://libas.ae/brands" },
    {
      name: "Women",
      link: "https://libas.ae/products?gender=WFA967se7qX0jYtySgTj&",
    },
    {
      name: "Men",
      link: "https://libas.ae/products?gender=KG3s4pPk3arcBux5ERnD&",
    },
    {
      name: "Bags",
      link: "https://libas.ae/products?id=AqFLulu9y2m4mqEIkch1&",
    },
    {
      name: "Shoes",
      link: "https://libas.ae/products?id=WJmwaMSWxtl1dK1sPZ1x&",
    },
    { name: "Vintage", link: "https://libas.ae/products?topic=Vintage&" },
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
            <a
              key={index}
              href={item.link}
              style={{ textDecoration: "none" }} // Remove underline
            >
              <motion.p
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
                {item.name}
              </motion.p>
            </a>
          ))}
        </div>
      </Container>
    </Navbar>
  );
}

export default Libasheader;
