import React from "react";
import { useState } from "react";

import "./Members.css";

import memberimg from "../assets/Home Assets/profile.png";
import videocall from "../assets/Dashboard Assets/video-call.svg";

function Members(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`members ${hover ? "expand" : ""}`}
    >
      <div className="membercontent">
        <h3>{props.name}</h3>
        <div className="membercontentimg">
          <img src={memberimg} alt="memberimg" />
          <img src={videocall} alt="memberimg" />
        </div>
      </div>
      {hover ? (
        <div className="popupcontent">
          <div className="popupinfo">
            <p>Civil Score : </p>
            <span>{props.civilscore}</span>
          </div>
          <div className="popupinfo">
            <p>Country Score : </p>
            <span>{props.countryscore}</span>
          </div>
          <div className="popupinfo">
            <p>Number Of Boards Joined : </p>
            <span>{props.boards}</span>
          </div>
          <div className="popupinfo">
            <p>Amount Invested : </p>
            <span>{props.invested}</span>
          </div>
          <div className="popupdetail">
            <button>
              <a href="/popupdetails">View Details</a>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Members;
