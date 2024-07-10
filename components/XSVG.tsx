"use client"
import React, { RefObject, useEffect, useState } from "react";

interface Props {
    cursor: { x: number; y: number };
    cardRef: RefObject<HTMLElement>;
    mouseOnCard2: boolean;
}

const XSVG = ({ cursor, cardRef, mouseOnCard2 }: Props) => {
  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" });
  
  useEffect(() => {
    if(cardRef.current && cursor.x && cursor.y) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const cxPercentage = (cursor.x / cardRect.width) * 100 - 24;
        const cyPercentage = (cursor.y / cardRect.height) * 100 -24;
        setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor, cardRef.current]) 
  return (
    <div className=" flex justify-center items-center">
        <svg
            width="80px"
            height="80px"
            fill="none"
            viewBox="0 0 512 512"
            id="X"
            className="duration-200 h-[25vh] transition-all w-[25vh] stroke-[4] hover:stroke-[7]"
        >
        <defs>
            <radialGradient
            id="xGradient"
            gradientUnits="userSpaceOnUse"
            r="35%"
            cx={gradientCenter.cx}
            cy={gradientCenter.cy}
            >
            {mouseOnCard2 && <stop stopColor="#dbd9d9" />}
            <stop offset={1} stopColor="#000000" />
            </radialGradient>
        </defs>
        <g clip-path="url(#clip0_84_15698)">
              <path
                stroke="url(#xGradient)"
                className="fill-neutral-800/50"
                // fill="#000000"
                d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
              ></path>
            </g>
        </svg>

        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80px"
            height="80px"
            fill="none"
            viewBox="0 0 512 512"
            // id="twitter"
            className="duration-200 h-[25vh] border-green-300 transition-all w-[25vh] stroke-[2] hover:stroke-[5]"
          >
            <g clip-path="url(#clip0_84_15698)">
              <path
                fill="#000000"
                stroke="#dbd9d9"
                d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
              ></path>
            </g>
          </svg> */}
    </div>
  );
};

export default XSVG;
