import React from "react";
import "./LegalStatusFields.css";

function LegalStatusFields(props) {
  return (
    <div className="status">
      <p>{props.statusfieldname}</p>
      <div className="statusbuttons">
        <button id={props.scorefield ? "checkscore" : ""}>{props.scorefield ? "Check Score" : "Edit"}</button>
        <button id="highlight">{props.statustype}</button>
      </div>
    </div>
  );
}

export default LegalStatusFields;
