import React from "react";
import Libasproduct from "../components/Libasproduct";
import Libasproductdescription from "../components/Libasproductdescription";
import Libasalsolike from "../components/Libasalsolike";
import Libasmorefromthisseller from "../components/Libasmorefromthiseller";
import Lookingforsomethingelse from "../components/Lookingforsomethingelse";
import Communityreview from "../components/Communityreview";
import Countonus from "../components/Countonus";
import { Container, Navbar } from "react-bootstrap";

function Libasmens() {
  return (
    <div className=" ">
      {/* sub-header */}
      <div>
        <Navbar bg="white" expand="lg" className="montserrat-font p-0 m-0">
          <Container
            style={{
              padding: "7px 0", // Reduce top & bottom space
              paddingBottom: "16px",
            }}
            className=" d-flex justify-content-center align-items-center"
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400", // Regular weight
                color: "#808080",
                margin: "0", // Remove extra space
              }}
            >
              Libas &gt; Shop
            </p>
          </Container>
        </Navbar>
      </div>

      <Libasproduct />
      <Libasproductdescription />
      {/* You may also like */}
      <Libasalsolike />
      {/* more from this seller */}
      <Libasmorefromthisseller />
      <Lookingforsomethingelse />
      {/* community review */}
      <Communityreview />
      {/* count on us */}
      <Countonus />
    </div>
  );
}

export default Libasmens;
