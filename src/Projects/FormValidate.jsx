import React from 'react'
import { Form } from 'react-router-dom'
import Navbar from '../Navbar';
import { Sandpack } from '@codesandbox/sandpack-react';
import Footer from '../Footer';

const FormValidateCode = `
import React, { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react"; // Lucide icons

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
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
    marginBottom: "16px",
    color: "#333",
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
    width: "100%",
    padding: "10px",
    backgroundColor: "#6366f1",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  error: {
    color: "#dc2626",
    fontSize: "0.9rem",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  success: {
    color: "#16a34a",
    fontSize: "1rem",
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    justifyContent: "center",
  },
};

export default function App() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      // Do something with form data
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📝 Validate Form</h2>
        <form onSubmit={handleSubmit} noValidate>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div style={styles.error}>
              <AlertCircle size={16} />
              {errors.name}
            </div>
          )}
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div style={styles.error}>
              <AlertCircle size={16} />
              {errors.email}
            </div>
          )}
          <button type="submit" style={styles.button}>
            Submit
          </button>
          {submitted && (
            <div style={styles.success}>
              <CheckCircle size={18} />
              Form submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

`;


function FormValidate() {
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

        <h1 className="text-4xl  text-[#d9e0ff]  selection:bg-purple-300 selection:text-black  font-bold mb-8 "> 
           Validate Form</h1>

           <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
            📝 Project Overview
           </h4>
        <p className="text-[#4a4e5e]  selection:bg-purple-300 selection:text-black  max-w-[60%]">
          In this project, we built a form validation component using React. The component allows users to input their information and validates the data before submission, showcasing the use of controlled components and state management in React.
        </p>
         <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
           🎯 What You Will Learn
            </h4>
            <ul className="text-[#4a4e5e]  selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
              <li>Managing form state with <code>useState</code></li>
  <li>Implementing basic input validation logic</li>
  <li>Handling form submission and error messages</li>
  <li>Using controlled components for form inputs</li>
  <li>Displaying feedback with conditional rendering</li>
  <li>Integrating Lucide icons for UI enhancement</li>
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
                    "/App.js": FormValidateCode,
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

export default FormValidate