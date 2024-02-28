import React from "react";
import "./Profile.css";
import profile from "../assets/Home Assets/profile.png";
import professional from "../assets/Profile Assets/professional.png";
import rating from "../assets/Profile Assets/rating.png";

function Profile() {
  return (
    <div className="profilecontainer">
      <div className="upperblock">
        <h2>MY PROFILE</h2>
      </div>
      <div className="main">
        <div className="mainblock1">
          <div className="profilepicsection">
            <img src={profile} alt="" />
            <button>Upload Image</button>
          </div>

          <div className="personalinfo">
            <div className="name">
              <p>Your Name</p>
              <div className="nameedit">
                <p>Viresh</p>
                <button>Edit</button>
              </div>
            </div>
            <div className="email">
              <p>Email</p>
              <div className="emailedit">
                <p>vireshkoli123@gmail.com</p>
                <button>Edit</button>
              </div>
            </div>
            <div className="phone">
              <p>Phone Number</p>
              <div className="phoneedit">
                <p>+91 9876543210</p>
                <button>Edit</button>
              </div>
            </div>
            <div className="address">
              <p>Address</p>
              <div className="addressedit">
                <p>Location</p>
                <button>Edit</button>
              </div>
            </div>
          </div>

          <div className="about">
            <div className="aboutedit">
              <p>About Me</p>
              <button>Edit</button>
            </div>
            <p className="aboutcontent">
              As an engineer, I thrive on the intersection of creativity and
              problem-solving. With a passion for innovation, I specialize in
              designing and implementing solutions that not only meet technical
              requirements but also exceed expectations.
            </p>
          </div>
        </div>

        <div className="mainblock2">
          <div className="verifications">
            <h3>LEGAL STATUS</h3>
            <div className="status">
              <p>KYC Status</p>
              <div className="statusbuttons">
                <button>Edit</button>
                <button id="highlight">Verified</button>
              </div>
            </div>
            <div className="status">
              <p>Aadhar Status</p>
              <div className="statusbuttons">
                <button>Edit</button>
                <button id="highlight">Verified</button>
              </div>
            </div>
            <div className="status">
              <p>Credit Score</p>
              <div className="statusbuttons">
                <button id="checkscore">Check Score</button>
                <button id="highlight">Good</button>
              </div>
            </div>
            <div className="status">
              <p>Company Score</p>
              <div className="statusbuttons">
                <button id="checkscore">Check Score</button>
                <button id="highlight">Good</button>
              </div>
            </div>
          </div>

          <div className="professional">
            <div className="professionaldetails">
              <h3>PROFESSIONAL DETAILS</h3>
              <p>
                These are the professional details of the user in the respective
                organization.
              </p>
            </div>
            <img src={professional} alt="professional" />
          </div>

          <div className="ratings">
            <div className="ratingdetails">
              <h3>Ratings</h3>
              <p>4 Stars</p>
              <p className="grey">From 34 users</p>
            </div>
            <img src={rating} alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
