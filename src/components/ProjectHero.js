import React from 'react'

const ProjectHero = ({image}) => {
  return (
    <section className='md:mt-10'>
        <div className="max-w-full md:max-w-[92%] mx-auto">
            <img className='w-full h-auto md:rounded-lg' src={image} alt="" />
        </div>
    </section>
  )
}

export default ProjectHero