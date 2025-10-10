import React from 'react'
import Footer from '../Footer'
import { Sandpack } from '@codesandbox/sandpack-react'
import Navbar from '../Navbar'

const progressbarCode = `
import React, { useState } from "react";
import { Loader, CheckCircle2 } from "lucide-react";

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f5",
    fontFamily: "sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    minWidth: "320px",
    width: "90%",
    maxWidth: "400px",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#333",
  },
  progressContainer: {
    backgroundColor: "#e0e0e0",
    borderRadius: "20px",
    overflow: "hidden",
    height: "20px",
    width: "100%",
    marginBottom: "16px",
  },
  progressBar: (value) => ({
    height: "100%",
    width: "\${value}%",
    backgroundColor: "#4caf50",
    transition: "width 0.3s ease-in-out",
  }),
  percentageText: {
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#555",
  },
  slider: {
    width: "100%",
    margin: "10px 0 20px",
  },
  icon: {
    marginTop: "10px",
    color: "#4caf50",
  },
};

export default function SliderProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleSliderChange = (e) => {
    setProgress(parseInt(e.target.value));
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Slider Progress Bar</h1>

        {/* Visual Progress Bar */}
        <div style={styles.progressContainer}>
          <div style={styles.progressBar(progress)}></div>
        </div>

        {/* Numeric Display */}
        <p style={styles.percentageText}>{progress}% Complete</p>

        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSliderChange}
          style={styles.slider}
        />

        {/* Icon Feedback */}
        <div style={styles.icon}>
          {progress < 100 ? (
            <Loader size={28} className="spin" />
          ) : (
            <CheckCircle2 size={28} />
          )}
        </div>
      </div>
    </div>
  );
}

`;


function ProgressBar() {
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
    Progress Bar
</h1>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
  📝 Project Overview
</h4>
<p className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black max-w-[60%]">
  In this project, we built a progress bar component using React. The component allows users to visualize the completion status of a task, showcasing the use of state management and dynamic styling in React.
</p>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
  🎯 What You Will Learn
</h4>
<ul className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
<li>Control progress state using <code>useState</code></li>
  <li>Update UI dynamically based on progress value</li>
  <li>Apply inline and conditional styling</li>
  <li>Build a responsive and animated progress bar</li>
  <li>Ensure accessibility and visual feedback</li>
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
                    "/App.js": progressbarCode,
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

export default ProgressBar