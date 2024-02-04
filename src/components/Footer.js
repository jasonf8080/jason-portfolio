import React from 'react'

const Footer = () => {
  return (
    <section id='contact' className="py-20 bg-black text-[var(--dark-text)]">
      <div className="container">
        <h1 className="heading">Reach Out</h1>

        <div className="flex justify-between items-start">
          <div>
            <p className='text-xl md:text-3xl font-bold mb-2 md:mb-4'>📱 <span className='ml-2 md:ml-5'>845-204-4236</span></p>
            <p className='text-xl md:text-3xl font-bold mb-6 md:mb-12'>📥 <span className='ml-2 md:ml-5'>@jasonf8080@gmail.com</span></p> 
            <p className='text-sm md:text-lg'>&copy; Jason Fleming. All Rights Reserved</p>
          </div>

          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer