import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Sandpack } from '@codesandbox/sandpack-react';


const ModalCode = `
import React, { useState } from "react";
import { X, Info } from "lucide-react";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px 25px",
    width: "70%",
    maxWidth: "500px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    position: "relative",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  openBtn: {
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4a90e2",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  content: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f7",
      }}
    >
      <button style={styles.openBtn} onClick={openModal}>
        <Info size={20} />
        Open Modal
      </button>

      {isOpen && (
        <div style={styles.overlay} onClick={closeModal}>
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button style={styles.closeBtn} onClick={closeModal}>
              <X size={20} color="#666" />
            </button>
            <h2 style={styles.title}>Modal Title</h2>
            <p style={styles.content}>
              This is a simple modal component built in React with Lucide icons
              and inline styling. Click outside the modal or the “X” icon to
              close it.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

`;


function ModalComponent() {
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
  Modal Component
</h1>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
  📝 Project Overview
</h4>
<p className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black max-w-[60%]">
  In this project, we built a modal component using React. The component allows users to display content in a modal overlay, showcasing the use of state management and event handling in React.
</p>

<h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
  🎯 What You Will Learn
</h4>
<ul className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
  <li>Manage modal visibility and user input using <code>useState</code></li>
  <li>Enhance UX with smooth hover and click interactions</li>
  <li>Share state globally using React <strong>Context API</strong></li>
  <li>Apply dynamic styles and support for dark/light themes</li>
  <li>Build a fully responsive and accessible modal interface</li>
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
                          "/App.js": ModalCode,
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

export default ModalComponent