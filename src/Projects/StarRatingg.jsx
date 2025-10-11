import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Sandpack } from '@codesandbox/sandpack-react';

const StarratingCode = `
import React, { useState } from "react";
import { Star, StarOff } from "lucide-react";

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
    minWidth: "280px",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#333",
  },
  starsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  star: {
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
};

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleMouseEnter = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(0);
  const handleClick = (index) => setRating(index);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Star Rating</h1>
        <div style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => {
            const isFilled = star <= (hovered || rating);
            return (
              <span
                key={star}
                onMouseEnter={() => handleMouseEnter(star)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(star)}
                style={{
                  ...styles.star,
                  transform: hovered === star ? "scale(1.2)" : "scale(1)",
                  color: isFilled ? "#f5a623" : "#ccc",
                }}
                aria-label={'Rate ' + star + ' star' + (star > 1 ? 's' : '')}
              >
                {isFilled ? <Star size={28} /> : <StarOff size={28} />}
              </span>
            );
          })}
        </div>
        <p style={{ marginTop: "20px", color: "#666" }}>
          You rated this: <strong>{rating}</strong> star{rating !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
`;


function StarRating() {
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
  Star Rating
</h1>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
  📝 Project Overview
</h4>
<p className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black max-w-[60%]">
  In this project, we built a star rating component using React. The component allows users to rate items with a 5-star system, showcasing the use of state management and event handling in React.
</p>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
  🎯 What You Will Learn
</h4>
<ul className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
  <li>Handle state with <code>useState</code></li>
  <li>Add hover and click interactions</li>
  <li>Use Context API for shared state</li>
  <li>Apply dynamic and theme-based styling</li>
  <li>Create a responsive, accessible UI</li>
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
                    "/App.js": StarratingCode,
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

export default StarRating