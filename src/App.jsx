import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="appcontainer">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        {/* Footer Here */}
      </Router>
    </div>
  );
}

export default App;
