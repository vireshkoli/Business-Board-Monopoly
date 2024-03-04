import React from "react";
import "./Dashboard.css";

import memberimg from "../assets/Home Assets/profile.png";
import detailsimg from "../assets/Dashboard Assets/detailsimg.png";

import Day from "./Day.jsx";

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
      <div className="boarddays">
        <Day day="Monday" member={["Person A", "Person B", "Person C", "Person D", "Person E"]} status={["Done", "Done", "Pending", "Done", "Pending"]}/>
        <Day day="Tuesday" member={["Person A", "Person B", "Person C", "Person D", "Person E"]} status={["Done", "Done", "Pending", "Done", "Pending"]}/>
        <Day day="Wednesday" member={["Person A", "Person B", "Person C", "Person D", "Person E"]} status={["Done", "Done", "Pending", "Done", "Pending"]}/>
        <Day day="Thursday" member={["Person A", "Person B", "Person C", "Person D", "Person E"]} status={["Done", "Done", "Pending", "Done", "Pending"]}/>
        <Day day="Friday" member={["Person A", "Person B", "Person C", "Person D", "Person E"]} status={["Done", "Done", "Pending", "Done", "Pending"]}/>
        <Day day="Saturday" member={["Person A", "Person B", "Person C", "Person D", "Person E"]} status={["Done", "Done", "Pending", "Done", "Pending"]}/>
      </div>
    </div>
  );
}

export default Dashboard;
