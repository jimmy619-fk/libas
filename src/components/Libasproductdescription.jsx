import React, { useState } from "react";
import Libasproductaccordion from "./Libasproductaccordion";

function Libasproductdescription() {
  return (
    <div
      className="container description-content"
      style={{
        marginTop: "38px",
      }}
    >
      <div className="row">
        {/* Left Section: Description */}
        <div className="col-lg-6 col-md-12 montserrat-font ">
          <div className="description-section description-left-section-mobile ">
            <h4
              style={{
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Description
            </h4>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "300",
                color: "#777777",
              }}
            >
              This item was purchased in 2022, occasionally worn, very{" "}
              <br className="d-none d-md-block" /> neat and clean. No damages;
              the box is still there.
            </p>
            <h5
              style={{
                fontSize: "24px",
                fontWeight: "500",
                marginTop: "35px",
              }}
            >
              Details
            </h5>
            <table className="table table-borderless w-100 m-0">
              <tbody>
                {[
                  ["Brand", "Chanel"],
                  ["Model", "Classic"],
                  ["Color", "Black"],
                  ["Print", "No Print"],
                  ["Material", "Leather"],
                  ["Secondary Material", "Silver"],
                  ["Dimensions", "23 x 14 x 6 cm"],
                  ["Gender", "Women"],
                  ["Category", "Shoulder Bag"],
                  ["Location", "Dubai, UAE"],
                  ["Online Since", "Jan 24, 2023"],
                  ["Reference Number", "#2301250B2441980"],
                ].map(([label, value], index) => (
                  <tr key={index}>
                    <td
                      className="fs-6 fs-md-5"
                      style={{
                        color: "#1F1F1F",
                        fontWeight: "400",
                        padding: "8px 0",
                      }}
                    >
                      {label}
                    </td>
                    <td
                      className="fs-6 fs-md-5"
                      style={{
                        color: "#777777",
                        fontWeight: "200",
                        padding: "8px 0",
                      }}
                    >
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section: Quality Control */}
        <div className="quality-control-right-section-mobile col-lg-5 col-md-12  p-0">
          {/* accordion */}
          <Libasproductaccordion />
        </div>
      </div>
    </div>
  );
}

export default Libasproductdescription;
