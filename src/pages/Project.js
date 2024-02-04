import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectHero, Overview, Slider, UIShots } from '../components';


const Project = () => {
  const {title} = useParams();

  const [project, setProject] = useState({})

  const fetchProject = async() => {
   try {
     const response = await fetch('/projects.json')
     const data = await response.json();

     const project = data.find((item) => item.title === title);
     setProject(project)
   } catch (error) {
    
   }
  }

  useEffect(() => {
     window.scrollTo(0,0)
    fetchProject();
  }, [title])

  return (
   <>
        <ProjectHero image={project.image}/>
        <Overview src={project.src}/>
        <Slider/>
        <UIShots/>
   </>
  )
}

export default Project