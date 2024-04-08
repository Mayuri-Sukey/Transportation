import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Management from "./Pages/Management/Management";
import "./App1.css";
import Infrastructure from "./Pages/Infrastructure/Infrastructure";
import WhyusPage from "./Pages/Whyus/WhyusPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/management-team" element={<Management />} />
        <Route path="/profile/infrastructure" element={<Infrastructure />} />
        <Route path="/profile/whyus" element={<WhyusPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
