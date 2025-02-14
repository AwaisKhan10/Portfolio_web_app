import React from "react";
import { Nav } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// import fiverIcon from "../assets/img/fiver.svg";
import githubIcon from "../assets/img/githubicons.svg";
// import upworkIcon from "../assets/img/upwork.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="social-icon">
        <a
          href="https://www.linkedin.com/in/awais-khan-linkdin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/nav-icon1.svg" alt="linkedin" />
        </a>

        <a href="#">
          <img src={navIcon3} alt="" />
        </a>
        <a
          href="https://www.fiverr.com/awais_khan30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/fiver.svg" alt="Fiverr Profile" />
        </a>

        <a
          href="https://github.com/AwaisKhan10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/githubicons.svg" alt="" />
        </a>
        <a href="#">
          <img src="/upwork.svg" alt="" />
        </a>
      </div>
    </div>
  );
};
