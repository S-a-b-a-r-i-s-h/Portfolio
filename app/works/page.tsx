"use client"
import { projects } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef } from 'react'
import SplitTextJS from 'split-text-js'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger);
const page = () => {
  const titleRef = useRef(null);
  const project_title = useRef(null);
  const bgRef = useRef(null);
  
  useGSAP(() => {
    const title = titleRef.current.querySelector('.project-heading');
    const splitTitle = new SplitTextJS(title);
    gsap.fromTo(splitTitle.chars, {
      y: 100,
      x: 80,
      rotateY: 90,
      opacity: 0,
    },{
      delay: 1.2,
      y: 0,
      x: 0,
      duration: 1,
      rotateY: 0,
      opacity: 1,
      stagger: 0.02,
    })

    let mm = gsap.matchMedia();
    let projectTitle = project_title.current.querySelector('.project-title');

    mm.add('(min-width:1024px)', () => {
      const projectImages = document.querySelectorAll('.project-image');
      projectImages.forEach((projectImage, index) => {
        const project = projects[index];

        const animation = gsap.to(".project-section", {
          // backgroundImage: `url(${project.img})`,
          paused: true,
          // delay: 3,
          ease: "power1.inOut",
          onStart: () => {
            
            // bgRef.current.style.delay = "1s";
            
            bgRef.current.style.filter = "blur(60px)";
            bgRef.current.style.backgroundImage = `url(${project.bg})`;
            bgRef.current.style.backgroundSize = "cover";
            bgRef.current.style.backgroundRepeat = "no-repeat";
            bgRef.current.style.backgroundPosition = "center";
          },
          onReverseComplete: () => {
            bgRef.current.style.backgroundImage = "";
            bgRef.current.style.filter = "";
          }
        });

        projectImage.addEventListener('mouseenter', () => {
          animation.play();
        });
        projectImage.addEventListener('mouseleave', () => {
          animation.reverse();
        });

        const projectTitles = document.querySelectorAll('.project-title');
        projectTitles.forEach((projectTitle) => {
          gsap.to(projectTitle, {
            x: 100,
            duration: 1,
            scrollTrigger: {
              trigger: projectTitle,
              start: "top 100%",
              end: "top 0%",
              scrub: 2,
              toggleActions: "play none none reverse",
              // markers: true,
            }
          })
        })

        

        return () => {
          projectImage.removeEventListener('mouseenter', () => {
            animation.play();
          });
          projectImage.removeEventListener('mouseleave', () => {
            animation.reverse();
          });
        };
      });
    });
  })
  
  return (
    <div className='project-section section w-[100%] relative' ref={titleRef}>
      <div className='absolute w-[100%] h-[100%] transition duration-700' ref={bgRef}></div>
      <h1 className='project-heading w-[100%] h-[50vh] max-md:h-[30vh] text-9xl max-md:text-7xl max-sm:text-5xl flex justify-center items-center' >Projects</h1>
      <div>
        {projects.map((project) => (
          <div key={project.title}  className='flex max-lg:flex-col justify-center items-center project-image mb-32'>
            <div className='w-[50vw] max-lg:w-[80vw] max-md:w-[80vw] max-md:h-[40vh] max-sm:h-[25vh] max-sm:w-[90vw] '>
                <Link
                  href={project.link}
                >
                  <Image 
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={500}
                    className='rounded-3xl object-cover w-full h-full '
                  />
                </Link>
            </div>
            <div className='w-[30vw] max-lg:w-[80vw] flex justify-start max-lg:justify-center items-center'>
              <h1 className='project-title text-5xl max-md:text-2xl' ref={project_title}>{project.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default page

