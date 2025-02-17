import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Libasheader() {
  const menuItems = [
    {
      name: "New Arrivals",
      link: "https://libas.ae/products?topic=newdrops&",
      color: "#808080",
    },
    { name: "Designers", link: "https://libas.ae/brands", color: "#808080" },
    {
      name: "Women",
      link: "https://libas.ae/products?gender=WFA967se7qX0jYtySgTj",
      color: "#808080",
    },
    {
      name: "Men",
      link: "https://libas.ae/products?gender=KG3s4pPk3arcBux5ERnD&",
      color: "#808080",
    },
    {
      name: "Just in Sight",
      link: "https://libas.ae/products?id=AqFLulu9y2m4mqEIkch1&",
      color: "#808080",
    },
    {
      name: "Vintage",
      link: "https://libas.ae/products?topic=Vintage",
      color: "#808080",
    },
    {
      name: "Bags",
      link: "https://libas.ae/products?id=AqFLulu9y2m4mqEIkch1&",
      color: "#808080",
    },
    {
      name: "Watches & Jewellery",
      link: "https://libas.ae/products?",
      color: "#808080",
    },
    {
      name: "Children",
      link: "https://libas.ae/products?gender=uw8UHRzTK2qlgU8Y4cVc&",
      color: "#808080",
    },
    {
      name: "Sale",
      link: "https://libas.ae/products?topic=pricedrops&",
      color: "#BC1010",
    },
  ];

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="navbar-web montserrat-font p-0 pt-2"
    >
      <Container
        style={{ maxWidth: "90%" }}
        className="border-bottom p-0 pb-1 pt-1"
      >
        <div
          style={{ maxWidth: "90%", gap: "46px" }}
          className="d-flex mx-auto header-font"
        >
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              style={{ textDecoration: "none" }} // Remove underline
            >
              <motion.p
                initial={{ color: item?.color }} // Default color
                whileHover={{ color: "#C6AC96" }} // Color on hover
                transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                className="header-font"
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
