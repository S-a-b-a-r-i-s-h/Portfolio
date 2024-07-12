// @ts-nocheck
"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import localFont from 'next/font/local'

import { useEffect, useRef } from "react";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
gsap.registerPlugin(ScrollTrigger);
const font = localFont({src: "../fonts/PPHatton-Ultralight.otf"});

export default function Home() {
  const container = useRef();

  useEffect(() => {
    gsap.to(".home-heading", {
      clipPath: "polygon(0 0, 200% 0, 200% 100%, 0 100%)",
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.1,
    });
  }, []);

  // Scrollbar

  useEffect(() => {
    const el = container.current;
    gsap.to(el, {
      backgroundColor: "#dbd9d9",
      color: "rgb(27,27,27)",
      // duration: 2,
      scrollTrigger: {
        trigger: ".main",
        start: "top 70%",
        end: "top 15%",
        scrub: 2,
        toggleActions: "play none none reverse",
        // markers: true,
      }
    })
    gsap.to('.nav-text', {
      color: "rgb(27,27,27)",
      scrollTrigger: {
        trigger: ".main",
        start: "top 70%",
        end: "top 15%",
        scrub: 2,
        // markers: true,
        toggleActions: "play none none reverse",
      }
    })
    gsap.to('.hamburgers', {
      borderColor: "rgb(27,27,27)",
      borderWidth: "1px",
      scrollTrigger: {
        trigger: ".main",
        start: "top 70%",
        end: "top 15%",
        scrub: 2,
        toggleActions: "play none none reverse",
      }
    })
    
    gsap.to(".btn", {
      backgroundColor: "rgb(27,27,27)",
      color: "#dbd9d9",
      // border: "rgb(27,27,27)",
      scrollTrigger: {
        trigger: ".main",
        start: "top 70%",
        end: "top 15%",
        scrub: 2,
        toggleActions: "play none none reverse",
      }
    })
  }, []);

  return (
    <div className="w-[100%] main-2 rounded-b-3xl" ref={container}>
      <section className="h-[90vh] flex flex-col items-center justify-center pt-12 mb-16"
        data-bgcolor="rgb(27,27,27)"
        data-textcolor ="#dbd9d9"
      >
        <div className="text-[110px] homee-heading items-center flex flex-col">
          <h1 className="home-heading text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[35px]">
            Design with
          </h1>
          <h1 className="home-heading text-[160px] max-lg:text-[140px] max-md:text-[110px] max-sm:text-[60px]">
            Aesthetics
          </h1>
          <h1 className="home-heading text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[35px]">
            Live with
          </h1>
          <h1 className="home-heading text-[160px] max-lg:text-[140px] max-md:text-[110px] max-sm:text-[70px]">
            Vision
          </h1>
        </div>
        <div className="h-[10vh]">

        </div>
      </section>

      <section 
        data-bgcolor="#dbd9d9"
        data-textcolor="rgb(27,27,27)"
        className="main tracking-widest"
        ref={container}
        style={font.style}
      >
        <div className="flex h-[50%] justify-between items-center max-lg:flex-col max-lg:gap-24">
          <div className="flex justify-end w-[50%] max-lg:w-[80%] max-lg:p-0 pl-36 pr-36">
            <h1 className="text-2xl max-sm:text-xl leading-8">
            I'm an Engineering student passionate about web development and design. On a mission to make a positive impact, exploring new things, and striving to be a better human being every day.
            </h1>
          </div>
          <div className="flex justify-center items-center w-[50%] max-lg:w-[80%]">
            <Link className="bg-[#dbd9d9] text-[rgb(27,27,27)] text-sm max-sm:px-2 font-bold rounded-full pt-3 pb-3 pl-4 pr-4 btn" href={`/about`}>
              More About me
            </Link>
          </div>
        </div>
        <div>
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
