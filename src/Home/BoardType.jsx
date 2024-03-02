import React from "react";
import "./BoardType.css"

function BoardType(props) {
  return (
    <div className="boardcategory">
      <div className="boardcategorycontent">
        <h3>{props.boarddays} Days Business Boards</h3>
        <p>
          This includes different business board monopoly investment boards for{" "}
          {props.boarddays} Days
        </p>
      </div>
      <button>Explore</button>
    </div>
  );
}

export default BoardType;
