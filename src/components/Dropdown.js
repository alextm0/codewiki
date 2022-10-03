import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import BookIcon from '../assets/book-icon.png'
import CodeIcon from '../assets/code-icon.png'
import CompleteIcon from '../assets/complete-icon.png'

function Dropdown({ position }) {
  const [dropdown, setDropdown] = useState(false);

  function toggleDropdown(id) {
    setDropdown(prev => !prev);
  }

  return (
    <div class="flex items-center justify-center relative">
      <div class="relative inline-block">
        {/* <!-- Dropdown toggle button --> */}
        <div class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
          <button onClick={toggleDropdown} class="inline-flex gap-1 items-center relative z-10 p-2 focus:outline-none hover:text-white">
            <div className='w-7 h-7 border rounded-full bg-gray-300'> </div>
          </button>
        </div>

        {/* <!-- Dropdown menu --> */}
        {(dropdown) &&
          <div class={`absolute overflow-visible ${position === "down" ? "top-0" : "-top-40"} left-10 z-20 w-48 p-2 mt-2 bg-white rounded-xl shadow-xl`}>
            <div class="block px-4 py-3 text-sm rounded-xl text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-200 active:bg-purple-500 active:text-gray-200">
              <span> Not Started </span>
            </div>

            <div class="block px-4 py-3 text-sm rounded-xl text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-200 active:bg-purple-500 active:text-gray-200">
              <img className='inline-block w-6 h-6 mr-2' src={BookIcon} alt="book-icon" />
              <span> Reading </span>
            </div>

            <div class="block px-4 py-3 text-sm rounded-xl text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-200 active:bg-purple-500 active:text-gray-200">
              <img className='inline-block w-6 h-6 mr-3' src={CodeIcon} alt="code-icon" />
              Practising
            </div>

            <div class="block px-4 py-3 text-sm rounded-xl text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-200 active:bg-purple-500 active:text-gray-200">
              <img className='inline-block w-6 h-6 mr-3' src={CompleteIcon} alt="code-icon" />
              Complete
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Dropdown