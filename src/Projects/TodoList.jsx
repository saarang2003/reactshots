import React from 'react'
import Navbar from '../Navbar';
import { Sandpack } from '@codesandbox/sandpack-react';
import Footer from '../Footer';

const TodoCode = `
import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react"; // Lucide icons

const styles = {
  wrapper: {
    height: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "320px",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#111827",
    textAlign: "center",
  },
  form: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "6px 0 0 6px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px",
    backgroundColor: "#3b82f6",
    border: "none",
    borderRadius: "0 6px 6px 0",
    cursor: "pointer",
    color: "#fff",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #eee",
    fontSize: "1rem",
    color: "#374151",
  },
  empty: {
    textAlign: "center",
    color: "#9ca3af",
    fontStyle: "italic",
    fontSize: "0.9rem",
  },
};

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📝 Todo List</h2>
        <div style={styles.form}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task..."
            style={styles.input}
          />
          <button onClick={handleAdd} style={styles.addButton} title="Add Task">
            <Plus size={20} />
          </button>
        </div>

        {tasks.length === 0 ? (
          <p style={styles.empty}>No tasks added yet.</p>
        ) : (
          <ul style={styles.list}>
            {tasks.map((t, index) => (
              <li key={index} style={styles.listItem}>
                {t}
                <button
                  onClick={() => handleDelete(index)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#ef4444" }}
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

`;


function TodoList() {
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
           Todo List Component</h1>

           <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
            📝 Project Overview
           </h4>
        <p className="text-[#4a4e5e]  selection:bg-purple-300 selection:text-black max-w-[60%]">
          In this project, we built a todo list component using React. The component allows users to add, remove, and manage tasks, showcasing the use of controlled components and state management in React.
        </p>
         <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
           🎯 What You Will Learn
            </h4>
            <ul className="text-[#4a4e5e]  selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
                <li>Managing state using <code>useState</code></li>
                <li>Handling form inputs and task submissions</li>
                <li>Rendering dynamic lists with <code>map()</code></li>
                <li>Implementing task deletion and UI updates</li>
                <li>Building clean and reusable component structure</li>
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
                    "/App.js": TodoCode,
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

export default TodoList