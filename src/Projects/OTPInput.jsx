import { Sandpack } from '@codesandbox/sandpack-react';
import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';


const OTPCode = `
import React, { useRef, useState } from "react";
import { Lock } from "lucide-react"; // Lucide icon

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef2ff",
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
  inputGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "8px",
    marginBottom: "16px",
  },
  input: {
    width: "40px",
    height: "50px",
    fontSize: "1.5rem",
    textAlign: "center",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  result: {
    fontSize: "1rem",
    color: "#222",
    marginTop: "10px",
    fontWeight: "bold",
  },
  icon: {
    marginBottom: "10px",
    color: "#6366f1",
  },
};

export default function App() {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.icon}>
          <Lock size={28} />
        </div>
        <h2 style={styles.heading}>🔐 OTP Verification</h2>
        <p style={styles.description}>
          Please enter the 6-digit code sent to your email.
        </p>
        <div style={styles.inputGroup}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              style={styles.input}
            />
          ))}
        </div>
        <div style={styles.result}>Entered OTP: {otp.join("")}</div>
      </div>
    </div>
  );
}

`;


function OTPInput() {
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

        <h1 className="text-4xl text-[#d9e0ff] font-bold mb-8"> 
  OTP Input Component
</h1>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
  📝 Project Overview
</h4>
<p className="text-[#4a4e5e] max-w-[60%]">
  In this project, we built an OTP input component using React. The component allows users to enter a one-time password, showcasing the use of controlled components and state management in React.
</p>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
  🎯 What You Will Learn
</h4>
<ul className="text-[#4a4e5e] list-disc list-inside max-w-[60%]">
  <li>Using <code>useState</code> and <code>userefs</code> for managing multiple input values</li>
  <li>Auto-focusing and navigating between inputs using refs</li>
  <li>Handling keyboard events like <code>Backspace</code> for smooth UX</li>
  <li>Creating dynamic input fields using <code>Array.map()</code></li>
  <li>Building accessible and user-friendly form components</li>
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
                    "/App.js": OTPCode,
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

export default OTPInput