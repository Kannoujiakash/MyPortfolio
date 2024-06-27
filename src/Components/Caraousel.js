import "./crouselstyle.css";

import React from "react";
import heroImg from "../assets/portfolio1.jpg";
import { Link } from "react-router-dom";

const Caraousel = () => {
  return (
    <div className="crousel">
      <div className="bgImg">
        <img className="crouselImg" src={heroImg} alt="crouselImg"></img>
      </div>
      <div className="content">
        <div className="intro">
          <h1>
            <strong className="gradientText">I'm Akash Kannoujia,</strong> Full
            stack developer
          </h1>
          {/* <p>
            I am Software developer with 1 Years of experience in Tata
            Consultancy Services.
          </p> */}
          <div className="Multiplebtn">
            <Link to="/" className="btn">
              Connect
            </Link>
            <Link to="/" className="btn btn-light">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caraousel;
