import React, { useState, useEffect } from 'react';
import WhatsAppLogo from '../src/assets/images/wp.svg';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const [Size, setSize] = useState(0);
  const [LeftOrRight, setLeftOrRight] = useState(100);
  const [TopOrBottom, setTopOrBottom] = useState(100);

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleIdChange = (e) => {
    setId(e.target.value);
  }

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  }

  const handleLeftOrRightChange = (e) => {
    setLeftOrRight(e.target.value);
    const newValue = parseInt(e.target.value);

    const newStyle = newValue >= 0 && newValue <= 100 ? { right: `${newValue}px` } : { left: `${newValue}px` };
    document.getElementsByClassName('whatsapp-button').style = newStyle;
    setLeftOrRight(newValue)
  }

  const handleBottomPointChange = (e) => {
    setTopOrBottom(e.target.value);
  }


  
  return (

<div className='MainForm'>
<form className="max-w-xl mx-auto bg-slate-800	ymForm">
  <div className="mb-3">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input onChange={handleNumberChange} value={number} type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+9055555555" required />
  </div>
  <div className="mb-3">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default Text</label>
    <input onChange={handleTextChange} value={text} type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Optional' required />
  </div>
  <div className="mb-3">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Button ID</label>
    <input onChange={handleIdChange} value={id} type="text" id="Id " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='whatsapp-button' required />
  </div>
  <div className="mb-3">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Button Size</label>
    <input onChange={handleSizeChange}  value={Size} type="range" id="Size" min="10" max="200" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='whatsapp-button' required />
  </div>
  <div className="mb-3">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Button Position</label>
    <input onChange={handleLeftOrRightChange}  value={LeftOrRight} type="range" id="LeftOrRight" min="10" max="200" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='whatsapp-button' required />
  </div>
  <div className="mb-3">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Button Position</label>
    <input onChange={handleBottomPointChange}  value={TopOrBottom} type="range" id="LeftOrRight" min="10" max="200" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='whatsapp-button' required />
  </div>


  <div className="flex items-start mb-5">
  </div>
  </form>
  <div className="flex items-start mb-5">
 
  <a className={`whatsapp-button`} id={id} style={{position: 'fixed', zIndex: '1000', display: 'block', width:`${Size}px` , borderRadius: '50%', backgroundColor: '#25d366', color: '#fff', textAlign: 'center', fontSize: '30px', boxShadow: '2px 2px 3px #999', textDecoration: 'none'}} target='_blank'> 
  <img src={WhatsAppLogo} alt='WhatsApp ' />
  </a>

  </div>
  </div>

  );
}

export default App;
