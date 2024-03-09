import React from "react";
import "./Day.css";
import locked from "../assets/Dashboard Assets/lock.svg"

function Day(props) {
  return (
    <div className={`day ${props.opacitylow ? "opacitylow" :  ""}`}>
      <h3>{props.day}</h3>
      <hr />
      {props.lock ? (
        <img className="lockimg" src={locked} alt="Locked" />
      ) : (
        <div className="daydetails">
          <div className="memberstatus">
            <p>{props.member[0]}</p>
            <span>Active Few Hours Ago</span>
            <button>{props.status[0]}</button>
          </div>
          <div className="memberstatus">
            <p>{props.member[1]}</p>
            <span>Currently Active</span>
            <button>{props.status[1]}</button>
          </div>
          <div className="memberstatus">
            <p>{props.member[2]}</p>
            <span>Active Few Hours Ago</span>
            <button>{props.status[2]}</button>
          </div>
          <div className="memberstatus">
            <p>{props.member[3]}</p>
            <span>Active Today</span>
            <button>{props.status[3]}</button>
          </div>
          <div className="memberstatus">
            <p>{props.member[4]}</p>
            <span>Active 5 mins ago</span>
            <button>{props.status[4]}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Day;
