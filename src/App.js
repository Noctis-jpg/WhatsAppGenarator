import React, { useState, useEffect } from "react";
import WhatsAppLogo from "../src/assets/images/wp.svg";

function App() {
  
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [Size, setSize] = useState(100);
  const [LeftOrRight, setLeftOrRight] = useState(100);
  const [TopOrBottom, setTopOrBottom] = useState(0);

  useEffect(() => {
    const whatsappButton = document.querySelector('.whatsapp-button');
    const resultCode = document.querySelector('.ResultCode');
    let Htmlcontent = whatsappButton.outerHTML

    Htmlcontent = Htmlcontent.replace(/</g, "&lt;").replace(/>/g, "&gt;"); 

    resultCode.innerHTML = Htmlcontent;

  
  }, [number, text, id, Size, LeftOrRight, TopOrBottom]);
  




  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleTextChange = (e) => {
    const newText = e.target.value;

    const WpText = newText.replace(/ /g, "%20");
    console.log(WpText);

    setText(WpText);
  };
  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleLeftOrRightChange = (e) => {
    const newValue = parseInt(e.target.value);
    const rightValue = newValue - 100;
    const newStyle =
      newValue >= 0 && newValue <= 100
        ? { right: "", left: `${newValue}px` }
        : { left: "", right: `${rightValue}px` };
    const whatsappButton = document.querySelector(".whatsapp-button");
    if (whatsappButton) {
      Object.assign(whatsappButton.style, newStyle);
    }
    setLeftOrRight(newValue);
};


  const handleBottomPointChange = (e) => {
    const newValueTopOrBottom = parseInt(e.target.value);
    const newStyleTop =
      newValueTopOrBottom >= 0 && newValueTopOrBottom <= 100
        ? { bottom: `${newValueTopOrBottom}px` }
        : { bottom: `${newValueTopOrBottom}px` };
    const whatsappButtonTop = document.querySelector(".whatsapp-button");
    if (whatsappButtonTop) {
      Object.assign(whatsappButtonTop.style, newStyleTop);
    }
    setTopOrBottom(newValueTopOrBottom);
  };

  return (
    <>
    {/* <div className="flex_ym"><h1>WhatsApp Generator</h1></div> */}
    <div className="MainForm_ym">
      <form className="max-w-xl mx-auto bg-slate-800	ymForm">
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phone
          </label>
          <input
            onChange={handleNumberChange}
            value={number}
            type="tel"
            id="number"
            pattern="\+?\(?\d*\)?[0-9- ]+"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+9055555555"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Default Text
          </label>
          <input
            onChange={handleTextChange}
            value={text}
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Optional"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Button ID
          </label>
          <input
            onChange={handleIdChange}
            value={id}
            type="text"
            id="Id "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="whatsapp-button"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Button Size
          </label>
          <input
            onChange={handleSizeChange}
            value={Size}
            type="range"
            id="Size"
            min="10"
            max="200"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="whatsapp-button"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block_ym block mb-2 text-sm font-medium text-gray-900 dark:text-white leftRight">
            Button Position
            <span className="Right">Right</span>
            <span className="Left">Left</span>

          </label>

          <input
            onChange={handleLeftOrRightChange}
            value={LeftOrRight}
            type="range"
            id="LeftOrRight"
            min="0"
            max="200"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="whatsapp-button"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block_ym block mb-2 text-sm font-medium text-gray-900 dark:text-white leftRight">
            Button Position
            <span className="Right">Top</span>
            <span className="Left">Bottom</span>
          </label>
          <input
            onChange={handleBottomPointChange}
            value={TopOrBottom}
            type="range"
            id="LeftOrRight"
            min="0"
            max="200"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="whatsapp-button"
            required
          />
        </div>

        <div className="flex items-start mb-5"></div>
      </form>
      <div className="result background">
      <pre className="html ResultCode"></pre>
      </div>
      <div className="flex items-start mb-5">
        <a
          href={`https://api.whatsapp.com/send?phone=${number}&text=${text}`}
          className={`whatsapp-button`}
          id={id}
          style={{
            position: "fixed",
            zIndex: "1000",
            display: "block",
            width: `${Size}px`,
            borderRadius: "50%",
            backgroundColor: "#25d366",
            color: "#fff",
            textAlign: "center",
            fontSize: "30px",
            boxShadow: "2px 2px 3px #999",
            textDecoration: "none",
            bottom: 0,
          }}
          target="_blank"
        >
          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0VERURFRDsiIGQ9Ik0wLDUxMmwzNS4zMS0xMjhDMTIuMzU5LDM0NC4yNzYsMCwzMDAuMTM4LDAsMjU0LjIzNEMwLDExNC43NTksMTE0Ljc1OSwwLDI1NS4xMTcsMCAgUzUxMiwxMTQuNzU5LDUxMiwyNTQuMjM0UzM5NS40NzYsNTEyLDI1NS4xMTcsNTEyYy00NC4xMzgsMC04Ni41MS0xNC4xMjQtMTI0LjQ2OS0zNS4zMUwwLDUxMnoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzU1Q0Q2QzsiIGQ9Ik0xMzcuNzEsNDMwLjc4Nmw3Ljk0NSw0LjQxNGMzMi42NjIsMjAuMzAzLDcwLjYyMSwzMi42NjIsMTEwLjM0NSwzMi42NjIgIGMxMTUuNjQxLDAsMjExLjg2Mi05Ni4yMjEsMjExLjg2Mi0yMTMuNjI4UzM3MS42NDEsNDQuMTM4LDI1NS4xMTcsNDQuMTM4UzQ0LjEzOCwxMzcuNzEsNDQuMTM4LDI1NC4yMzQgIGMwLDQwLjYwNywxMS40NzYsODAuMzMxLDMyLjY2MiwxMTMuODc2bDUuMjk3LDcuOTQ1bC0yMC4zMDMsNzQuMTUyTDEzNy43MSw0MzAuNzg2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVGRUZFOyIgZD0iTTE4Ny4xNDUsMTM1Ljk0NWwtMTYuNzcyLTAuODgzYy01LjI5NywwLTEwLjU5MywxLjc2Ni0xNC4xMjQsNS4yOTcgIGMtNy45NDUsNy4wNjItMjEuMTg2LDIwLjMwMy0yNC43MTcsMzcuOTU5Yy02LjE3OSwyNi40ODMsMy41MzEsNTguMjYyLDI2LjQ4Myw5MC4wNDFzNjcuMDksODIuOTc5LDE0NC43NzIsMTA1LjA0OCAgYzI0LjcxNyw3LjA2Miw0NC4xMzgsMi42NDgsNjAuMDI4LTcuMDYyYzEyLjM1OS03Ljk0NSwyMC4zMDMtMjAuMzAzLDIyLjk1Mi0zMy41NDVsMi42NDgtMTIuMzU5ICBjMC44ODMtMy41MzEtMC44ODMtNy45NDUtNC40MTQtOS43MWwtNTUuNjE0LTI1LjZjLTMuNTMxLTEuNzY2LTcuOTQ1LTAuODgzLTEwLjU5MywyLjY0OGwtMjIuMDY5LDI4LjI0OCAgYy0xLjc2NiwxLjc2Ni00LjQxNCwyLjY0OC03LjA2MiwxLjc2NmMtMTUuMDA3LTUuMjk3LTY1LjMyNC0yNi40ODMtOTIuNjktNzkuNDQ4Yy0wLjg4My0yLjY0OC0wLjg4My01LjI5NywwLjg4My03LjA2MiAgbDIxLjE4Ni0yMy44MzRjMS43NjYtMi42NDgsMi42NDgtNi4xNzksMS43NjYtOC44MjhsLTI1LjYtNTcuMzc5QzE5My4zMjQsMTM4LjU5MywxOTAuNjc2LDEzNS45NDUsMTg3LjE0NSwxMzUuOTQ1Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" alt="WhatsApp " />
        </a>
      </div>
    </div>
    </>
  );
}

export default App;
