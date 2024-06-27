import React from "react";
import "./footerStyle.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const EndBar = () => {
  return (
    <div className="footer">
      <h4>
        <FaLinkedin size={50} style={{ color: "#fff", marginRight: "2rem" }} />
      </h4>
      <h4>
        <FaGithub size={50} style={{ color: "#fff", marginRight: "2rem" }} />
      </h4>
    </div>
  );
};

export default EndBar;
