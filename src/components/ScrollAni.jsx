import React from "react";
import "../assets/ScrollAni.css";

function ScrollAni() {
  const images = [
    "https://imgs.search.brave.com/uUFkmMDUBJYrO81833Ue2hqXl6vNQBsK0mpB0ksfk2g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NYXN0ZXJj/YXJkL01hc3RlcmNh/cmQtTG9nby53aW5l/LnN2Zw",
    "https://imgs.search.brave.com/RppTo_6Po8GbrYJZ-xlCyB4JdhFPWNnaWC_45DHpuqg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Hb29nbGUv/R29vZ2xlLUxvZ28u/d2luZS5zdmc",
    "https://imgs.search.brave.com/uUFkmMDUBJYrO81833Ue2hqXl6vNQBsK0mpB0ksfk2g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NYXN0ZXJj/YXJkL01hc3RlcmNh/cmQtTG9nby53aW5l/LnN2Zw",
    "https://imgs.search.brave.com/RppTo_6Po8GbrYJZ-xlCyB4JdhFPWNnaWC_45DHpuqg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Hb29nbGUv/R29vZ2xlLUxvZ28u/d2luZS5zdmc",
    "https://imgs.search.brave.com/uUFkmMDUBJYrO81833Ue2hqXl6vNQBsK0mpB0ksfk2g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NYXN0ZXJj/YXJkL01hc3RlcmNh/cmQtTG9nby53aW5l/LnN2Zw",
    "https://imgs.search.brave.com/RppTo_6Po8GbrYJZ-xlCyB4JdhFPWNnaWC_45DHpuqg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Hb29nbGUv/R29vZ2xlLUxvZ28u/d2luZS5zdmc",
    
    // "https://imgs.search.brave.com/uUFkmMDUBJYrO81833Ue2hqXl6vNQBsK0mpB0ksfk2g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9NYXN0ZXJj/YXJkL01hc3RlcmNh/cmQtTG9nby53aW5l/LnN2Zw",
    
  ];

  return (
    <div className="mx-20 mt-4 flex flex-col items-center rounded-md" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px'}} id="card">
      <p className="text-white  font-normal text-xl ">Brands Campaigned so far</p>
      <div className={`${images.length > 6 ? 'scroll-container' : ''} overflow-hidden group-hover:paused`}>
        <div className={`${images.length > 6 ? 'scrolling-wrapper' : ''} flex justify-center space-x-16 group-hover:paused`}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-40 h-40 object-contain"
              alt={`Logo ${index}`}
            />
          ))}
        </div>
       
        <div className="fade-overlay left-0"></div>
        <div className="fade-overlay right-0"></div>

      </div>
    </div>
  );
}

export default ScrollAni;