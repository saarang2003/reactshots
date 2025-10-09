import React from 'react'
import Navbar from '../Navbar'
import { Sandpack } from '@codesandbox/sandpack-react';
import Footer from '../Footer';


const inputCode = `
import React, { useState, useRef, useEffect } from 'react';
import { Pencil, Check } from 'lucide-react'; // Lucide icons

const EditableInput = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('Click the edit icon to change me');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        backgroundColor: '#f0f4ff',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          minWidth: '300px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333' }}>
          ✏️ Editable Input
        </h2>

        {isEditing ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSave();
              }}
              style={{
                fontSize: '1rem',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '220px',
              }}
            />
            <Check
              size={20}
              style={{ cursor: 'pointer', color: '#22c55e' }}
              onClick={handleSave}
              title="Save"
            />
          </div>
        ) : (
          <div
            onClick={() => setIsEditing(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f3f4f6',
              padding: '10px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              color: '#374151',
              gap: '10px',
            }}
          >
            <span>{value}</span>
            <Pencil size={18} title="Edit" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditableInput;


`
;

function Inputedit() {
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
           Editable Input</h1>

           <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
            📝 Project Overview
           </h4>
        <p className="text-[#4a4e5e] max-w-[60%]">
          In this project, we developed an editable input component using React that allows users to edit text inline. The component showcases the use of controlled components and state management in React.
        </p>
        <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5] mt-4">
           🎯 What You Will Learn
            </h4>
            <ul className="text-[#4a4e5e] list-disc list-inside max-w-[60%]">
              <li>Using useState for state management</li>
              <li>Handling button click events</li>
              <li>Toggling between read and edit modes</li>
              <li>Creating controlled input components in React</li>
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
              editorHeight: 600,
              previewHeight: 600,
            }}
            files={{
              "/App.js": inputCode,
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

export default Inputedit