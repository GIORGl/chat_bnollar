import React from "react";
import Vector from "../picures/Vector.png";
import Profile from "../picures/Ellipse 1.png";
import PhoneIcon from "../picures/Stroke 1.png";
import Video from "../picures/Video.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <img src={Vector} alt="" />
        <img className="navbar_pfrofile" src={Profile} alt="" />
        <div className="username_activeStatus">
          <p>Michael</p> <p>Active Now</p>
        </div>
      </div>
      <div className="navbar_right">
        <img className="phone_icon" src={PhoneIcon} alt="" />
        <img src={Video} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
