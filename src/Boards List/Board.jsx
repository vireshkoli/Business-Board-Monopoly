import React, { useState } from "react";
import { DialogHTMLAttributes } from "react";
import "./Board.css";

import details from "../assets/BoardList Assets/details.svg"

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
      {props.openDialog && <div className="dialogcontainer">
        <div className="dialoginfo">
          <h3>{props.boardtitle}</h3>
          <p>Rs {props.investmentperday} per day</p>
        </div>
        <div className="boarddetail">
            <div><p>Person A</p><a href="/"><img src={details} alt="details" /></a></div>
            <p>Person B</p>
            <p>Person C</p>
            <p>Person D</p>
            <p>Person E</p>
        </div>
      </div>}
    </>
  );
}

export default Board;
