import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const Project = ({title, image, intro}) => {

    const [loading, setLoading] = useState(false)

    const handleImageLoad = () => {
        const imageLoad = new Image();
        imageLoad.src = image

        console.log(imageLoad.src)
        imageLoad.onload = () => {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleImageLoad();
    }, [])


    if(loading){
        return <h2>Loadingg...</h2>
    }

    return (
        <Link to={`/project/${title}`}>
       <div className="card rounded-lg bg-[#222] text-[var(--dark-text)] shadow-xl">
            <img className='rounded-t-lg min-w-full' src={image} alt={title}/>

            <div className="card-content p-6 md:p-8">
                <h2 className='text-xl md:text-2xl mb-3 md:mb-5 font-bold'>{title}</h2>
                <p className='mb-6 md:mb-10 text-sm md:text-lg'>{intro}</p>
                <Link className='button-primary px-4 py-2 md:px-6 md:py-3 flex justify-center items-center max-w-[200px]' to={`/project/${title}`}>
                    <p className='text-sm md:text-lg'>View Project</p>
                    <span className='text-xl ml-4'><FaArrowRightLong/></span>
                </Link>
            </div>
       </div>
       </Link>
    )
}

export default Project