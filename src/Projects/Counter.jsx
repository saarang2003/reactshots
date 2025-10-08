import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Sandpack } from "@codesandbox/sandpack-react"

const counterCode = `
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const buttonStyle = {
    padding: "10px 16px",
    margin: "0 10px",
    fontSize: "20px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          textAlign: "center",
          minWidth: "250px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Simple Counter</h1>

        <div style={{ fontSize: "48px", marginBottom: "20px" }}>{count}</div>

        <div>
          <button
            onClick={decrement}
            style={{ ...buttonStyle, backgroundColor: "#e74c3c" }}
          >
            −
          </button>
          <button
            onClick={increment}
            style={{ ...buttonStyle, backgroundColor: "#2ecc71" }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

`;

export default function Counter() {
  return (
    <div>
       <div
    className="fixed inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
      minHeight: "100vh",
    }}
  />
    <div className='relative z-10 py-2'>
      <Navbar />
    </div>

      <div className="relative z-10 max-w-[1280px] h-fit mx-auto px-4 md:px-6 lg:px-14 pb-12 mt-8 ">

        <h1 className="text-4xl text-[#d9e0ff] font-bold mb-3 "> 
           Counter App</h1>

           <h4 className="  selection:bg-purple-300 selection:text-black text-[#4a4e5e] font-semibold text-2xl mb-1 leading-[1.5]">
            📝 Project Overview
           </h4>
        <p className="text-[#4a4e5e] max-w-[60%]">
          In this project, we developed a Counter application using React that allows users to increment and decrement a count value. The app demonstrates dynamic state updates and responsive UI interactions.
        </p>
        <h4 className="  selection:bg-purple-300 selection:text-black text-[#4a4e5e] font-semibold text-xl mb-1 leading-[1.5] mt-4">
           🎯 What You Will Learn
            </h4>
            <ul className="text-[#4a4e5e] list-disc list-inside max-w-[60%]">
              <li>Using useState for state management</li>
              <li>Handling button click events</li>
              <li>Updating UI based on state changes</li>
              <li>Creating simple, reusable React components</li>
            </ul>
      </div>

      <section className='max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pb-12'>
        <div className='rounded-xl border border-gray-200  bg-white p-6 shadow-sm'>
          <p className='mb-4 relative z-10 text-2xl font-semibold text-[#e3ecf9]'>Code</p>
          <Sandpack
            template="react"
            options={{
              showNavigator: true,
              showTabs: true,
              showLineNumbers: true,
              wrapContent: true,
              editorHeight: 400,
              previewHeight: 400,
            }}
            files={{
              "/App.js": counterCode,
            }}
             customSetup={{
        dependencies: {
          "lucide-react": "latest", 
        },
      }}
          />
        </div>
      
      </section>
      <div className=" relative z-10" >
      <Footer/>
      </div>
    </div>

  );
}