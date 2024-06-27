import React from "react";
import NavBar from "../Components/NavBar";
import Caraousel from "../Components/Caraousel";
import About from "./About";
import Project from "../Components/Project";
import EndBar from "../Components/EndBar";

function Home() {
  return (
    <div>
      <NavBar />
      <Caraousel />
      <About />
      <Project />
      <EndBar />
    </div>
  );
}

export default Home;
