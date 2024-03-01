import React from "react";
import "./Profile.css";

import PersonalFields from "./PersonalFields.jsx";
import LegalStatusFields from "./LegalStatusFields.jsx";

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
            <PersonalFields fieldname="Your Name" fieldcontent="Viresh"/>
            <PersonalFields fieldname="Email" fieldcontent="vireshkoli123@gmail.com"/>
            <PersonalFields fieldname="Phone Number" fieldcontent="+91 9876543210"/>
            <PersonalFields fieldname="Address" fieldcontent="Location"/>
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
            <LegalStatusFields statusfieldname="KYC Status" statustype="Verified"/>
            <LegalStatusFields statusfieldname="Aadhar Status" statustype="Verified"/>
            <LegalStatusFields statusfieldname="Credit Score" statustype="Good" scorefield/>
            <LegalStatusFields statusfieldname="Company Score" statustype="Good" scorefield/>
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
