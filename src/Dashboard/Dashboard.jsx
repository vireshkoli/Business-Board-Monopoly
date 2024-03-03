import React from "react";
import "./Dashboard.css";

import memberimg from "../assets/Home Assets/profile.png"
import detailsimg from "../assets/Dashboard Assets/detailsimg.png"

function Dashboard() {
  return (
    <div className="dashboardcontainer">
      <div className="boardmembers">
        <div className="members">
          <h3>Person A</h3>
          <img src={memberimg} alt="" />
        </div>
        <div className="members">
          <h3>Person B</h3>
          <img src={memberimg} alt="" />
        </div>
        <div className="members">
          <h3>Person C</h3>
          <img src={memberimg} alt="" />
        </div>
        <div className="members">
          <h3>Person D</h3>
          <img src={memberimg} alt="" />
        </div>
        <div className="members">
          <h3>Person E</h3>
          <img src={memberimg} alt="" />
        </div>
        <div className="viewdetails">
          <h3>VIEW DETAILS</h3>
          <img src={detailsimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
