import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent , CardTitle} from "@/components/ui/card";
import {ArrowRight} from "lucide-react";
import List from "./List";

function Home() {
  return (
     <div className="min-h-screen w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #5417D7 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative flex justify-between gap-4 max-w-[786px] border-1 border-red-200 mx-auto  mt-4">
        <div className="flex items-center gap-2 p-4">
          <img src="./public/logo.png" alt="logo" className="w-6 h-6" />
          <span className="font-bold text-2xl">ReactShots</span>
        </div>
        <div className="flex items-center gap-4 p-4">
          <a
            href="https://github.com/yourusername/react-shots"
            className="text-blue-500 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5417D7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          <a
            href="https://github.com/yourusername/react-shots"
            className="text-blue-500 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5417D7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-twitter-icon lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-24 border-1 border-red-200  text-center px-2 ">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#020617] to-[#27272a] selection:bg-purple-300 selection:text-black bg-clip-text text-transparent leading-[1.2]">
          Master React Interviews with Real-World Projects
        </h1>
      </div>

      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-6 border-1 border-red-200  text-center px-2 ">
        <h4 className=" font-semibold selection:bg-purple-300 selection:text-black text-[#334155] leading-[1.5]">
          A curated collection of React coding challenges from actual machine
          coding rounds. Practice building scalable, interview-ready apps the
          way companies expect.
        </h4>
      </div>

      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-6 text-center px-2 ">
        <div>
          <Button
            size="lg"
            className="bg-[#5417D7] hover:bg-[#3e0fb5] cursor-pointer  text-white px-6 py-3 rounded-lg shadow-2xl transition duration-300"
          >
        Explore Projects <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="relative z-10 max-w-[586px] h-fit-content mx-auto mt-6 border-b border-gray-200 text-center px-2 ">
        <hr />
      </div>

      {/* <div className="relative z-10 flex justify-center max-w-[586px] h-fit-content mx-auto mt-6 border-1 border-red-200  text-center px-2 flex justify-center gap-8">
        <div className="flex flex-col items-center align-center">
          <p className="text-3xl font-semibold">20+</p>
          <p className="text-gray-500">Projects</p>
        </div>

        <div className="flex flex-col items-center align-center">
          <p className="text-3xl font-semibold">100%</p>
        <p className="text-gray-500">Free</p>
        </div>

        <div className="flex flex-col items-center align-center">
          <p className="text-3xl font-semibold">React</p>
          <p className="text-gray-500">& Web APIs</p>
        </div>
      </div> */} 


  <div className="relative z-10 max-w-[1280px] h-fit-content mx-auto mt-6 border-b border-gray-200 text-center px-2 ">
        <hr />
      </div>


      <div className="relative gap-4 max-w-[1280px] border-1 border-red-200 mx-auto mt-4">

        <h1 className="text-4xl font-semibold mb-3 ">React Projects</h1>
        <p>Explore a variety of projects built with React and enhance your skills.</p>


{/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">

           <Card className="mt-6 max-w-[300px] h-fit-content bg-red-200 border-2 border-red-300">
          <CardTitle>One</CardTitle>
          <CardContent>
          Description for project one.
          </CardContent>
        </Card>

           <Card className="mt-6 max-w-[300px] h-fit-content bg-red-200 border-2 border-red-300">
          ONE
        </Card>

           <Card className="mt-6 max-w-[300px] h-fit-content bg-red-200 border-2 border-red-300">
          ONE
        </Card>

           <Card className="mt-6 max-w-[300px] h-fit-content bg-red-200 border-2 border-red-300">
          ONE
        </Card>
        </div>


      </div>
    </div>
  )
}

export default Home