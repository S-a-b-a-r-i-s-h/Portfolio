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
    <div className="w-[100%] main-2" ref={container}>
      <section className="h-[90vh] flex flex-col items-center justify-around pt-12"
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
        {/* <svg
          width="26"
          height="26"
          viewBox="0 0 32 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.168 0.887999C20.152 0.887999 21.976 1.144 23.64 1.656C25.336 2.136 27.064 2.904 28.824 3.96L30.36 16.2H29.352L24.12 4.104L25.944 6.36C24.6 4.984 23.256 3.992 21.912 3.384C20.568 2.744 19.064 2.424 17.4 2.424C13.912 2.424 11.24 3.272 9.384 4.968C7.56 6.632 6.648 8.824 6.648 11.544C6.648 13.048 6.936 14.408 7.512 15.624C8.088 16.84 9.24 18.024 10.968 19.176C12.696 20.296 15.256 21.464 18.648 22.68C21.208 23.608 23.336 24.584 25.032 25.608C26.728 26.632 28.056 27.736 29.016 28.92C30.008 30.104 30.712 31.4 31.128 32.808C31.544 34.184 31.752 35.704 31.752 37.368C31.752 40.12 31 42.6 29.496 44.808C28.024 47.016 26.008 48.76 23.448 50.04C20.888 51.32 17.96 51.96 14.664 51.96C12.424 51.96 10.344 51.752 8.424 51.336C6.536 50.92 4.76 50.28 3.096 49.416L0.264 35.448H1.272L7.752 49.128L6.264 47.16C6.968 47.768 7.8 48.312 8.76 48.792C9.752 49.272 10.84 49.64 12.024 49.896C13.208 50.152 14.456 50.28 15.768 50.28C19.16 50.28 21.944 49.304 24.12 47.352C26.296 45.368 27.384 42.776 27.384 39.576C27.384 38.2 27.192 36.968 26.808 35.88C26.424 34.792 25.768 33.784 24.84 32.856C23.944 31.896 22.68 31 21.048 30.168C19.448 29.304 17.416 28.424 14.952 27.528C11.656 26.344 9.096 25.08 7.272 23.736C5.48 22.36 4.216 20.856 3.48 19.224C2.776 17.56 2.424 15.72 2.424 13.704C2.424 11.016 3.128 8.728 4.536 6.84C5.976 4.92 7.88 3.448 10.248 2.424C12.648 1.4 15.288 0.887999 18.168 0.887999Z"
            fill="#D9DBDB"
          />
        </svg> */}
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
