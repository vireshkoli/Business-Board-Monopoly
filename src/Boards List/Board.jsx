import React, { useState } from "react";
import { DialogHTMLAttributes } from "react";
import "./Board.css";

import details from "../assets/BoardList Assets/details.svg";

function Board(props) {
  return (
    <>
      <div className={`board ${props.openDialog ? "focus" : ""}`}>
        <div className="boardinfo">
          <h3>{props.boardtitle}</h3>
          <p>Rs {props.investmentperday} per day</p>
        </div>
        <button onClick={props.handleClick}>View Details</button>
      </div>
      {props.openDialog && (
        <div className="dialogcontainer">
          <div className="dialoginfo">
            <h3>
              {props.boardtitle} {props.boardopen ? "(Open)" : "(Invite Only)"}
            </h3>
            <p>Rs {props.investmentperday} per day</p>
          </div>
          <div className="boarddetail">
            <div>
              <p>Person A</p>
              <a href="/">
                <img src={details} alt="details" />
              </a>
            </div>
            <div>
              <p>Person B</p>
              <a href="/">
                <img src={details} alt="details" />
              </a>
            </div>
            <div>
              <p>Person C</p>
              <a href="/">
                <img src={details} alt="details" />
              </a>
            </div>
            <div>
              <p>Person D</p>
              <a href="/">
                <img src={details} alt="details" />
              </a>
            </div>
            <div>
              <p>Person E</p>
              <a href="/">
                <img src={details} alt="details" />
              </a>
            </div>
          </div>
          <div className="boardjoin">
            {props.boardopen === false && <div className="boardcode">
              <label htmlFor="code">Enter Code :</label>
              <input type="password" placeholder="Invite Code" />
            </div>}
            <button onClick={props.handleClick}>Join Now</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Board;
