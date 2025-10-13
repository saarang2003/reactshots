import React from "react";
import Navbar from "../Navbar";
import { Sandpack } from "@codesandbox/sandpack-react";
import Footer from "../Footer";

const popOverCode = `
import React, { useState, useRef, useEffect } from "react";
import { Info, X } from "lucide-react";

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
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "90%",
    maxWidth: "150px",
    position: "relative",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  button: {
    padding: "10px 14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.95rem",
    position: "relative",
  },
  popoverWrapper: {
    position: "relative",
    display: "inline-block",
  },
  popover: {
    position: "absolute",
    top: "calc(100% + 10px)",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    padding: "14px 16px",
    borderRadius: "8px",
    zIndex: 10,
    minWidth: "200px",
    maxWidth: "220px",
    fontSize: "0.9rem",
    color: "#333",
    textAlign: "left",
  },
  popoverHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
    fontWeight: "600",
  },
  closeButton: {
    background: "none",
    border: "none",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: "#555",
  },
  popoverArrow: {
    content: "''",
    position: "absolute",
    top: "-6px",
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderBottom: "6px solid #fff",
    boxShadow: "0 -1px 1px rgba(0,0,0,0.05)",
  },
};

export default function PopoverComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => setIsOpen(!isOpen);

  const handleClickOutside = (e) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Popover Info</h2>
        <div style={styles.popoverWrapper} ref={popoverRef}>
          <button style={styles.button} onClick={togglePopover}>
            <Info size={18} />
            Show Info
          </button>

          {isOpen && (
            <div style={styles.popover}>
              <div style={styles.popoverArrow}></div>
              <div style={styles.popoverHeader}>
                Info
                <button
                  style={styles.closeButton}
                  onClick={() => setIsOpen(false)}
                >
                  <X size={16} />
                </button>
              </div>
              <div>
                This is a clean, minimal popover aligned perfectly below the button.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


`;

function Popover() {
  return (
    <div>
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000 40%, #6366f1 100%)",
          minHeight: "100vh",
        }}
      />
      <div className="relative z-10 py-6">
        <Navbar />
      </div>

      <div className="relative z-10 max-w-[1280px] h-fit mx-auto px-4 md:px-6 lg:px-14 pb-12 mt-8 ">
        <h1 className="text-4xl text-[#f0f0ff] selection:bg-purple-300 selection:text-black font-bold mb-8">
          Popover Component
        </h1>

        <h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
          📝 Project Overview
        </h4>
        <p className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black max-w-[60%]">
          In this project, we built a popover component using React. The
          component allows users to display additional information on hover or
          click, showcasing the use of state management and dynamic styling in
          React.
        </p>

        <h4 className="selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
          🎯 What You Will Learn
        </h4>
        <ul className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
          <li>
            Control popover visibility using <code>useState</code>
          </li>
          <li>Update UI dynamically based on popover state</li>
          <li>Apply inline and conditional styling</li>
          <li>Build a responsive and animated popover</li>
          <li>Ensure accessibility and visual feedback</li>
        </ul>
      </div>

      <section className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pb-12">
        <div className="rounded-xl border border-gray-200  bg-white p-6 shadow-sm">
          <p className="mb-4 relative z-10 text-2xl font-semibold text-[#e3ecf9]">
            Code
          </p>
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
              "/App.js": popOverCode,
            }}
            customSetup={{
              dependencies: {
                "lucide-react": "latest",
              },
            }}
          />
        </div>
      </section>

      <div className=" relative z-10 mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default Popover;
