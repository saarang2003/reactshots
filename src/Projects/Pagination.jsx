import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Sandpack } from '@codesandbox/sandpack-react';

const PaginationCode = `
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7fa",
    fontFamily: "sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    minWidth: "300px",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.6rem",
    marginBottom: "20px",
    color: "#333",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    marginTop: "10px",
    flexWrap: "wrap",
  },
  pageButton: (active) => ({
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: active ? "#007bff" : "#fff",
    color: active ? "#fff" : "#333",
    cursor: "pointer",
    fontWeight: active ? "bold" : "normal",
    transition: "background-color 0.2s",
    minWidth: "32px",
  }),
  iconButton: (disabled) => ({
    padding: "6px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: disabled ? "#f0f0f0" : "#fff",
    cursor: disabled ? "not-allowed" : "pointer",
    color: disabled ? "#999" : "#333",
    transition: "background-color 0.2s",
  }),
  content: {
    marginTop: "20px",
    fontSize: "1rem",
    color: "#555",
  },
};

export default function PaginationComponent() {
  const itemsPerPage = 5;
  const totalItems = 45;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Pagination Component</h2>

        <div style={styles.paginationContainer}>
          {/* Previous Button */}
          <button
            style={styles.iconButton(currentPage === 1)}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((page) => (
            <button
              key={page}
              style={styles.pageButton(page === currentPage)}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            style={styles.iconButton(currentPage === totalPages)}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div style={styles.content}>
          Showing page <strong>{currentPage}</strong> of {totalPages}
        </div>
      </div>
    </div>
  );
}

`;

function Pagination() {
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

        <h1 className="text-4xl text-[#d9e0ff]  selection:bg-purple-300 selection:text-black font-bold mb-8 "> 
           Pagination Component</h1>

           <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
            📝 Project Overview
           </h4>
        <p className="text-[#4a4e5e]  selection:bg-purple-300 selection:text-black max-w-[60%]">
          In this project, we built a pagination component using React. The component allows users to navigate through pages of content, showcasing the use of controlled components and state management in React.
        </p>
         <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
           🎯 What You Will Learn
            </h4>
           <h4>What You Will Learn</h4>
<ul className="text-[#4a4e5e] selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
  <li>Managing current page state using <code>useState</code></li>
  <li>Calculating total pages based on data length</li>
  <li>Enabling navigation with next/previous page controls</li>
  <li>Rendering page numbers dynamically with <code>.map()</code></li>
  <li>Conditionally disabling or highlighting active pages</li>
  <li>Creating a clean and reusable Pagination component</li>
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
                    "/App.js": PaginationCode,
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

export default Pagination