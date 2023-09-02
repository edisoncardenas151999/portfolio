import React from "react";
import ProjectItem from "./ProjectItem";
import Codebooks from "../assets/Codebooks.jpeg";
import techjobboard from "../assets/techjobboard.jpeg";
import aliengame from "../assets/aliengame.jpeg";
import { FaReact, FaNode } from "react-icons/fa";
import { DiMongodb, DiJavascript } from "react-icons/di";
import lux from "../assets/react-native.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <div className="flex justify-center space-x-2.5 items-center m-auto  pt-4 max-w-[700px] w-full">
        <FaReact size={50} className="cursor-pointer" />
        <FaNode size={50} className="cursor-pointer" />
        <DiMongodb size={50} className="cursor-pointer" />
        <DiJavascript size={50} className="cursor-pointer" />
      </div>
      <p className="text-center py-8">
        In my portfolio, I'm excited to present a selection of projects that
        showcase my skills, expertise, and passion in Web development. Here's an
        overview of some of the standout projects:
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={Codebooks}
          title={"Codebooks"}
          Link={"https://ebooks-project.netlify.app/"}
        />
        <ProjectItem
          img={techjobboard}
          title={"Tech-Job-Board"}
          Link={"https://tech-job-board.fly.dev/"}
        />
         <ProjectItem
          img={lux}
          title={"LuxeLife-Creations"}
          Link={"https://github.com/edisoncardenas151999/LuxeLife-Creations"}
        />
        <ProjectItem
          img={aliengame}
          title={"alien Game"}
          Link={"https://edisoncardenas151999.github.io/project1-alienGame1/"}
        />
      </div>
    </div>
  );
};

export default Projects;
