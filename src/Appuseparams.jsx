import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Func from './useparams.jsx';

function Appuseparams() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/details/1">Product Details 1</Link></li>
          <li><Link to="/details/2">Product Details 2</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/details/:id" element={<Func />} />
      </Routes>
    </Router>
  );
}

export default Appuseparams;
