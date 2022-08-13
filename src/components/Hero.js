import React from 'react'

import HeroImage from '../assets/hero-illustration.png'
import { BsArrowRight } from 'react-icons/bs'

import PageDivider from './PageDivider'

function Hero() {
  return (
    <div className='leading-normal tracking-normal text-gray-900'>
      <div className="pt-16 md:pl-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl leading-tight font-righteous font-medium text-white">
              Invata informatica si depaseste-ti limitele
            </h1>
            <p className="leading-normal text-xl mb-8 text-gray-500">
              Sub-hero message, not too long and not too short. <br/> Make it just right!
            </p>
            
            <a class="font-quicksand mx-auto lg:mx-0 inline-flex font-bold px-8 py-3 my-8 text-sm text-white transition bg-orange-500 hover:bg-orange-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="#">
              Incepe aici
              <BsArrowRight className='w-5 h-5 ml-2' />
            </a>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-3/5 ml-auto mr-auto mb-10 sm:mb-20 z-50" src={HeroImage} />
          </div>
        </div>
      </div>
      <PageDivider />
    </div>
  )
}

export default Hero