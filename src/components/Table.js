import React from 'react'

import Dropdown from './Dropdown'

function Table() {
  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6 text-sm bg-gray-300 text-gray-600">
              RESOURCES
            </th>
            <th scope="col" class="py-3 px-6 bg-gray-300">

            </th>
            <th scope="col" class="py-3 px-6 bg-gray-300">

            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="py-4 pl-6 mt-[6px] font-medium flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white">
              {/* <Dropdown position="down" /> */}
              <a href="https://infoarena.ro/" className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'> Infoarena </a>
            </th>
            <td class="py-4 px-6">
              <a href='#' className='font-medium text-[#2563eb]'> Dynamic Programming for Computing Contests </a>
            </td>
            <td class="py-4 px-6 text-gray-600">
              Great introduction that covers most classical problems. Mentions memoization.
            </td>
          </tr>

          <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 mt-[6px] font-medium flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white">
              {/* <Dropdown position="down" /> */}
              <a href='https://codeforces.com/' className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'> Codeforces </a>
            </th>
            <td class="py-4 px-6">
              <a className='font-medium text-[#2563eb]'> DP from Novice to Advanced </a>
            </td>
            <td class="py-4 px-6 text-gray-600">
              Great introduction that covers most classical problems. Mentions memoization.
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 mt-[6px] font-medium flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white">
              {/* <Dropdown position="down" /> */}
              <a href='https://www.codechef.com/' className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'> CodeChef </a>
            </th>
            <td class="py-4 px-6">
              <a href='#' className='font-medium text-[#2563eb]'> Dynamic Programming for Computing Contests </a>
            </td>
            <td class="py-4 px-6 text-gray-600">
              Great introduction that covers most classical problems. Mentions memoization.
            </td>
          </tr>
          <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 mt-[6px] font-medium h-full flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white">
              {/* <Dropdown position="up" /> */}
              <a href='https://www.pbinfo.ro/' className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'> Pbinfo </a>
            </th>
            <td class="py-4 px-6">
              <a href='#' className='font-medium text-[#2563eb]'> Dynamic Programming for Computing Contests </a>
            </td>
            <td class="py-4 px-6 text-gray-600">
              Great introduction that covers most classical problems. Mentions memoization.
            </td>
          </tr>
          <tr>
            <th scope="row" class="py-4 px-6 mt-[6px] flex items-center gap-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {/* <Dropdown position="up" /> */}

              <a href='https://codeforces.com/' className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'> Codeforces </a>
            </th>
            <td class="py-4 px-6">
              <a href='#' className='font-medium text-[#2563eb]'> Dynamic Programming for Computing Contests </a>
            </td>
            <td class="py-4 px-6 text-gray-600">
              Great introduction that covers most classical problems. Mentions memoization.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table