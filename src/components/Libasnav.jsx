import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Navbar,
  Container,
  Form,
  FormControl,
  Nav,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Libasnav() {
  const navigate = useNavigate();
  // State to toggle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* Main Navbar */}
      <Navbar bg="white" expand="lg" className="navbar-web">
        <Container
          style={{ maxWidth: "90%" }}
          className="border-bottom p-0 pb-3 pt-2 "
        >
          <Form
            className="d-flex flex-grow-1 me-4 search-field"
            style={{ maxWidth: "425px", height: "50px", position: "relative" }}
          >
            {/* search icon */}
            <img
              src="/libassearch.svg"
              alt="search icon"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            />
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 rounded-1"
              aria-label="Search"
              style={{
                paddingLeft: "35px",
                backgroundColor: "#F5F5F5",
                fontSize: "14px",
                color: "#808080",
              }}
            />
          </Form>

          {/* Libas logo centered */}
          <Navbar.Brand
            href="/"
            className="mx-auto position-absolute start-50 translate-middle-x"
          >
            <img
              src="/libaslogo.svg"
              alt="logo"
              className="navbar-brand-logo"
            />
          </Navbar.Brand>

          {/* Right Side Nav Links */}
          <Nav className="ms-auto d-flex align-items-center">
            <motion.button
              variant="light"
              className="me-2 border-0 helvetica-font sell-item-btn"
              style={{
                backgroundColor: "#C4A484",
                color: "white",
                height: "40px",
                fontSize: "16px",
                fontWeight: "400",
                borderRadius: "3px",
                width: "119px",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sell an item
            </motion.button>

            <Nav.Link
              href="#"
              className="me-2 montserrat-font nav-link-button"
              style={{ color: "#808080", fontSize: "16px", fontWeight: "400" }}
            >
              Sign in
            </Nav.Link>
            <Nav.Link
              href="#"
              className="montserrat-font nav-link-button"
              style={{ color: "#808080", fontSize: "16px", fontWeight: "400" }}
            >
              Sign Up
            </Nav.Link>
          </Nav>

          {/* Icons with spacing */}
          <div
            className="d-flex align-items-center"
            style={{ marginLeft: "20px" }}
          >
            <img
              src="/libascart.svg"
              alt="cart"
              className="hover-zoom"
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <img
              src="/libasprofile.svg"
              alt="profile"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Container>
      </Navbar>

      {/* mobile navbar and less than ipad pro */}
      <Navbar bg="white" expand="lg" className="navbar-mobile">
        <Container
          style={{ maxWidth: "100%" }}
          className="border-bottom p-3 pb-3 pt-2 "
        >
          {/* menu button */}
          <img
            src="/libasmenu.svg"
            alt="menu"
            onClick={toggleMenu} // Toggle menu on click
            style={{ cursor: "pointer" }}
          />
          {/* Libas logo centered */}
          <Navbar.Brand
            href="/"
            className="mx-auto position-absolute start-50 translate-middle-x"
          >
            <img
              src="/libaslogo.svg"
              alt="logo"
              className=""
              style={{
                width: "90px",
                height: "20px",
              }}
            />
          </Navbar.Brand>

          {/* Icons with spacing */}
          <div
            className="d-flex align-items-center"
            style={{ marginLeft: "20px" }}
          >
            <img
              src="/libascart.svg"
              alt="cart"
              className="hover-zoom"
              style={{ cursor: "pointer", width: "19px", height: "20px" }}
            />
          </div>
        </Container>
      </Navbar>

      {/* Mobile menu dropdown */}
      <div
        className={`mobile-menu helvetica-font  ${
          isMenuOpen ? "open" : "closed"
        }`} // Conditional classes based on state
      >
        <ul>
          <li>
            <a href="/" className="">
              Home
            </a>
          </li>
          <li>
            <a href="/sell">Sell an item</a>
          </li>
          <li>
            <a href="/sign-in">Sign In</a>
          </li>
          <li>
            <a href="/sign-up">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Libasnav;
