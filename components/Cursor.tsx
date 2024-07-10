"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
    });
  };

  const hideCursor = (): void => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  };

  const showCursor = (): void => {
    gsap.to(cursorRef.current, {
      opacity: 1,
      duration: 0.3,
    });
  };

  useEffect(() => {
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseout", hideCursor);
    document.addEventListener("mouseover", showCursor);

    // Clean up event listeners
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseout", hideCursor);
      document.removeEventListener("mouseover", showCursor);
    };
  }, []);

  return (
    <div>
      <div ref={cursorRef} className="max-sm:hidden follower-cursor"></div>
    </div>
  );
};

export default Cursor;
