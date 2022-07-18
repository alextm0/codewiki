import React from 'react'

import { BsArrowRight } from 'react-icons/bs'
import HeroImage from '../assets/hero-illustration.png'

function Hero() {
  return (
    <div className='text-white'>
      <div className='flex items-center justify-evenly'>
        <div className='max-w-[500px] xl:max-w-[700px] pl-10 md:pl-14     mt-[-90px] h-screen flex flex-col justify-center'>
          <p className='text-[42px] xl:text-[45px] 2xl:text-[48px]      drop-shadow-[0px_4px_4px_rgba(0,0,0,0.30)] leading-[120%] font-righteous'>
            Invata informatica <br /> si atinge-ti scopurile
          </p>

          <p className='text-[16px] 2xl:text-[18px]      font-thin font-quicksand mt-[30px] w-[90%]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales diam sed rhoncus enim, sed aliquet ac quam. Aliquet pellentesque bibendum tellus in tellus. </p>

          <button className='w-[130px] h-[45px] text-[14px] xl:text-[16px] xl:w-[150px] xl:h-[50px]      bg-[#EC615B] rounded-lg font-quicksand font-bold flex justify-center items-center gap-2 mt-[62px]'>
            Incepe aici <BsArrowRight className='text-lg' />
          </button>
        </div>
        <div className=''>
          <img className='mb-20 w-[513px] h-[401px] xl:w-[613px] xl:h-[501px]' src={HeroImage} alt="hero-illustration" />
        </div>
      </div>
    </div>
  )
}

export default Hero