// imports
import React from "react";
import sideBarMod from "../css/sideBar.module.css";
import sam from "../images/sam.jpeg";
import mail from "../images/mail.png";
import Footer from "./footer";

// sideBar HTML structure
const SideBar = () => (
  <div className={sideBarMod.sideBar}>
    <section className="profile-pic">
      <div>
        <img
          src={sam}
          alt="Sam Snyder in a suit"
          className={sideBarMod.profileImg}
        />
      </div>
    </section>
    <section className="about-me">
      <div>
        <h1>Samuel Snyder</h1>
      </div>
      <div className={sideBarMod.mail}>
        <img src={mail} alt="mail icon" className={sideBarMod.icon} />
        <p>samuelbsnyder@gmail.com</p>
      </div>
      <a href="https://github.com/sambsnyder">GitHub</a>
    </section>
    <Footer />
  </div>
);
export default SideBar;
