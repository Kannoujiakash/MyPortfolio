import React from "react";
import "./projectStyle.css";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";

const allProject = [
  {
    id: 1,
    image: project1,
    Url: "",
    proTitle: "TravelBuddy",
    Desc: "",
  },
  {
    id: 2,
    image: project2,
    Url: "",
    proTitle: "Aid-kare",
    Desc: "",
  },
  {
    id: 3,
    image: project3,
    Url: "",
    proTitle: "Attandance Management",
    Desc: "",
  },
];

const Project = () => {
  return (
    <div className="projectSection">
      <h1>Projects</h1>
      <div className="displayProject">
        {allProject.map((ob) => (
          <Link to={ob.Url}>
            <div className="project">
              <img src={ob.image} alt="" className="pImg" />
              <h4>{ob.proTitle}</h4>
              {/* <p>{ob.Desc}</p> */}
            </div>
          </Link>
        ))}
        ;
      </div>
    </div>
  );
};
export default Project;
