import React from "react";
import "./About.css";
import MyProfile from "../assets/My-ProfileImg.jpg";
import teachStackList from "../Components/teachStackList";

function About() {
  return (
    <div className="aboutSection">
      <h1>All About Myself</h1>
      <div className="AboutContent">
        <div className="Profile">
          <img className="ProfileImg" src={MyProfile} alt="MyProfile"></img>
        </div>
        <div className="desc">
          <p>
            I am a passionate Full Stack Developer with 1 year of professional
            experience in building web applications. Throughout my journey, I
            have gained expertise in both frontend and backend technologies,
            enabling me to deliver comprehensive solutions that meet client
            needs.
          </p>
          <p>
            My enthusiasm for continuous learning and problem-solving drives me
            to stay updated with the latest industry trends and best practices.
            I am dedicated to creating robust, scalable, and user-friendly
            applications.
          </p>
        </div>
      </div>
      <div className="mySkills">
        <h2>Skills</h2>
        <div className="skillSet">
          {teachStackList.map((skill) => (
            <div className="Skill">
              <img src={skill.imgSrc} alt={skill.title} className="Image" />
              <h3 className="title">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
