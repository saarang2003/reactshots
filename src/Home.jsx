import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import List from "./List";
import Navbar from "./Navbar";
import Footer from "./Footer";
import counterImage from './assets/counter.png';
import dropdownImage from './assets/dropdown.png';
import inputEditImage from './assets/input.png';

function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Teal Glow Background */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #5417D7 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      /> */}

      <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
    }}
  />

      <div className="relative z-10 py-6 px-4">
        <Navbar/>
      </div>

      {/* CTA */}
      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-10 md:mt-18 text-center px-2 ">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#d9e0ff] to-[#232328] selection:bg-purple-300 selection:text-black bg-clip-text text-transparent leading-[1.2]">
          Master React Interviews with Real-World Projects
        </h1>
      </div>

      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-6  text-center px-2 ">
        <h4 className="  selection:bg-purple-300 selection:text-black text-[#4a4e5e] leading-[1.5]">
          A curated collection of React coding challenges from actual machine
          coding rounds. Practice building scalable, interview-ready apps the
          way companies expect.
        </h4>
      </div>

      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-6 text-center px-2 ">
        <div>
          <Link to ="/projects">
          <Button
            size="lg"
            className="bg-[#5417D7] hover:bg-[#3e0fb5] cursor-pointer  text-white px-6 py-3 rounded-lg shadow-2xl transition duration-300"
          >
            Explore Projects <ArrowRight />
          </Button>
          </Link>
        </div>
      </div>


      <div className="relative z-10 max-w-[1280px] h-fit-content mx-auto mt-6   text-center px-2 ">
        <hr className="border-t border-white/75" />
      </div>

      <div className="relative gap-4 max-w-[1280px]  p-6 rounded-2xl shadow-2xl mx-auto mt-4 ">
        <h1 className="text-4xl text-[#d9e0ff] font-bold mb-1 ">React Projects</h1>
        <p className="text-[#4a4e5e]">
          Explore a variety of projects built with React and enhance your
          skills.
        </p>

        {/* Projects */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2 place-items-center sm:place-items-start">


          <Card className="mt-6 w-[350px] h-full flex flex-col 
  rounded-xl 
  shadow-2xl shadow-white/10 
  border border-white/5 
  bg-gradient-to-r from-[#585ac4]/40 to-[#393ce3]/40 
  backdrop-blur-2xl
  ">
            <CardTitle className="text-center font-bold text-2xl text-accent/75 ">Counter App</CardTitle>
            <div className="w-[80%] mx-auto h-48 bg-gray-300 rounded-lg flex items-center justify-center">
              <img src={counterImage} alt="counter app image"   className="h-[200px] w-[80%] object-contain rounded-lg" />
            </div>
            <CardContent className="line-clamp-3 text-gray-100 ">In this project, we built a counter application with Undo and Redo functionality using React. The app tracks state history, allowing users to reverse or reapply actions showcasing the concept of time travel in state management.</CardContent>
            <div className="px-5 mb-2">
              <Link to = '/counter'>
              <Button   className="  bg-[#5417D7] hover:bg-[#3e0fb5] cursor-pointer text-white px-6 py-2 rounded-lg shadow-2xl transition duration-300">
                View Project <ArrowRight />
              </Button>
               </Link>
              </div>
          </Card>


    {/* 2nd one  */}
          <Card className="mt-6 w-[350px] h-full flex flex-col 
  rounded-xl 
  shadow-2xl shadow-white/10 
  border border-white/5 
  bg-gradient-to-r from-[#585ac4]/40 to-[#393ce3]/40 
  backdrop-blur-2xl
  ">
            <CardTitle className="text-center font-bold text-2xl text-accent/75">Dropdown Component</CardTitle>
            <div className="w-[80%] mx-auto h-48 bg-gray-300 rounded-lg flex items-center justify-center">
              <img src={dropdownImage} alt="dropdown component image" className="h-[200px] w-[80%] object-contain rounded-lg" />
            </div>
            <CardContent className="line-clamp-3 text-gray-100">In this project, we built a dropdown component using React. The component allows users to select an option from a list, showcasing the use of controlled components and state management in React.</CardContent>

            <div className="px-5 mb-2">
              <Link to = '/dropdown'>
              <Button   className="  bg-[#5417D7] hover:bg-[#3e0fb5] cursor-pointer text-white px-6 py-2 rounded-lg shadow-2xl transition duration-300">
                View Project <ArrowRight />
              </Button>
               </Link>
              </div>
          </Card>

         {/* 3rd one */}
         <Card className="mt-6 w-[350px] h-full flex flex-col 
  rounded-xl 
  shadow-2xl shadow-white/10 
  border border-white/5 
  bg-gradient-to-r from-[#585ac4]/40 to-[#393ce3]/40 
  backdrop-blur-2xl
  ">
            <CardTitle className="text-center font-bold text-2xl text-accent/75">Editable Input Component</CardTitle>
            <div className="w-[80%] mx-auto h-48 bg-gray-300 rounded-lg flex items-center justify-center">
              <img src={inputEditImage} alt="editable input component image" className="h-[200px] w-[80%] object-contain rounded-lg" />
            </div>
            <CardContent className="line-clamp-3 text-gray-100">In this project, we built an editable input component using React. The component allows users to edit text inline, showcasing the use of controlled components and state management in React.</CardContent>

            <div className="px-5 mb-2">
              <Link to = '/inputedit'>
              <Button   className="  bg-[#5417D7] hover:bg-[#3e0fb5] cursor-pointer text-white px-6 py-2 rounded-lg shadow-2xl transition duration-300">
                View Project <ArrowRight />
              </Button>
               </Link>
              </div>
          </Card>

        </div>
          

        {/* Footer */}

              
           {/* All projects button */}

      </div>
          
        <div className="flex relative z-10  justify-center  mt-12 mb-4">
          <Link to="/projects">
          <Button className="bg-[#5417D7] hover:bg-[#3e0fb5] cursor-pointer  text-white px-12 py-6 text-xl font-semibold rounded-lg shadow-2xl  transition duration-300">View All Projects
      <ArrowRight className="w-18 h-18"/>
          </Button>
          </Link>
        </div>
        <div className=" relative z-10 w-full" >
        <Footer/>
        </div>
    </div>

  );
}

export default Home;