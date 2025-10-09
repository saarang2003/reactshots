import { Sandpack } from '@codesandbox/sandpack-react';
import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';


const temperatureCode = `
import React, { useState } from "react";
import { ThermometerSun, ThermometerSnowflake } from "lucide-react"; 

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
    fontFamily: "sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    minWidth: "320px",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
    textAlign: "left",
    color: "#374151",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px 14px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "10px",
  },
  result: {
    marginTop: "16px",
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#222",
  },
};

export default function App() {
  const [temp, setTemp] = useState("");
  const [unit, setUnit] = useState("C");

  const convert = () => {
    if (isNaN(temp)) return "";
    return unit === "C"
      ? ((temp * 9) / 5 + 32).toFixed(2)
      : (((temp - 32) * 5) / 9).toFixed(2);
  };

  const toggleUnit = () => {
    const newUnit = unit === "C" ? "F" : "C";
    const newTemp = convert();
    setTemp(newTemp);
    setUnit(newUnit);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🌡️ Temperature Converter</h2>
        <p style={styles.description}>
          A temperature converter app built with React, allowing users to convert between Celsius and Fahrenheit.
        </p>
        <label style={styles.label}>
          Enter Temperature in {unit === "C" ? "Celsius" : "Fahrenheit"}:
        </label>
        <input
          type="number"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          style={styles.input}
        />
        <button onClick={toggleUnit} style={styles.button}>
          {unit === "C" ? <ThermometerSun size={20} /> : <ThermometerSnowflake size={20} />}
          Convert to {unit === "C" ? "Fahrenheit" : "Celsius"}
        </button>
        <div style={styles.result}>
         Converted: {temp && !isNaN(temp) ? \`\${convert()}°\${unit === "C" ? "F" : "C"}\` : "-"}
        </div>
      </div>
    </div>
  );
}
`;


function TemperatureConverter() {
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

        <h1 className="text-4xl text-[#d9e0ff] font-bold mb-8 "> 
           Temperature Converter Component</h1>

           <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
            📝 Project Overview
           </h4>
        <p className="text-[#4a4e5e] max-w-[60%]">
          In this project, we built a temperature converter component using React. The component allows users to convert temperatures between Celsius and Fahrenheit, showcasing the use of controlled components and state management in React.
        </p>
         <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
           🎯 What You Will Learn
            </h4>
            <ul className="text-[#4a4e5e] list-disc list-inside max-w-[60%]">
              <li>Using useState for state management</li>
              <li>Handling click events to open and close dropdown</li>
              <li>Rendering dynamic lists using </li>
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
                    "/App.js": temperatureCode,
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
      <Footer />
      </div>



    </div>
  )
}

export default TemperatureConverter