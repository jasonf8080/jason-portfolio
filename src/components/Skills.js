import React, { useEffect } from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";



const Skills = () => {

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

      function addAnimation() {
        scrollers.forEach((scroller) => {
          // add data-animated="true" to every `.scroller` on the page
          scroller.setAttribute("data-animated", true);

          // Make an array from the elements within `.scroller-inner`
          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);

          // For each item in the array, clone it
          // add aria-hidden to it
          // add it into the `.scroller-inner`
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
}

  }, [])
  return (
    <section className='py-12 md:py-40'>
      <div className="container">
        <h2 className="heading">Skills & Frameworks</h2>  

      <div class="scroller" data-speed="slow">
        <ul class="tag-list scroller__inner">
          <li>Responsive Design</li>
          <li>Animations</li>
          <li>ChatGBT</li>
          <li>Dev Tools</li>
          <li>HTTP Requests</li>
          <li>CRUD Operations</li>
          <li>User Authentication</li>
          <li>Error Handling</li>
          <li>Database</li>
          <li>Redux</li>
          <li>Rest APIs</li>
          <li>Tailwind CSS</li>
          <li>Styled Components</li>
          <li>Framer Motion</li>
          <li>GSAP</li>
          <li>UI/UX</li>
        </ul>
      </div>

      <div id="frameworks-grid" className='mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6'>
          <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
              <span className='text-4xl md:text-6xl'><FaHtml5/></span>
            </div>
             <p className='text-lg md:text-2xl'>HTML</p>
          </div>

           <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
              <span className='text-4xl md:text-6xl'><FaCss3Alt/></span>
            </div>

             <p className='text-lg md:text-2xl'>CSS</p>
          </div>

           <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
              <span className='text-4xl md:text-6xl'><IoLogoJavascript/></span>
            </div>
            <p className='text-lg md:text-2xl'>Javascript</p>
          </div>

           <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
               <span className='text-4xl md:text-6xl'><FaReact/></span>
            </div>
             <p className='text-lg md:text-2xl'>React</p>
          </div>


           <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
               <span className='text-4xl md:text-6xl'><FaNodeJs/></span>
            </div>
             <p className='text-lg md:text-2xl'>Node</p>
          </div>


           <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
               <span className='text-4xl md:text-6xl'><SiExpress/></span>
            </div>
             <p className='text-lg md:text-2xl'>Express</p>
          </div>


           <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
               <span className='text-4xl md:text-6xl'><SiMongodb/></span>
            </div>
             <p className='text-lg md:text-2xl'>MongoDB</p>
          </div>


           <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
              <span className='text-4xl md:text-6xl'><FaGithub/></span>
            </div>
             <p className='text-lg md:text-2xl'>Github</p>
          </div>

           <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
              <span className='text-4xl md:text-6xl'><SiFigma/></span>
            </div>
             <p className='text-lg md:text-2xl'>Figma</p>
          </div>

           <div className="flex items-center p-4 text-[var(--dark-text)] dark:text-[var(--dark-text)] rounded-lg bg-black">
            <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex justify-center items-center mr-6 bg-[#222] rounded-lg'>
              <span className='text-4xl md:text-6xl'><SiAdobecreativecloud/></span>
            </div>
             <p className='text-lg md:text-2xl'>Adobe CC</p>
          </div>

         
      </div>

      </div>
    </section>
  )
}

export default Skills