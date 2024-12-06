import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Mainheader from "./components/mainHeader/Mainheader";

function App() {
  return (
    <Router>
      <div className="headersection">
        <Mainheader />
      </div>
      <Routes>
        <Route index="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
