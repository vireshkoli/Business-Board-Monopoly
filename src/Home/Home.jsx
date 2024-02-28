import React from 'react'
import './Home.css'
import profile from "../assets/Home Assets/profile.png"

function Home() {
  return (
    <div className='homecontainer'>
      <div className="profilebtn">
        <button><a href="/profile"><img src={profile} alt="profile" /></a></button>
      </div>
    </div>
  )
}

export default Home