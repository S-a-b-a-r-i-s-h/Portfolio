"use client";
import LinkedInSVG from "@/components/LinkedInSVG";
import XSVG from "@/components/XSVG";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef, useState } from "react";
import SplitTextJS from "split-text-js";
import localFont from "next/font/local";

const font = localFont({ src: "../../fonts/PPHatton-Ultralight.otf" });

const page = () => {
  const titleRef = useRef(null);
  const cardRef = useRef<HTMLElement>(null);
  const card2Ref = useRef<HTMLElement>(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursor2, setCursor2] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [mouseOnCard2, setMouseOnCard2] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (cardRef.current) {
      const { left, top, width, height } =
        cardRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      setCursor({ x, y });
    }
  };
  const handleMouseMove2 = (event: React.MouseEvent) => {
    if (card2Ref.current) {
      const { left, top, width, height } =
        card2Ref.current.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      setCursor2({ x, y });
    }
  };

  useGSAP(() => {
    const title = titleRef.current.querySelectorAll(".contact-heading");
    // const title1 = titleRef.current.querySelectorAll('.contact-heading1');
    title.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      gsap.fromTo(
        splitTitle.chars,
        {
          y: 40,
          x: 40,
          rotateY: -90,
          opacity: 0,
        },
        {
          delay: 1.5,
          y: 0,
          x: 0,
          duration: 1,
          rotateY: 0,
          opacity: 1,
          stagger: 0.06,
        }
      );
    });
    // title1.forEach((title) => {
    //   gsap.fromTo(title, {

    //     opacity: 0,
    //     y: 90,
    //     duration: 1,
    //   }, {
    //     opacity: 1,
    //     delay: 1.5,
    //     clipPath: "polygon(0 0, 200% 0, 200% 100%, 0 100%)",
    //     y: 0,
    //     duration: 1,
    //   })
    // })
  });

  return (
    <div className="w-[100%] md:h-[90vh] flex flex-col items-center justify-around max-md:gap-12 max-md:mt-24">
      <div
        className="text-5xl w-[100%] flex flex-col gap-4 justify-start"
        ref={titleRef}
      >
        <div className="flex justify-center w-[100%] max-md:flex-col gap-6 max-md:gap-0">
          <h1 className="contact-heading text-7xl max-md:text-7xl max-sm:text-4xl flex justify-center items-center">
            Let's
          </h1>
          <h1 className="contact-heading text-7xl max-md:text-7xl max-sm:text-4xl flex justify-center items-center">
            Connect
          </h1>
        </div>
        <h1 className="contact-heading w-[100%] text-7xl max-md:text-7xl max-sm:text-4xl flex justify-center items-center">
          &
        </h1>
        <div className="flex justify-center w-[100%] max-md:flex-col  gap-6 max-md:gap-0">
          <h1 className="contact-heading text-7xl max-md:text-7xl max-sm:text-4xl flex justify-center items-center">
            Grow
          </h1>
          <h1 className="contact-heading text-7xl max-md:text-7xl max-sm:text-4xl flex justify-center items-center">
            Together
          </h1>
        </div>
      </div>
      <div style={font.style} className="tracking-widest leading-10 w-[80%] max-md:w-[100%] flex justify-around max-md:flex-col max-md:gap-12 items-center">
        <div className="flex flex-col items-center justify-center">
          <Link
            className="w-[30vh] stroke-[0.2] hover:stroke-[0.4]"
            href={`https://www.linkedin.com/in/sabarish--s/`}
            ref={cardRef}
            onMouseMove={(event) => handleMouseMove(event)}
            onMouseEnter={() => setMouseOnCard(true)}
            onMouseLeave={() => setMouseOnCard(false)}
          >
            <LinkedInSVG
              cursor={cursor}
              cardRef={cardRef}
              mouseOnCard={mouseOnCard}
            />
          </Link>
          <h1>LinkedIn</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            href={`https://x.com/Sabarish_S_`}
            className="w-[30vh] stroke-[0.1] hover:stroke-[0.3]"
            ref={card2Ref}
            onMouseMove={(event) => handleMouseMove2(event)}
            onMouseEnter={() => setMouseOnCard2(true)}
            onMouseLeave={() => setMouseOnCard2(false)}
          >
            <XSVG
              cursor={cursor2}
              cardRef={card2Ref}
              mouseOnCard2={mouseOnCard2}
            />
          </Link>
          <h1>X</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
