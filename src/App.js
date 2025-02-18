// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Libasnav from "./components/Libasnav";
import Libasmens from "./pages/Libasmens";
import Libasheader from "./components/Libasheader";
import Libasfooter from "./components/Libasfooter";
import Libasmobilefooter from "./components/Libasmobilefooter";
import Brandpartners from "./components/Brandpartners";
function App() {
  return (
    <Router>
      <Libasnav />
      {/* header */}
      <Libasheader />
      <Routes>
        {/* Mens page */}
        <Route path="/" element={<Libasmens />} />
      </Routes>
      {/* web footer */}
      <Libasfooter />
      {/* Brand partners */}
      <Brandpartners />
      {/* mobile footer */}
      <Libasmobilefooter />
    </Router>
  );
}

export default App;
