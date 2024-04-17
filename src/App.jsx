import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Dashboard from "./Dashboard/Dashboard";
import BoardList6 from "./Boards List/BoardList6";
import BoardList8 from "./Boards List/BoardList8";
import Analytics from "./Analytics/Analytics";

function App() {
  return (
    <div className="appcontainer">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/6dayboards" element={<BoardList6 />} />
          <Route exact path="/8dayboards" element={<BoardList8 />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/analytics" element={<Analytics />} />
        </Routes>
        {/* Footer Here */}
      </Router>
    </div>
  );
}

export default App;
