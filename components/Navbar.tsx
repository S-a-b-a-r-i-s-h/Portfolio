// @ts-nocheck
"use client"
import Link from 'next/link'
import React,{ useEffect, useRef, useState } from 'react'
import { navlinks } from '@/constants/navlinks'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import MenuButton from './MenuButton'


const Navbar = () => { 
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const toggleMenuName = () => {
    if(isMenuOpen) {
        setIsMenuOpen(false);
    }
  }

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });

    tl.current = gsap.timeline({ paused: true })
    .to(".menu-overlay", {
        duration: 2,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
    })
    .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: -1,
    })
  },{scope: container})

  useEffect(() => {
    if (isMenuOpen) {
        tl.current.play();
    } else {
        tl.current.reverse();
    }
  }, [isMenuOpen])
  return (
    <div className='menu-container' ref={container}>
        <div className={`menu-bar`}>
            <div className={`menu-logo`} onClick={toggleMenuName}>
                <Link href={`/`} className={`${isMenuOpen ? "text-[RGB(27,27,27)] delay-700" : "text-[#dbd9d9] delay-[1500ms]"} text-2xl font-medium max-sm:text-xl`}>Sabarish</Link>
            </div>
                <div className={`menu-open w-7 h-7 ${isMenuOpen ? "open text-[RGB(27,27,27)] delay-700" : ""}`} onClick={toggleMenu} >
                    <div className="hamburger w-10 h-10" onClick={toggleMenu}>
                        <span className={`${isMenuOpen ? "bg-[RGB(27,27,27)] delay-700": "bg-[#dbd9d9] delay-[1500ms]"}`}></span>
                        <span className={`${isMenuOpen ? "bg-[RGB(27,27,27)] delay-700": "bg-[#dbd9d9] delay-[1500ms]"}`}></span>
                    </div>
                </div>
            {/* </div> */}
        </div>
        <div className="menu-overlay">
            <div className="menu-copy">
                <div className="menu-links max-sm:text-5xl">
                    {navlinks.map((link) => (
                        <div className="menu-link-item">
                            <div className="menu-link-item-holder" onClick={toggleMenu}>
                                <Link href={link.url} className="menu-link inline-block">
                                    <MenuButton>{link.title}</MenuButton>
                                    {/* {link.title} */}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar