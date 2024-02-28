import React from "react";
import "./Navbar.css";
import navlogo from "../assets/logo2.png";
import home from "../assets/Navbar Assets/home.png";
import dashboard from "../assets/Navbar Assets/dashboard.png";
import analytics from "../assets/Navbar Assets/analytics.png";
import about from "../assets/Navbar Assets/about.png";
import contactus from "../assets/Navbar Assets/contactus.png";
import messages from "../assets/Navbar Assets/messages.png";
import settings from "../assets/Navbar Assets/settings.png";

function Navbar() {
  return (
    <div className="navcontainer">
      <div className="navtitle">
        <img src={navlogo} alt="" />
        <h1>Business Board Monopoly</h1>
      </div>
      <div className="navsections">
        <a href="/">
          <img src={home} alt="homelogo" />
          Home
        </a>
        <a href="/dashboard">
          <img src={dashboard} alt="homelogo" />
          Dashboard
        </a>
        <a href="/analytics">
          <img src={analytics} alt="homelogo" />
          Analytics
        </a>
        <a href="/about">
          <img src={about} alt="homelogo" />
          About
        </a>
        <a href="/contactus">
          <img src={contactus} alt="homelogo" />
          Contact Us
        </a>
      </div>
      <div className="navbottom">
      <hr className="navbreak"/>
        <a href="/messages">
          <img src={messages} alt="homelogo" />
          Messages
        </a>
        <a href="/settings">
          <img src={settings} alt="homelogo" />
          Settings
        </a>
      </div>
    </div>
  );
}

export default Navbar;
