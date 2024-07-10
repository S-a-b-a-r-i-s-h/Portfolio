"use client"
import React, { RefObject, useEffect, useState } from "react";

const XSVG2 = () => {
  
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
            >
            {<stop stopColor="#dbd9d9" />}
            <stop offset={1} stopColor="#000000" />
            </radialGradient>
        </defs>
        <g clip-path="#dbd9d9">
              <path
                stroke="#dbd9d9"
                className="fill-neutral-800/50"
                d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
              ></path>
            </g>
        </svg>
    </div>
  );
};

export default XSVG2;
