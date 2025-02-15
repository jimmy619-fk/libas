import React from "react";

function Lookingforsomethingelse() {
  return (
    <div className="container ">
      <div
        className=" mt-4 montserrat-font"
        style={{
          backgroundColor: "#FFFBF7",
          padding: "20px",
          borderRadius: "3px",
          border: "1px solid rgba(198, 172, 150, 0.44)",
          maxWidth: "615px",
          textAlign: "left", // Align text to the start
          marginLeft: "0px", // Align container to the start
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
          listings and <br /> never miss out on what you love!
        </p>
        <button
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
        >
          Create an alert
        </button>
      </div>
    </div>
  );
}

export default Lookingforsomethingelse;
