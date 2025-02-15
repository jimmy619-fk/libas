import React from "react";
import { FaHeart, FaBell, FaUser } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Container } from "react-bootstrap";

function Libasmobilefooter() {
  return (
    <div
      className="d-md-none fixed-bottom bg-white py-2 shadow-lg"
      style={{
        borderTop: "1px solid #E0E0E0",
      }}
    >
      <Container className="d-flex justify-content-between align-items-center px-4">
        {/* Home */}
        <div className="text-center">
          <img src="/home.svg" alt="" style={{ cursor: "pointer" }} />

          <p
            style={{
              fontSize: "12px",
              color: "#C6AC96",
              marginBottom: "0px",
              marginTop: "5px",
            }}
          >
            Home
          </p>
        </div>

        {/* Favorites */}
        <div className="text-center">
          <img src="/hear.svg" alt="" style={{ cursor: "pointer" }} />

          <p
            style={{
              fontSize: "12px",
              color: "#808080",
              marginBottom: "0px",
              marginTop: "5px",
            }}
          >
            Favorites
          </p>
        </div>

        {/* Sell (Highlighted in Brown) */}
        <div className="text-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              backgroundColor: "#C6AC96",
              width: "36px",
              height: "36px",
              margin: "0 auto",
              cursor: "pointer",
            }}
          >
            <AiOutlinePlus size={24} color="white" />
          </div>
          <p
            style={{
              fontSize: "12px",
              color: "#808080",
              marginBottom: "0px",
              marginTop: "5px",
            }}
          >
            Sell
          </p>
        </div>

        {/* Notifications */}
        <div className="text-center">
          <img src="/noti.svg" alt="" style={{ cursor: "pointer" }} />

          <p
            style={{
              fontSize: "12px",
              color: "#808080",
              marginBottom: "0px",
            }}
          >
            Notification
          </p>
        </div>

        {/* Me/Profile */}
        <div className="text-center">
          <img src="/user.svg" alt="" style={{ cursor: "pointer" }} />
          <p
            style={{
              fontSize: "12px",
              color: "#808080",
              marginBottom: "0px",
              marginTop: "5px",
            }}
          >
            Me
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Libasmobilefooter;
