import React from 'react'
import { useState } from 'react'
import "./BoardList.css"

import search from "../assets/BoardList Assets/search.svg"
import Board from './Board.jsx'

function BoardList6() {
  const [openDialog, setOpenDialog] = useState(false);

  function handleClick() {
    setOpenDialog(!openDialog);
  }

  return (
    <div className="boardlistcontainer">
      <div className={`searchbar ${openDialog ? "focus" : ""}`}>
        <input type="text" placeholder="Search for boards.."/>
        <img src={search} alt="search" />
      </div>
      <div className="boardlist">
        <Board boardtitle="Demo Board 1" boardopen={true} investmentperday="1000" openDialog={openDialog} handleClick={handleClick}/>
        <Board boardtitle="Demo Board 2" boardopen={false} investmentperday="2000" openDialog={openDialog} handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default BoardList6