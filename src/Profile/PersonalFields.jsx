import React from "react";
import "./PersonalFields.css";

function PersonalFields(props) {
  return (
    <div className="field">
      <p>{props.fieldname}</p>
      <div className="fieldedit">
        <p>{props.fieldcontent}</p>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default PersonalFields;
