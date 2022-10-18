import React from 'react'

import { TbDotsVertical } from 'react-icons/tb'
import Dropdown from './Dropdown'

function ProblemSetTable() {
  const normalBadge = <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Normal</span>
  const easyBadge = <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">Easy</span>
  const hardBadge = <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800">Hard</span>

  return (
    <>
      <h1 className='text-gray-700 text-3xl mb-5 font-semibold'>
        Practice Problems
      </h1>

      {/* 
        text-[#2563eb]

        Purple Sapphire (#76528BFF)
        Island Green (#2BAE66FF)
        Navy Blue (#333D79FF)
      */}

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs font-medium text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 font-medium text-violet-100 bg-[#5363B7] border-b-[1px] border-gray-300">
                Source
              </th>
              <th scope="col" class="py-3 px-6  font-medium text-violet-100 bg-[#5363B7] border-b-[1px] border-gray-300">
                Problem Name
              </th>
              <th scope="col" class="py-3 px-6 font-medium text-violet-100 bg-[#5363B7] border-b-[1px] border-gray-300">
                Difficulty
              </th>
              <th scope="col" class="py-3 px-6 font-medium text-violet-100 bg-[#5363B7] border-b-[1px] border-gray-300">
                Tags
              </th>
              <th scope="col" class=" font-medium text-violet-100 bg-[#5363B7] border-b-[1px] border-gray-300">

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
                <a href='#' className='font-medium text-[#2563eb]'>
                  Connect The Tree
                </a>
              </td>
              <td class="py-4 px-6 text-gray-600">
                { hardBadge }
              </td>

              <td class="py-4 px-6 text-gray-600">
                Bitmasks, MST
              </td>

              <td class="py-4 px-6 text-2xl text-gray-600">
                <TbDotsVertical />
              </td>
            </tr>

            <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 mt-[6px] font-medium flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <Dropdown position="down" /> */}
                <a href='https://codeforces.com/' className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'> Codeforces </a>
              </th>
              <td class="py-4 px-6">
                <a href="#" className='font-medium text-[#2563eb]'>
                  Hipersum
                </a>
              </td>

              {/* Badge */}
              <td class="py-4 px-6 text-gray-600">
                { hardBadge }
              </td>

              <td class="py-4 px-6 text-gray-600">
                Binary Search, DP, Tree
              </td>

              <td class="py-4 px-6 text-2xl text-gray-600">
                <TbDotsVertical />
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 mt-[6px] font-medium flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <Dropdown position="down" /> */}
                <a href='https://www.codechef.com/' className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'> CodeChef </a>
              </th>
              <td class="py-4 px-6">
                <a href='#' className='font-medium text-[#2563eb]'>
                  Dungeon2
                </a>
              </td>
              <td class="py-4 px-6 text-gray-600">
                { easyBadge }
              </td>

              <td class="py-4 px-6 text-gray-600">
                Greedy, Tree
              </td>

              <td class="py-4 px-6 text-2xl text-gray-600">
                <TbDotsVertical />
              </td>
            </tr>
            <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-4 px-6 mt-[6px] font-medium h-full flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <Dropdown position="up" /> */}
                <a href='https://www.pbinfo.ro/' className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'> Pbinfo </a>
              </th>
              <td class="py-4 px-6">
                <a href='#' className='font-medium text-[#2563eb]'>
                  MakeBipartite
                </a>
              </td>
              <td class="py-4 px-6 text-gray-600">
                { normalBadge }
              </td>

              <td class="py-4 px-6 text-gray-600">
                DP, Functional Graph
              </td>

              <td class="py-4 px-6 text-2xl text-gray-600">
                <TbDotsVertical />
              </td>
            </tr>
            <tr>
              <th scope="row" class="py-4 px-6 mt-[6px] flex items-center gap-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* <Dropdown position="up" /> */}

                <a href='https://codeforces.com/' className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'> Codeforces </a>
              </th>
              <td class="py-4 px-6">
                <a href='#' className='font-medium text-[#2563eb]'>
                  Tairos
                </a>
              </td>
              <td class="py-4 px-6 text-gray-600">
                { easyBadge }
              </td>

              <td class="py-4 px-6 text-gray-600">
                Sliding Window
              </td>

              <td class="py-4 px-6 text-2xl text-gray-600">
                <TbDotsVertical />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProblemSetTable