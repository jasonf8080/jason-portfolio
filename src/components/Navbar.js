import React, { useEffect, useState } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import NavMenu from './NavMenu';
import { useGlobalContext } from '../context';

const Navbar = () => {

  const [fixedNav, setFixedNav] = useState(false)
  const {showMenu ,setShowMenu} = useGlobalContext();
 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 500){
        setFixedNav(true)
    } else {
       setFixedNav(false)
    }
    })
    
  }, [])

//  const scrollToSection = (targetID) => {
//   const targetSection = document.getElementById(targetID);

//   if (targetSection) {
//     const rect = targetSection.getBoundingClientRect();
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // Calculate the desired scroll position, adjusting for the -50% positioning
//     const targetScrollPosition = rect.top + scrollTop - window.innerHeight / 2;

//     // Scroll to the calculated position
//     window.scrollTo({
//       top: targetScrollPosition,
//       behavior: 'smooth'
//     });
//   }
// };

  return (
    <div id='navbar' className={`${fixedNav && 'fixed top-0 left-0'} z-[999] min-w-full max-w-full py-4 shadow-md bg-black drop-shadow-md shadow-[#141414] text-[var(--dark-text)]`}>
        <div className="container flex justify-between items-center ">
            <Link to='/'><h1 className="logo text-xl font-bold">Jason Fleming</h1></Link>
{/* 
            <div className="hidden md:flex items-center">
                <button className="p-3 ml-4 text-lg" onClick={() => scrollToSection('about-me')}>Home</button>
                <button className="p-3 ml-4 text-lg" onClick={() => scrollToSection('projects')}>Projects</button>
                <button className="p-3 ml-4 text-lg" onClick={() => scrollToSection('skills')}>Skills</button>
                <button className="p-3 ml-4 text-lg" onClick={() => scrollToSection('contact')}>Contact</button>
            </div> */}

            <button className='block text-3xl' onClick={() => setShowMenu(true)}><HiMenuAlt3/></button>
           
        </div>  
    </div>
  )
}

export default Navbar