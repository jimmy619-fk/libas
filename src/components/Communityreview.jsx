import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Communityreview() {
  return (
    <div className="p-3">
      <div
        className="container mt-3 montserrat-font "
        style={{
          border: "1px solid #D2D2D2",
          borderRadius: "6px",
          padding: "24px",
          margin: "0 auto",

          maxWidth: "91%",
        }}
      >
        {/* Community Reviews Heading */}
        <h3
          className=""
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#262626",
          }}
        >
          Community Reviews
        </h3>
        <p
          className=""
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#D2D2D2",
            marginTop: "20px",
          }}
        >
          No Reviews
        </p>

        {/* Community Comments Section */}
        <h5
          className=""
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#262626",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          Community Comments
        </h5>

        {/* Comment 1 */}
        <div className="d-flex flex-column gap-2 mt-3">
          {/* Avatar and Username */}
          <div className="d-flex align-items-center gap-3">
            {/* User Avatar */}
            <div
              className="avatar-product rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                width: "98px",
                height: "98px",
                backgroundColor: "#C6AC96",
                color: "white",
                fontSize: "36px",
                fontWeight: "bold",
              }}
            >
              L
            </div>

            {/* Username */}
            <p className="mb-0 " style={{ fontSize: "24px", color: "#1F1F1F" }}>
              @Libas
            </p>
          </div>

          {/* Comment Text and Reply */}
          <div
            className="d-flex flex-column gap-2"
            style={{
              marginTop: "13px",
            }}
          >
            {/* Message */}
            <p
              className="mb-0 text-muted"
              style={{
                fontSize: "17px",
                wordBreak: "break-word",
                lineHeight: "1.5",
                color: "#777777",
              }}
            >
              Thank you for posting this beautiful piece. We wish you a
              successful sale! 😊
            </p>

            {/* Reply Button */}
            <p
              className="text-decoration-underline"
              style={{
                cursor: "pointer",
                fontSize: "18px",
                color: "#C6AC96",
                fontWeight: "500",
                fontWeight: "medium",
              }}
            >
              Reply
            </p>
          </div>
        </div>

        {/* Comment 2 */}
        <div className="d-flex flex-column gap-2 mt-3">
          {/* Avatar and Username */}
          <div className="d-flex align-items-center gap-3">
            {/* User Avatar */}
            <div
              className="avatar-product rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                width: "98px",
                height: "98px",
                backgroundColor: "#C6AC96",
                color: "white",
                fontSize: "36px",
                fontWeight: "bold",
              }}
            >
              L
            </div>

            {/* Username */}
            <p className="mb-0 " style={{ fontSize: "24px", color: "#1F1F1F" }}>
              @Libas
            </p>
          </div>

          {/* Comment Text and Reply */}
          <div
            className="d-flex flex-column gap-2"
            style={{
              marginTop: "13px",
            }}
          >
            {/* Message */}
            <p
              className="mb-0 text-muted"
              style={{
                fontSize: "17px",
                wordBreak: "break-word",
                lineHeight: "1.5",
                color: "#777777",
              }}
            >
              Thank you for posting this beautiful piece. We wish you a
              successful sale! 😊
            </p>

            {/* Reply Button */}
            <p
              className="text-decoration-underline"
              style={{
                cursor: "pointer",
                fontSize: "18px",
                color: "#C6AC96",
                fontWeight: "500",
                fontWeight: "medium",
              }}
            >
              Reply
            </p>
          </div>
        </div>

        {/* Leave a Comment Section */}
        <h6
          className="mt-4 "
          style={{
            color: "#1F1F1F",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          Leave a Comment
        </h6>
        <textarea
          className="form-control mt-2"
          rows="3"
          placeholder="Write a Comment"
          style={{ borderRadius: "4px", fontSize: "14px" }}
        ></textarea>
        <motion.button
          className=" mt-4"
          style={{
            backgroundColor: "#C6AC96",
            color: "white",
            fontSize: "14px",
            fontWeight: "500",
            width: "218px",
            height: "40px",
            borderRadius: "4px",
            border: "0",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </div>
    </div>
  );
}

export default Communityreview;
