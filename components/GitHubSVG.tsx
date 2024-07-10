import React, { RefObject, useEffect, useRef, useState } from "react";


{/* <div className=" border-2 flex justify-center" 
              ref={card2Ref} 
              onMouseMove={(event) => handleMouseMove2(event)}
              onMouseEnter={() => setMouseOnCard2(true)}
              onMouseLeave={() => setMouseOnCard2(false)}
            >
              <GitHubSVG cursor={cursor2} cardRef={card2Ref} mouseOnCard2={mouseOnCard2} />
            </div> */}
interface Props {
    cursor: { x: number; y: number };
    cardRef: RefObject<HTMLElement>;
    mouseOnCard2: boolean;
}
const GitHubSVG = ({ cursor, cardRef, mouseOnCard2}: Props) => {
  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" });

//   const cardRef = useRef<HTMLElement>(null);
//   const [cursor, setCursor] = useState({ x: 0, y: 0});
//   const [mouseOnCard, setMouseOnCard] = useState(false);

//   const handleMouseMove2 = (event: React.MouseEvent) => {
//     if(cardRef.current) {
//       const { left, top, width, height } = cardRef.current.getBoundingClientRect();
//       const x = event.clientX - left;
//       const y = event.clientY - top;
//       setCursor({ x, y });
//     }
//   }
  
  useEffect(() => {
    if(cardRef.current && cursor.x && cursor.y) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const cxPercentage = (cursor.x / cardRect.width) * 100 - 24;
        const cyPercentage = (cursor.y / cardRect.height) * 100 -24;
        setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor, cardRef.current]) 
  return (
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="github" className="duration-200 h-[25vh] transition-all w-[25vh]">
        <defs>
            <radialGradient
            id="grayGradient"
            gradientUnits="userSpaceOnUse"
            r="35%"
            cx={gradientCenter.cx}
            cy={gradientCenter.cy}
            >
            {mouseOnCard2 && <stop stopColor="#dbd9d9" />}
            <stop offset={1} stopColor="#000000" />
            </radialGradient>
        </defs>
        <g>
          <g>
            <path
              stroke="url(#grayGradient)"
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
export default GitHubSVG;
