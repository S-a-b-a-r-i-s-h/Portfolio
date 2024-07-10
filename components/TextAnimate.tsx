// @ts-nocheck
"use client"
import gsap from "gsap";
// import SplitText from "gsap-trial/dist/SplitText";
// import SplitText from 'gsap/SplitText';
import SplitTextJS from 'split-text-js'
import React, { useEffect, useRef } from "react";

// gsap.registerPlugin(SplitText);
const TextAnimate = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const titles = containerRef.current.querySelectorAll(".text-para");
    
    const tl = gsap.timeline();

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title, { type: 'words, chars' });
      gsap.to(".text-para", {
        opacity: 1,
      })
      tl
        .from(splitTitle.chars, {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
            duration: 1,
        },"<")
        .to(splitTitle.chars, {
            opacity: 0,
            y:-80,
            rotateX: 90,
            stagger: 0.05,
        },"<1")
    });
    tl.repeat(-1);
  }, []);
  
  
  return (
    <div ref={containerRef} className="animate-container w-[100%] h-[50vh] max-md:h-[30vh] text-9xl max-md:text-7xl max-sm:text-5xl flex items-center">
      <div className="text-wrapper w-[100%]">
        <p className="text-para">Dream</p>
        <p className="text-para">Decide</p>
        <p className="text-para">Design</p>
        <p className="text-para">Develop</p>
        <p className="text-para">Deploy</p>
      </div>
    </div>
  );
};

export default TextAnimate;
