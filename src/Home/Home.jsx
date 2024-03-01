import React from "react";
import "./Home.css";
import profile from "../assets/Home Assets/profile.png";
import landingimg from "../assets/Home Assets/landingimg.jpg";

function Home() {
  return (
    <div className="homecontainer">
      <div className="cover">
        <div className="profilebtn">
          <button>
            <a href="/profile">
              <img src={profile} alt="profile" />
            </a>
          </button>
        </div>
        <div className="covercontent">
          <h3>Ready For Some Business Investments !</h3>
          <p>
            Welcome to Business Board Monopoly, your premier destination for
            insightful investment opportunities. Our website is dedicated to
            empowering individuals with the knowledge and tools necessary to
            navigate the dynamic world of investments.
          </p>
          <div className="coverbuttons">
            <button>Get Started</button>
            <button>About Us</button>
          </div>
        </div>
        <img id="landingimg" src={landingimg} alt="landingimg" />
      </div>
    </div>
  );
}

export default Home;
