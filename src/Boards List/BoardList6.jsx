import React from 'react'
import { useState } from 'react'
import "./BoardList.css"

import search from "../assets/BoardList Assets/search.svg"
import Board from './Board.jsx'

function BoardList6() {
  const [openDialog, setOpenDialog] = useState(false);

  function handleClick() {
    setOpenDialog(true);
  }

  return (
    <div className="boardlistcontainer">
      <div className={`searchbar ${openDialog ? "focus" : ""}`}>
        <input type="text" placeholder="Search for boards.."/>
        <img src={search} alt="search" />
      </div>
      <div className="boardlist">
        <Board boardtitle="Demo Board 1" investmentperday="1000" openDialog={openDialog} handleClick={handleClick}/>
        <Board boardtitle="Demo Board 2" investmentperday="2000" openDialog={openDialog} handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default BoardList6