import React from "react";
import Navbar from "./Navbar";
import {projectData} from './data/project.js'
import ProjectCard from "./components/ui/ProjectCard.jsx";
import Footer from "./Footer.jsx";

function AllProjects() {
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
        }}
      />

      <div className="relative z-10 py-2">
        <Navbar />
      </div>

      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-12 text-center px-2 ">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#d9e0ff] to-[#232328] selection:bg-purple-300 selection:text-black bg-clip-text text-transparent leading-[1.2]">
          All Projects
        </h1>
      </div>

      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-6  text-center px-2 ">
        <h4 className="  selection:bg-purple-300 selection:text-black text-[#4a4e5e] leading-[1.5]">
          Explore a variety of projects built with React and enhance your
          skills.
        </h4>
      </div>

      <div className="relative z-10 max-w-[1280px] h-fit-content mx-auto mt-6  text-center px-2 ">
        <hr />
      </div>
      <div className="relative gap-4 max-w-[1280px]  p-6 rounded-2xl shadow-2xl mx-auto mt-4">
        <h1 className="text-4xl text-[#d9e0ff] font-bold mb-1 ">
          React Projects
        </h1>
        <p className="text-[#4a4e5e]">
          Explore a variety of projects built with React and enhance your
          skills.
        </p>
      </div>

          <div className=" relative z-10  max-w-[1280px] mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center ">All React Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>

       <div className=" relative z-10 w-full mt-8" >
        <Footer />
        </div>


    </div>
  );
}

export default AllProjects;
