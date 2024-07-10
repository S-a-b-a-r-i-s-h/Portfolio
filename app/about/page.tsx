"use client"
import TextAnimate from "@/components/TextAnimate";
import Link from "next/link";
import React, { useRef, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import {
  development,
  frameworksAndLibraries,
  toolsAndSoftSkills,
} from "@/constants";
import LeetCodeSVG from "@/components/LeetCodeSVG";
import GitHubSVG from "@/components/GitHubSVG";

const font = localFont({ src: "../../fonts/PPHatton-Ultralight.otf" });

const page = () => {
  const cardRef = useRef<HTMLElement>(null);
  const card2Ref = useRef<HTMLElement>(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0});
  const [cursor2, setCursor2] = useState({ x: 0, y: 0});
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [mouseOnCard2, setMouseOnCard2] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    if(cardRef.current) {
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      setCursor({ x, y });
    }
  }
  const handleMouseMove2 = (event: React.MouseEvent) => {
    if(card2Ref.current) {
      const { left, top, width, height } = card2Ref.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      setCursor2({ x, y });
    }
  }

  return (
    <div className="w-[100vw]">
      <div className="w-full">
        <TextAnimate />
      </div>
      <div className="w-[100%] flex max-lg:flex-col">
        <div className="w-[50%] max-lg:w-[100%] mb-10 flex justify-center items-center ">
          <Image
            width={500}
            height={500}
            src="/assets/Profile.jpg"
            alt="Sabarish Image"
            className="rounded-3xl max-sm:w-[250px] "
          />
        </div>
        <div
          style={font.style}
          className="max-md:tracking-widest flex flex-col w-[50%] max-lg:w-[100%] h-[50%] justify-center items-center gap-12"
        >
          <div className="flex justify-end pl-12 pr-12 max-lg:w-[80%] max-md:w-[90%] max-lg:p-0 ">
            <h1 className="text-lg max-md:text-sm leading-10">
              Hi, my name is Sabarish.
              <br /> <br />
              I am a Next.js web developer based in Kerala, India, passionate
              about coding and design. As a Computer Science and Engineering
              student, I love working with communities and startups that share a
              similar mindset to make a positive change in society.
              <br /> <br />I also enjoy teaching and conducting events,
              exploring new technologies, and continually striving to improve my
              skills.
              <br /> <br />
              If I have anything to improve, I am open to hearing suggestions,
              advice, or ideas from you. You've made it this far, thank you for
              taking the time to read about me. Have a nice day ahead!
            </h1>
          </div>
          <div className="flex justify-center items-center w-[90%]">
            <Link
              className="bg-[#dbd9d9] text-[rgb(27,27,27)] font-bold rounded-full pt-3 pb-3 pl-4 pr-4 btn "
              href={`/contact`}
            >
              Let's &nbsp; Connect
            </Link>
          </div>
        </div>
      </div>
      <div
        className=" w-[100%] flex flex-col items-center tracking-widest mt-32"
        style={font.style}
      >
        <div className="flex w-[100%] justify-center items-center max-lg:flex-col ">
          <div className="w-[50%] min-h-36 max-lg:w-[80%] flex flex-col items-center justify-start max-lg:mb-32">
            <h1 className="mb-4">Development</h1>
            <div className="flex justify-center flex-wrap">
              {development.map((item) => (
                <div className="m-1 relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DBD9D9_0%,#5f5f5f_50%,#DBD9D9_100%)]" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-[rgb(27,27,27)] px-6 py-1 max-sm:px-3 max-sm:py-[1px] text-sm font-medium text-[#db9d9] backdrop-blur-3xl">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%] max-lg:w-[80%] flex flex-col items-center justify-start min-h-36 h-auto flex-wrap">
            <h1 className="mb-4">Frameworks & Libraries</h1>
            <div className="flex justify-center flex-wrap">
              {frameworksAndLibraries.map((item) => (
                <div className="m-1 relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DBD9D9_0%,#5f5f5f_50%,#DBD9D9_100%)]" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-[rgb(27,27,27)] px-6 py-1 max-sm:px-3 max-sm:py-[1px] text-sm font-medium text-[#db9d9] backdrop-blur-3xl">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100%] min-h-36 h-auto max-lg:w-[80%] flex flex-col items-center justify-start mt-32">
          <h1 className="mb-4">Tools & Soft Skills</h1>
          <div className="flex justify-center flex-wrap">
            {toolsAndSoftSkills.map((item) => (
              <div className="m-1 relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DBD9D9_0%,#5f5f5f_50%,#DBD9D9_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-[rgb(27,27,27)] px-6 py-1 max-sm:px-3 max-sm:py-[1px] text-sm font-medium text-[#db9d9] backdrop-blur-3xl">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={font.style} className="w-[100%] flex justify-center mt-16">
        <div className="w-[80%] max-md:w-[100%] flex justify-around max-md:flex-col max-md:gap-24 items-center">
          <div className="flex flex-col items-center justify-center">
            <Link className="w-[30vh] stroke-[0.1] hover:stroke-[0.3] flex justify-center" 
              href={`https://leetcode.com/u/Sabarish_S_2022/`}
              ref={cardRef} 
              onMouseMove={(event) => handleMouseMove(event)}
              onMouseEnter={() => setMouseOnCard(true)}
              onMouseLeave={() => setMouseOnCard(false)}
            >
              <LeetCodeSVG cursor={cursor} cardRef={cardRef} mouseOnCard={mouseOnCard} />
            </Link>
            <h1>LeetCode</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              href={`https://github.com/S-a-b-a-r-i-s-h`}
              className="w-[30vh] stroke-[0.1] hover:stroke-[0.3]"
              ref={card2Ref} 
              onMouseMove={(event) => handleMouseMove2(event)}
              onMouseEnter={() => setMouseOnCard2(true)}
              onMouseLeave={() => setMouseOnCard2(false)}
            >
              <GitHubSVG cursor={cursor2} cardRef={card2Ref} mouseOnCard2={mouseOnCard2} />
            </Link>
            <h1>GitHub</h1>
          </div>
        </div>

        {/* <div className="w-[80%] max-sm:block hidden max-md:w-[100%] flex justify-around max-md:flex-col max-md:gap-24 items-center">
          <div className="flex flex-col items-center justify-center">
            <Link className="w-[30vh] stroke-[0.1] hover:stroke-[0.3] flex justify-center" 
              href={`https://leetcode.com/u/Sabarish_S_2022/`}
            >
              <LeetCodeSVG cursor={cursor} cardRef={cardRef} mouseOnCard={mouseOnCard} />
            </Link>
            <h1>LeetCode</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              href={`https://github.com/S-a-b-a-r-i-s-h`}
              className="w-[30vh] stroke-[0.1] hover:stroke-[0.3]"
            >
              <GitHubSVG cursor={cursor2} cardRef={card2Ref} mouseOnCard2={mouseOnCard2} />
            </Link>
            <h1>GitHub</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
