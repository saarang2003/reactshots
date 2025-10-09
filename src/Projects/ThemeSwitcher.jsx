import React from 'react'
import Navbar from '../Navbar';
import { Sandpack } from '@codesandbox/sandpack-react';
import Footer from '../Footer';

const ThemeSwitcherCode = `
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f5",
    fontFamily: "sans-serif",
    transition: "background-color 0.3s ease",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    minWidth: "280px",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#333",
  },
  button: {
    cursor: "pointer",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#007BFF",
    color: "white",
    transition: "background-color 0.3s ease",
  },
};

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#f0f0f5";
    document.body.style.color = darkMode ? "#eee" : "#333";
  }, [darkMode]);

  return (
    <div
      style={{
        ...styles.wrapper,
        backgroundColor: darkMode ? "#121212" : "#f0f0f5",
        color: darkMode ? "#eee" : "#333",
      }}
    >
      <div style={styles.card}>
        <h1 style={styles.heading}>Theme Switcher</h1>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          style={{
            ...styles.button,
            backgroundColor: darkMode ? "#f39c12" : "#007BFF",
            color: darkMode ? "#121212" : "#fff",
          }}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

`;

function ThemeSwitcher() {
  return (
        <div>
        <div
    className="fixed inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
      minHeight: "100vh",
    }}
  />
    <div className='relative z-10 py-6'>
      <Navbar />
    </div>
      <div className="relative z-10 max-w-[1280px] h-fit mx-auto px-4 md:px-6 lg:px-14 pb-12 mt-8 ">
     <h1 className="text-4xl text-[#f0f0ff] selection:bg-purple-300 selection:text-black font-bold mb-8"> 
  Theme Switcher
</h1>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
  📝 Project Overview
</h4>
<p className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black max-w-[60%]">
  In this project, we built a theme switcher component using React. The component allows users to toggle between light and dark themes, showcasing the use of context and state management in React.
</p>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
  🎯 What You Will Learn
</h4>
<ul className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
  <li>Managing theme state with <code>useState</code> and <code>useContext</code></li>
  <li>Implementing light and dark mode toggling</li>
  <li>Using React Context API for global state management</li>
  <li>Applying conditional styling based on theme</li>
  <li>Building accessible and responsive UI components</li>
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
                    editorHeight: 600,
                    previewHeight: 600,
                  }}
                  files={{
                    "/App.js": ThemeSwitcherCode,
                  }}
                   customSetup={{
              dependencies: {
                "lucide-react": "latest", 
              },
            }}
                />
              </div>
            
            </section>


             <div className=" relative z-10 mt-8" >
      <Footer />
      </div>


    </div>
  )
}

export default ThemeSwitcher