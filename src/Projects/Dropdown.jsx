import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Sandpack } from '@codesandbox/sandpack-react';




const dropdownCode = `
import React, { useState } from 'react';

const dropdownStyles = {
  container: {
    width: '200px',
    margin: '10px',
    fontFamily: 'sans-serif',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  header: {
    padding: '10px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative',
    backgroundColor: '#fff',
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
  },
  listItem: {
    padding: '10px',
    cursor: 'pointer',
  },
  selectedItem: {
    backgroundColor: '#f0f0f0',
  },
  arrow: {
    float: 'right',
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
        {selected || 'Select an option'}
        <span style={dropdownStyles.arrow}>{isOpen ? '▲' : '▼'}</span>
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

// App Component
export default function App() {
  const options = ['React', 'Vue', 'Angular', 'Svelte'];

  const handleDropdownChange = (selected) => {
    console.log('Selected:', selected);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dropdown Example</h2>
      <Dropdown
        label="Choose a framework"
        options={options}
        onChange={handleDropdownChange}
      />
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

  <div className='relative z-10 py-2'>
      <Navbar />
    </div>

     <div className="relative z-10 max-w-[1280px] h-fit mx-auto px-4 md:px-6 lg:px-14 pb-12 mt-8 ">

        <h1 className="text-4xl text-[#d9e0ff] font-bold mb-8 "> 
           Dropdown Component</h1>

           <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-2xl mb-1 leading-[1.5]">
            📝 Project Overview
           </h4>
        <p className="text-[#4a4e5e] max-w-[60%]">
          In this project, we built a dropdown component using React. The component allows users to select an option from a list, showcasing the use of controlled components and state management in React.
        </p>
         <h4 className="  selection:bg-purple-300 selection:text-black text-[#757c96] font-semibold text-xl mb-1 leading-[1.5] mt-4">
           🎯 What You Will Learn
            </h4>
            <ul className="text-[#4a4e5e] list-disc list-inside max-w-[60%]">
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
              editorHeight: 400,
              previewHeight: 400,
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