import React, { useState } from 'react';
import WhatsAppLogo from '../src/assets/images/wp.svg';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const [Size, setSize] = useState(100);
  const [LeftOrRight, setLeftOrRight] = useState(100);
  const [TopOrBottom, setTopOrBottom] = useState(0);
  
  const handleNumberChange = (e) => {
    setNumber(e.target.value);



  }
  const handleTextChange = (e) => {
    const newText = (e.target.value);

    const WpText = newText.replace(/ /g, '%20');
    console.log(WpText);


    setText(WpText);

  }
  const handleIdChange = (e) => {
    setId(e.target.value);
  }
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  }
  const handleLeftOrRightChange = (e) => {
    const newValue = parseInt(e.target.value);
  
    const newStyle = newValue >= 0 && newValue <= 100 ? {left: '', right: `${newValue}px` } : {right: '', left: `${newValue}px` };
    
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
      Object.assign(whatsappButton.style, newStyle);
    }
    setLeftOrRight(newValue);
  }

  const handleBottomPointChange = (e) => {
    const newValueTopOrBottom = parseInt(e.target.value);
    const newStyleTop = newValueTopOrBottom >= 0 && newValueTopOrBottom <= 100 ? {bottom: `${newValueTopOrBottom}px` } : {bottom: `${newValueTopOrBottom}px` };
    const whatsappButtonTop = document.querySelector('.whatsapp-button');
    if (whatsappButtonTop) {
      Object.assign(whatsappButtonTop.style, newStyleTop);
    }
    setTopOrBottom(newValueTopOrBottom);
  }


  
  return (

<div className='MainForm_ym'>
<form className="max-w-xl mx-auto bg-slate-800	ymForm">
  <div className="mb-3">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input onChange={handleNumberChange} value={number} type="tel" id="number" pattern="\+?\(?\d*\)?[0-9- ]+" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+9055555555" required />
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
    <input onChange={handleLeftOrRightChange}  value={LeftOrRight} type="range" id="LeftOrRight" min="0" max="200" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='whatsapp-button' required />
  </div>
  <div className="mb-3">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Button Position</label>
    <input onChange={handleBottomPointChange}  value={TopOrBottom} type="range" id="LeftOrRight" min="0" max="200" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='whatsapp-button' required />
  </div>

  <div className="flex items-start mb-5">
  </div>
  </form>
  <div className="result background">
  <code class="html hljs xml"></code>
  </div>
  <div className="flex items-start mb-5 ResultCode">
  <a href={`https://api.whatsapp.com/send?phone=${number}&text=${text}`} className={`whatsapp-button`} id={id} style={{position: 'fixed', zIndex: '1000', display: 'block', width:`${Size}px` , borderRadius: '50%', backgroundColor: '#25d366', color: '#fff', textAlign: 'center', fontSize: '30px', boxShadow: '2px 2px 3px #999', textDecoration: 'none',bottom:0}} target='_blank'> 
  <img src={WhatsAppLogo} alt='WhatsApp ' />
  </a>
  </div>
  </div>

  );
} 

export default App;
