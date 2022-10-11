import React from 'react'

// 3,5,6,7,8

// 3,5,6
import HeroImage from '../assets/hero_img_5.svg' 

import { BsArrowRight } from 'react-icons/bs'

import PageDivider from './PageDivider'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    // md:mt-24
    <div className='leading-normal tracking-normal text-gray-900'>
      <div className="pt-16 md:pl-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl leading-tight font-righteous font-medium text-white">
              Invata si pregateste-ti viitorul in informatica
            </h1>
            <p className="leading-normal text-xl mb-8 text-gray-500">
              Dezvolta-ti gandirea algoritmica
            </p>
            <Link to={"/learn"} className="font-quicksand mx-auto lg:mx-0 inline-flex font-bold px-8 py-3 my-8 text-sm text-white transition bg-orange-500 hover:bg-orange-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="#">
              Incepe aici
              <BsArrowRight className='w-5 h-5 ml-2' />
            </Link>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-3/5 ml-auto mr-auto mb-10 sm:mb-20 z-50" src={HeroImage} />
            {/* <img className="w-full md:w-4/5 ml-auto mr-auto mb-10 sm:mb-20 z-50" src={HeroImage} /> */}
          </div>
        </div>
      </div>
      <PageDivider />
    </div>
  )
}

export default Hero