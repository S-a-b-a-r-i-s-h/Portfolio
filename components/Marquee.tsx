// components/Marquee.tsx

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? -1 : 0.7;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      gsap.to(marqueeRef.current, {
        x: `+=${direction * 30}`,
        duration: 0.2,
        ease: "linear",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? -1 : 0.7;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      gsap.to(marquee2Ref.current, {
        x: `+=${direction * 30}`,
        duration: 0.2,
        ease: "linear",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const marquee3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? 0.7 : -1;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      gsap.to(marquee3Ref.current, {
        x: `+=${direction * 30}`,
        duration: 0.2,
        ease: "linear",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
        <div className="overflow-hidden relative w-full">
            <div ref={marqueeRef} className="whitespace-nowrap text-2xl font-bold">
                <span className="inline-block mr-10">
                / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop 
                </span>
            </div>
        </div>
        <div className="overflow-hidden relative w-full">
            <div ref={marquee3Ref} className="whitespace-nowrap text-2xl font-bold">
                <span className="inline-block mr-10">
                / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop 
                </span>
            </div>
        </div>
        <div className="overflow-hidden relative w-full">
            <div ref={marquee2Ref} className="whitespace-nowrap text-2xl font-bold">
                <span className="inline-block mr-10">
                / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop / Dream / Decide / Design / Develop 
                </span>
            </div>
        </div>
    </div>
  );
};

export default Marquee;
