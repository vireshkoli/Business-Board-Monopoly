import React from "react";
import { useState } from "react";
import "./Dashboard.css";

import memberimg from "../assets/Home Assets/profile.png";

import Day from "./Day.jsx";
import Members from "./Members.jsx";

function Dashboard() {
  return (
    <div className="dashboardcontainer">
      <div className="boardmembers">
        <Members
          name="Person A"
          civilscore="300"
          countryscore="400"
          boards="10"
          invested="5500"
        />
        <Members
          name="Person B"
          civilscore="300"
          countryscore="400"
          boards="10"
          invested="5500"
        />
        <Members
          name="Person C"
          civilscore="300"
          countryscore="400"
          boards="10"
          invested="5500"
        />
        <Members
          name="Person D"
          civilscore="300"
          countryscore="400"
          boards="10"
          invested="5500"
        />
        <Members
          name="Person E"
          civilscore="300"
          countryscore="400"
          boards="10"
          invested="5500"
        />
      </div>
      <div className="referals">
        <p>Do you know any users :</p>
        <div className="refbuttons">
          <button>
            <a href="">Gauranter</a>
          </button>
          <button>
            <a href="">Reference</a>
          </button>
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
