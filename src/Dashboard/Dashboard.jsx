import React from "react";
import { useState } from "react";
import "./Dashboard.css";

import memberimg from "../assets/Home Assets/profile.png";
import detailsimg from "../assets/Dashboard Assets/detailsimg.png";

import Day from "./Day.jsx";

function Dashboard() {
  const [hoverA, setHoverA] = useState(false);
  const [hoverB, setHoverB] = useState(false);
  const [hoverC, setHoverC] = useState(false);
  const [hoverD, setHoverD] = useState(false);
  const [hoverE, setHoverE] = useState(false);

  return (
    <div className="dashboardcontainer">
      <div className="boardmembers">
        <div
          onMouseEnter={() => setHoverA(true)}
          onMouseLeave={() => setHoverA(false)}
          className={`members ${hoverA ? "expand" : ""}`}
        >
          <div className="membercontent">
            <h3>Person A</h3>
            <img src={memberimg} alt="" />
          </div>
          {hoverA ? <div className="popupcontent">Hii I am Popup</div> : ""}
        </div>
        <div
          onMouseEnter={() => setHoverB(true)}
          onMouseLeave={() => setHoverB(false)}
          className={`members ${hoverB ? "expand" : ""}`}
        >
          <div className="membercontent">
            <h3>Person B</h3>
            <img src={memberimg} alt="" />
          </div>
          {hoverB ? <div className="popupcontent">Hii I am Popup</div> : ""}
        </div>
        <div
          onMouseEnter={() => setHoverC(true)}
          onMouseLeave={() => setHoverC(false)}
          className={`members ${hoverC ? "expand" : ""}`}
        >
          <div className="membercontent">
            <h3>Person C</h3>
            <img src={memberimg} alt="" />
          </div>
          {hoverC ? <div className="popupcontent">Hii I am Popup</div> : ""}
        </div>
        <div
          onMouseEnter={() => setHoverD(true)}
          onMouseLeave={() => setHoverD(false)}
          className={`members ${hoverD ? "expand" : ""}`}
        >
          <div className="membercontent">
            <h3>Person D</h3>
            <img src={memberimg} alt="" />
          </div>
          {hoverD ? <div className="popupcontent">Hii I am Popup</div> : ""}
        </div>
        <div
          onMouseEnter={() => setHoverE(true)}
          onMouseLeave={() => setHoverE(false)}
          className={`members ${hoverE ? "expand" : ""}`}
        >
          <div className="membercontent">
            <h3>Person E</h3>
            <img src={memberimg} alt="" />
          </div>
          {hoverE ? <div className="popupcontent">Hii I am Popup</div> : ""}
        </div>
      </div>
      <div className="boarddays">
        <Day
          day="Monday"
          member={["Person A", "Person B", "Person C", "Person D", "Person E"]}
          status={["Done", "Done", "Pending", "Done", "Pending"]}
        />
        <Day
          day="Tuesday"
          member={["Person A", "Person B", "Person C", "Person D", "Person E"]}
          status={["Done", "Done", "Pending", "Done", "Pending"]}
          lock
          opacitylow
        />
        <Day
          day="Wednesday"
          member={["Person A", "Person B", "Person C", "Person D", "Person E"]}
          status={["Done", "Done", "Pending", "Done", "Pending"]}
          lock
          opacitylow
        />
        <Day
          day="Thursday"
          member={["Person A", "Person B", "Person C", "Person D", "Person E"]}
          status={["Done", "Done", "Pending", "Done", "Pending"]}
          lock
          opacitylow
        />
        <Day
          day="Friday"
          member={["Person A", "Person B", "Person C", "Person D", "Person E"]}
          status={["Done", "Done", "Pending", "Done", "Pending"]}
          lock
          opacitylow
        />
        <Day
          day="Saturday"
          member={["Person A", "Person B", "Person C", "Person D", "Person E"]}
          status={["Done", "Done", "Pending", "Done", "Pending"]}
          lock
          opacitylow
        />
      </div>
    </div>
  );
}

export default Dashboard;
