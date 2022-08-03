import React from 'react'

import {ReactComponent as CodeImg1} from '../assets/code_1.svg';
import {ReactComponent as CodeImg2} from '../assets/code_2.svg';
import {ReactComponent as CodeImg3} from '../assets/code_3.svg';

function Features() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl flex flex-col">
      <h1 className='font-quicksand text-3xl lg:text-4xl self-center text-gray-800 font-semibold mb-16 '> De ce <span className='text-purple-500 font-righteous font-medium'> CodeWiki </span> ? </h1>
      <div className="grid items-center grid-cols-1 mb-32 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="font-quicksand mb-4 text-2xl font-extrabold tracking-tight text-center text-gray-900 md:leading-tight sm:text-left md:text-4xl">
            Clear overview for efficient tracking
          </h2>
          <p className="md:mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
          </p>
          {/* <a href="#" className="mt-3 w-full btn bg-gray-900 text-gray-300 btn-lg sm:w-auto">Learn More</a> */}
        </div>
        <CodeImg1 className='w-full h-full pb-10' />
      </div>

      <div className="grid flex-col-reverse items-center grid-cols-1 mb-32 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="font-quicksand mb-4 text-2xl font-extrabold tracking-tight text-center text-gray-900 md:leading-tight sm:text-left md:text-4xl">Decide how you integrate Payments</h2>
          <p className="md:mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
            scratch.
          </p>
          {/* <a href="#" className="mt-53 w-full btn btn-dark btn-lg sm:w-auto">Learn More</a> */}
        </div>
        <CodeImg1 className='w-full h-full pb-10' />
      </div>
      
      <div className="grid items-center grid-cols-1 mb-32 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h2 className="font-quicksand mb-4 text-2xl font-extrabold tracking-tight text-center text-gray-900 md:leading-tight sm:text-left md:text-4xl">
            Clear overview for efficient tracking
          </h2>
          <p className="md:mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
          </p>
          {/* <a href="#" className="mt-3 w-full btn bg-gray-900 text-gray-300 btn-lg sm:w-auto">Learn More</a> */}
        </div>
        <CodeImg1 className='w-full h-full' />
      </div>    
    </section>
  )
}

export default Features