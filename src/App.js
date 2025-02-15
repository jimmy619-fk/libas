// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Libasnav from "./components/Libasnav";
import Libasmens from "./pages/Libasmens";
import Libasheader from "./components/Libasheader";
import Libasfooter from "./components/Libasfooter";
import Libasmobilefooter from "./components/Libasmobilefooter";
function App() {
  return (
    <Router>
      <Libasnav />
      <Libasheader />
      <Routes>
        {/* Basic route */}
        <Route path="/" element={<Libasmens />} />
      </Routes>
      <Libasfooter />
      <Libasmobilefooter />
    </Router>
  );
}

export default App;
