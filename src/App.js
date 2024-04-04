import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Test from "./Pages/Test";
import Management from "./Pages/Management/Management";
import "./App1.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/management-team" element={<Management />} />
      </Routes>
    </Router>
  );
}

export default App;
