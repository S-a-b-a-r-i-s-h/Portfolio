import React, { RefObject, useEffect, useRef, useState } from "react";

const GitHubSVG2 = () => {
  
  return (
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github" className="duration-200 h-[25vh] transition-all w-[25vh]">
        <defs>
            <radialGradient
            id="grayGradient"
            gradientUnits="userSpaceOnUse"
            r="35%"
            >
            {<stop stopColor="#dbd9d9" />}
            <stop offset={1} stopColor="#dbd9d9" />
            </radialGradient>
        </defs>
        <g>
          <g>
            <path
              stroke="#dbd9d9"
              className="fill-neutral-800/50"
              d="M12 .5A11.5 11.5 0 0 0 .5 12a11.82 11.82 0 0 0 9 11.5v-3h-1c-2.62 0-3.54-4-5-4 2.79 0 3.33 2 5 2a.89.89 0 0 0 1-1v-.35c-2.91-.82-5-3-5-5.65a5.26 5.26 0 0 1 1.57-3.66A3.16 3.16 0 0 1 6.5 4.5 5.26 5.26 0 0 1 8.88 6a9.14 9.14 0 0 1 6.24 0 5.26 5.26 0 0 1 2.38-1.5 3.16 3.16 0 0 1 .43 3.34 5.26 5.26 0 0 1 1.57 3.66c0 2.74-2.29 5-5.42 5.76a4.68 4.68 0 0 1 .42 2.24v4a11.82 11.82 0 0 0 9-11.5A11.5 11.5 0 0 0 12 .5Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};
// 303c42
export default GitHubSVG2;
