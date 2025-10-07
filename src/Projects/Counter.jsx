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
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
    }}
  />
      <Navbar />
      <section className='max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pb-12'>
        <div className='rounded-xl border border-gray-200 bg-white p-6 shadow-sm'>
          <p className='mb-4 text-sm font-semibold text-[#334155]'>Full Project - Sandpack Editor</p>
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