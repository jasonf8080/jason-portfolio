import React from 'react'

const UIShots = () => {
  return (
    <section className="py-20 md:py-40">
        <div className="max-w-[90%] md:max-w-[70%] mx-auto">
            <div className='grid grid-cols-1 gap-26'>
                <img className='max-w-full min-w-full rounded-xl mb-[20px] md:mb-[100px]' src='/images/ui-desktop-1.png'/>
                <img className='max-w-full min-w-full rounded-xl mb-[20px] md:mb-[100px]' src='/images/ui-desktop-2.png'/>
                <img className='max-w-full min-w-full rounded-xl mb-[20px] md:mb-[100px]' src='/images/ui-desktop-3.png'/>
            </div>
         </div>

         <div className='max-w-[90%] md:max-w-[70%] mx-auto mt-26'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>
                <img className='max-w-full min-w-full rounded-lg' src='/images/ui-mobile-1.png'/>
                <img className='max-w-full min-w-full rounded-lg' src='/images/ui-mobile-2.png'/>
                <img className='max-w-full min-w-full rounded-lg' src='/images/ui-mobile-3.png'/>
                {/* <img className='md:hidden max-w-full min-w-full rounded-lg' src='/images/ui-mobile-3.png'/> */}
            </div>
        </div>


    </section>
  )
}

export default UIShots