import React from "react";
import { motion } from "framer-motion";

function Lookingforsomethingelse() {
  return (
    <div
      className=" container"
      style={{
        margin: "0 auto",

        maxWidth: "90%",
      }}
    >
      <div
        className="text-center text-md-start  mt-4 montserrat-font"
        style={{
          backgroundColor: "#FFFBF7",
          padding: "20px",
          borderRadius: "3px",
          border: "1px solid rgba(198, 172, 150, 0.44)",
          maxWidth: "615px",
          textAlign: "left", // Align text to the start
        }}
      >
        <h5
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#777777",
          }}
        >
          Looking for something else?
        </h5>
        <p
          style={{
            fontSize: "14px",
            color: "#777777",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          Not the ideal size or color? Don’t worry! Get notified about similar
          listings and <br className="d-none d-md-block" /> never miss out on
          what you love!
        </p>
        <motion.button
          className="btn"
          style={{
            backgroundColor: "#C6AC96",
            color: "white",
            fontSize: "14px",

            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            width: "177px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Create an alert
        </motion.button>
      </div>
    </div>
  );
}

export default Lookingforsomethingelse;
