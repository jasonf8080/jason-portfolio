import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight, FaChevronUp, FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';


const NavMenu = () => {

  const [showProjects, setShowProjects] = useState(false)
  const heightContainer = useRef(null)
  const projectList = useRef(null)
  const {setShowMenu} = useGlobalContext();

  const handleProjectClick = () => {
    setShowMenu(false)
  }

  const closeMenu = (e) => {
    if(e.target.id === 'nav-menu' || e.target.classList.contains('exit-btn')){
      setShowMenu(false)
    } else {
      return
    }
    
  }


  //Dropdown animation for projects
  useEffect(() => {

    if(showProjects){
     const projectListHeight = projectList.current.getBoundingClientRect().height;
     heightContainer.current.style.height = `${projectListHeight}px`

    } else {
       heightContainer.current.style.height = '0px'
    }

  }, [showProjects])



  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: 0.5 }}
      id='nav-menu' 
      className='flex bg-[rgba(0,0,0,0.4)] z-[999] fixed w-[100vw] h-[100vh] top-0 left-0 p-16 justify-center items-center flex-col'
      onClick={closeMenu}
      >
       
       <button className='exit-btn fixed top-[2px] md:top-[5px] right-0 md:right-[40px] text-3xl h-[60px] w-[60px] pb-2' onClick={closeMenu}>x</button>

        <ul className='relative main-list'>
          <Link to='/' onClick={handleProjectClick}><li>Home <span><FaArrowRight/></span></li></Link>

          <li 
          onClick={() => setShowProjects(!showProjects)}>
          Projects
          <span className='cursor-pointer'>
            {!showProjects ? <FaChevronDown/> : <FaChevronUp/>}
          </span>
          </li>

      
        <div className='project-list' ref={heightContainer}>
          <ul ref={projectList}>
              <Link to='project/Pixelize' onClick={handleProjectClick}><li>Pixelize</li></Link>
              <Link to='/project/Metro%20Insights' onClick={handleProjectClick}><li>Metro Insights</li></Link>
              <Link to='/project/Footy%20Profiles' onClick={handleProjectClick}><li>Footy Profiles</li></Link>
              <Link to='/project/Kicks%20Culture' onClick={handleProjectClick}><li>Kicks Culture</li></Link>
          </ul>
        </div>
          
          
          <li>Resume <span><FaArrowRight/></span></li>

          <div className="flex items-center mt-8">
            <a href='https://www.linkedin.com' target='_blank' className='text-4xl mr-4 md:mr-6'><FaLinkedin/></a>
            <a href='https://www.linkedin.com' target='_blank' className='text-4xl'><FaGithub/></a>
          </div>
        </ul>
    </motion.div>
  )
}

export default NavMenu