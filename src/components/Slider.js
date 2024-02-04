import React, { useEffect, useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'


const Slider = () => {
    const section = useRef(null)

    const {scrollYProgress} = useScroll({
        target: section,
        offset: ['start end', 'end start']
    })

    const translateX = useTransform(scrollYProgress, [0.4, 0.6], ['0%', '-200%'])
   



//Make the height larger to limit the boundaries...
//100vh -- animation runs to quickly

  return (
    <>
    <section className="block py-20 h-auto md:py-40 md:h-[200vh] bg-gradient-to-b to-[var(--dark-background)] from-black" ref={section}>
        <motion.div id="slider" className='hidden md:flex sticky top-20 pt-10' style={{x: translateX}}>
            <div className="slide min-w-[100vw] grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-20 items-center py-20">
                <img className='min-w-full max-w-full h-auto' src='/images/screen1.png'/>

                <div className='pb-12 pr-16'>
                    <h2 className='text-5xl text-[#333] font-bold'>Features</h2>

                    <ul className='mt-10'>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>01</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart  items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>02</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart items with a car items with a car items with a car items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>03</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>04</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                    </ul>
                </div>
            </div>

             <div className="slide min-w-[100vw] grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-20 items-center py-20">
                <img className='min-w-full max-w-full h-auto' src='/images/screen1.png'/>

                <div className='pb-12 pr-16'>
                    <h2 className='text-5xl text-[#333] font-bold'>Challenges</h2>

                    <ul className='mt-10'>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>01</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart  items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>02</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart items with a car items with a car items with a car items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>03</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>04</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                    </ul>
                </div>
            </div>

             <div className="slide min-w-[100vw] grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-20 items-center py-20">
                <img className='min-w-full max-w-full h-auto' src='/images/screen1.png'/>

                <div className='pb-12 pr-16'>
                    <h2 className='text-5xl text-[#333] font-bold'>Solutions</h2>

                    <ul className='mt-10'>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>01</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart  items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>02</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart items with a car items with a car items with a car items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>03</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-5xl mr-5'>04</span>
                            <p className='text-[#bbb] text-lg'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>

        <div className="container">
        <div className="grid md:hidden grid-cols-1">
             <div className="slide min-w-[100%] grid grid-cols-1 gap-8 md:gap-20 items-center py-10">
                <img className='min-w-full max-w-full h-auto mx-auto' src='/images/screen1.png'/>

                <div className=''>
                    <h2 className='text-3xl text-[#333] font-bold'>Features</h2>

                    <ul className='mt-5'>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>01</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart  items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>02</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart items with a car items with a car items with a car items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>03</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>04</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                    </ul>
                </div>
            </div>

             <div className="slide min-w-[100%] grid grid-cols-1 gap-8 md:gap-20 items-center py-10">
                <img className='min-w-full max-w-full h-auto mx-auto' src='/images/screen1.png'/>

                <div className=''>
                    <h2 className='text-3xl text-[#333] font-bold'>Challenges</h2>

                    <ul className='mt-5'>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>01</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart  items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>02</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart items with a car items with a car items with a car items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>03</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>04</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                    </ul>
                </div>
            </div>

             <div className="slide min-w-[100%] grid grid-cols-1 gap-8 md:gap-20 items-center py-10">
                <img className='min-w-full max-w-full h-auto mx-auto' src='/images/screen1.png'/>

                <div className=''>
                    <h2 className='text-3xl text-[#333] font-bold'>Solutions</h2>

                    <ul className='mt-5'>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>01</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart  items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>02</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart items with a car items with a car items with a car items with a car</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>03</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                        <li className='flex items-start mb-4'>
                            <span className='text-[#333] font-extrabold text-4xl mr-3'>04</span>
                            <p className='text-[#bbb] text-sm'>Cart Functionality that tracks the users items with a cart</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
         </div>
        
    </section>
    </>
  )
}

export default Slider