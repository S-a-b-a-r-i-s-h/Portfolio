import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

const font = localFont({ src: "../fonts/PPHatton-Ultralight.otf" });

const Footer = () => {
  return (
    <footer
      style={font.style}
      className="mt-10 max-md:mt-16 leding-10 min-h-[30vh] tracking-widest w-[100%] flex flex-col justify-end gap-16 items-center"
    >
      <div className="flex max-md:flex-col w-[100%] max-md:gap-10 justify-center items-center">
        <div className="flex flex-col gap-4 w-full w-[50%] text-3xl max-md:text-xl max-mad:w-[100%] justify-center items-center">
          <h1>Let's be social</h1>
          <div className="flex gap-10">
            <Link
              href="mailto:sabrusabarish@gmail.com"
            >
                <svg
                width="50px"
                height="50px"
                viewBox="0 -2.5 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                >
                    <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-340.000000, -922.000000)"
                    fill="#dbd9d9"
                    >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                        d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
                        id="email-[#1572]"
                        ></path>
                    </g>
                    </g>
                </g>
                </svg>
            </Link>
            <Link
              href="https://www.instagram.com/_.sabarish_s._/"
            >
                <svg width="45px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#dbd9d9"/>
                    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#dbd9d9"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#dbd9d9"/>
                </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[50%] max-mad:w-[100%] text-3xl max-md:text-xl  w-full justify-center items-center">
          <h1 className="text-center">Check out my Resume here</h1>
          <div className="flex justify-center items-center gap-4 text-lg w-[10%]"> 
            <Link
                className="bg-[#dbd9d9] text-[rgb(27,27,27)] font-bold rounded-full pt-2 pb-2 pl-4 pr-4"
                href={`https://drive.google.com/uc?export=download&id=17oe2n3oZBtO9YDPGysGFV6cOwgtbAQvc`}
            >
              Download
            </Link>

            <Link
              className="text-[#dbd9d9] font-bold rounded-full pt-2 pb-2 pl-4 pr-4"
              href={`https://drive.google.com/file/d/17oe2n3oZBtO9YDPGysGFV6cOwgtbAQvc/view?usp=drivesdk`}
            >
              Preview
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-center">&copy; {new Date().getFullYear()} Sabarish S. All rights reserved.</h1>
    </footer>
  );
};

export default Footer;
