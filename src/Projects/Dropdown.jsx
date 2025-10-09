import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Sandpack } from '@codesandbox/sandpack-react';




const dropdownCode = `
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Lucide icons

const dropdownStyles = {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4ff',
    fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    minWidth: '300px',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    marginTop: '10px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#374151',
  },
  header: {
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    border: '1px solid #ccc',
    borderTop: 'none',
    maxHeight: '150px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    borderRadius: '0 0 6px 6px',
  },
  listItem: {
    padding: '10px 12px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
  },
  selectedItem: {
    backgroundColor: '#f3f4f6',
  },
};

const Dropdown = ({ label, options, onChange }) => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div style={dropdownStyles.container}>
      <label style={dropdownStyles.label}>{label}</label>
      <div
        style={dropdownStyles.header}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || 'Select an option'}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      {isOpen && (
        <ul style={dropdownStyles.list}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              style={{
                ...dropdownStyles.listItem,
                ...(option === selected ? dropdownStyles.selectedItem : {}),
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function App() {
  const options = ['React', 'Vue', 'Angular', 'Svelte'];

  const handleDropdownChange = (selected) => {
    console.log('Selected:', selected);
  };

  return (
    <div style={dropdownStyles.wrapper}>
      <div style={dropdownStyles.card}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333' }}>
          📂 Dropdown Selector
        </h2>
        <Dropdown
          label="Choose a framework"
          options={options}
          onChange={handleDropdownChange}
        />
      </div>
    </div>
  );
}

`;

function Dropdown() {
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
           Dropdown Component</h1>

           <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
            📝 Project Overview
           </h4>
        <p className="text-[#4a4e5e]  selection:bg-purple-300 selection:text-black max-w-[60%]">
          In this project, we built a dropdown component using React. The component allows users to select an option from a list, showcasing the use of controlled components and state management in React.
        </p>
         <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
           🎯 What You Will Learn
            </h4>
            <ul className="text-[#4a4e5e]  selection:bg-purple-300 selection:text-black list-disc list-inside max-w-[60%]">
              <li>Using useState for state management</li>
              <li>Handling click events to open and close dropdown</li>
              <li>Rendering dynamic lists using <code>map()</code></li>
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
              "/App.js": dropdownCode,
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
      <Footer/>
      </div>



    </div>
  )
}

export default Dropdown