import React, { useEffect } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

const Hero = () => {

  useEffect(() => {
    var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
      //CHANGE TEXT SPEED BY THE MAKING THE NUMBER MULTIPLIED BY MATH.RANDOM BELOW LARGER
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    //CHANGE DELETE SPEED BY THE MAKING THE NUMBER BELOW LARGER
    if (this.isDeleting) { delta /= 5; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.11em solid #d82626 }";
    document.body.appendChild(css);
  };
  }, [])
  return (

    <section id='home' className='h-[80vh] md:h-[90vh] relative z-[-1]'>
      <div id="hero-overlay" className='absolute top-0 left-0 z-5 w-full h-full z-10 bg-[rgba(0,0,0,0.8)]'></div>
      <img className="absolute top-0 left-0 w-full h-full object-cover z-5" src='/images/hero.png' alt="" />
      <div className="container hidden md:flex flex-col justify-center min-h-full">


      <div className='mb-16 z-10'>
        <h1 className="text-6xl font-bold">Hey, I'm Jason!</h1>
        <p className='text-[#d7d7d7] leading-[3rem] text-xl mt-4 mb-8 max-w-[50%]'>Front End Developer from New York. I create custom websites to help businesses perform better online. For the last 2 years, I have been learning front end frameworks to launch my career in web development</p>
        <div className="flex max-w-[50%]">
          <button className='mr-5 button-primary px-8 py-4 flex justify-center items-center'>
                  <p>Lets Connect</p>
                  <span className='text-xl ml-4'><FaArrowRightLong/></span>
            </button>

            <button className='button-secondary px-8 py-4 flex justify-center items-center'>
                    <p>Resume</p>
            </button>
        
        </div>
      </div>

        

        </div>
          
    </section>
  )
}

export default Hero