import React, { useState } from "react";
import { motion } from "framer-motion";
function Libasproductaccordion() {
  // State to manage which sections are open
  const [openSection, setOpenSection] = useState(null);

  // Toggle the sections
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null); // Close if it's already open
    } else {
      setOpenSection(section); // Open the clicked section
    }
  };
  return (
    <div className="quality-section montserrat-font mt-3 mt-md-0 quality-control-right-section-mobile w-100">
      {/* Quality Control Section */}
      <div className="mb-4 ">
        <button
          className="w-100 d-flex justify-content-between align-items-center px-4 py-3 fs-5 fs-md-4  "
          style={{
            fontWeight: "400",
            backgroundColor: "#FFFBF7",
            border: "1px solid #F0F0F0",
          }}
          onClick={() => toggleSection("quality")}
        >
          <span
            className="text-dark"
            style={{
              fontSize: "18px",
            }}
          >
            Quality Control
          </span>
          <span
            className="d-flex align-items-center justify-content-center   text-white"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#C6AC96",
            }}
          >
            {openSection === "quality" ? "−" : "+"}
          </span>
        </button>
        {openSection === "quality" && (
          <div className="p-4 mt-2 border rounded bg-white">
            <p>Amazing Quality!@</p>
          </div>
        )}
      </div>

      {/* Return Policy Section */}
      <div className="mb-4">
        <button
          className="w-100 d-flex justify-content-between align-items-center px-4 py-3 fs-5 fs-md-4   "
          style={{
            fontWeight: "400",
            backgroundColor: "#FFFBF7",
            border: "1px solid #F0F0F0",
          }}
          onClick={() => toggleSection("Return Policy")}
        >
          <span
            className="text-dark"
            style={{
              fontSize: "18px",
            }}
          >
            Return Policy
          </span>
          <span
            className="d-flex align-items-center justify-content-center   text-white"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#C6AC96",
            }}
          >
            {openSection === "Return Policy" ? "−" : "+"}
          </span>
        </button>
        {openSection === "Return Policy" && (
          <div className="p-4 mt-2 border rounded bg-white">
            <p>5 days return policy ........</p>
          </div>
        )}
      </div>

      {/* Anything Missed Section */}
      <div className="mb-4">
        <button
          className="w-100 d-flex justify-content-between align-items-center px-4 py-3 fs-5 fs-md-4   "
          style={{
            fontWeight: "400",
            backgroundColor: "#FFFBF7",
            border: "1px solid #F0F0F0",
          }}
          onClick={() => toggleSection("Anything missed?")}
        >
          <span
            className="text-dark"
            style={{
              fontSize: "18px",
            }}
          >
            Anything missed?
          </span>
          <span
            className="d-flex align-items-center justify-content-center   text-white"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#C6AC96",
            }}
          >
            {openSection === "Anything missed?" ? "−" : "+"}
          </span>
        </button>
        {openSection === "Anything missed?" && (
          <div className="p-4 mt-2 border rounded bg-white">
            <p>Anything missed?....</p>
          </div>
        )}
      </div>

      <div>
        <p
          className="montserrat-font font-light report-text"
          style={{
            fontSize: "14px",
            color: "#777777",
          }}
        >
          Report an item you believe is missing information or{" "}
          <br className="d-none d-md-block" /> appears to be counterfit.
        </p>
      </div>

      {/* Report Button */}
      <motion.button
        className=" report-btn-mobile  mt-1"
        style={{
          border: "4px",
          backgroundColor: "#C6AC96",
          width: "309px",
          height: "40px",
          color: "white",
          fontSize: "16px",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Report
      </motion.button>
    </div>
  );
}

export default Libasproductaccordion;
