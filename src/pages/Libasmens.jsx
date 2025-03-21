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
