import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from 'react-icons/fa6';

const Overview = ({src}) => {
  return (
   <section className='py-12 md:py-40 bg-gradient-to-b to-black from-[var(--dark-background)]'>
        <div className="max-w-[80%] md:max-w-[70%] mx-auto">
            {/* <h2 className="heading"></h2> */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-[20px] md:gap-[130px]">
                <div className='grid grid-cols-2 md:flex md:flex-col p-0'>
                   <p className='text-[#808080] text-md md:text-2xl mb-4 mt-0 md:mt-3'>React</p>
                   <p className='text-[#808080] text-md md:text-2xl mb-4'>Node.js</p>
                   <p className='text-[#808080] text-md md:text-2xl mb-4'>Express</p>
                   <p className='text-[#808080] text-md md:text-2xl mb-4'>MongoDB</p>
                </div>

                <div>
                    <p className='mb-10 text-md leading-[2.5rem] md:text-2xl md:leading-[3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores debitis labore perferendis veritatis nihil dolore ipsa. Ipsa numquam debitis dolorem explicabo, neque repellat voluptatum? Beatae reprehenderit enim consectetur. Amet?</p>
                    <p className='text-md leading-[2.5rem] md:text-2xl md:leading-[3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores debitis labore perferendis veritatis nihil dolore ipsa. Ipsa numquam debitis dolorem explicabo, neque repellat voluptatum? Beatae reprehenderit enim consectetur. Amet?</p>

                    <div className='flex flex-col md:flex-row items-center mt-16'>
                        <a target='_blank' href={src} className='min-w-full md:min-w-0 mb-4 md:mb-0 md:mr-5 button-primary px-8 py-4 flex justify-center items-center'>
                          <p>Live Site</p>
                          <span className='text-xl ml-4'><FaArrowRightLong/></span>
                        </a>

                        <a href='#' className='min-w-full md:min-w-0 button-secondary px-8 py-4 flex justify-center items-center'>
                           <p>Github</p>
                          <span className='text-xl ml-4'><FaGithub/></span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
   </section>
  )
}

export default Overview



// React 
// Node
// Express
// MongoDB


//React 
//External API
//Tailwind CSS
//Framer Motion


//React
//External API
//Tailwind CSS



