import React, { useEffect, useState } from 'react'
import Project from './Project'

const Projects = () => {
    const [projects, setProjects] = useState([])

    const fetchProjects = async() => {
        const response = await fetch('/projects.json')
        const data = await response.json();
        setProjects(data)
    }

    useEffect(() => {
        fetchProjects();
    }, [])

  return (
    <section id="projects" className='py-12 md:py-40  bg-gradient-to-b from-black to-[var(--dark-background)]'>
        <div className="container">
            <h2 className="heading">Projects</h2>

            <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((item, index) => {
                  return <Project key={index} {...item}/>
                })}
            </div>
            
        </div>
    </section>
  )
}

export default Projects