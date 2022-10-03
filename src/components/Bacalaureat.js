import React from 'react'
import { useState } from 'react'

import Rating from './Rating'

function Bacalaureat() {
  return (
    <div className='max-w-[1024px] mx-auto'>

      {/* topic 1 */}
      <section className="text-gray-500">
        <div className="container max-w-5xl px-4 py-12 mx-auto" bis_skin_checked="1">
          <div className="grid gap-4 mx-4 sm:grid-cols-12" bis_skin_checked="1">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400" bis_skin_checked="1">
                <h3 className="text-gray-800 text-3xl font-semibold before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                  Complete Search
                </h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9" bis_skin_checked="1">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-400" bis_skin_checked="1">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4  sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400" bis_skin_checked="1">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-800">
                    Custom Comparators and Coordinate Compression
                  </h3>

                  {/* Rating */}
                  <div className='mt-4'>
                    <Rating stars={1} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Using a custom comparator to sort custom objects or values in a non-default order and coordinate compressing values from a large range to a smaller one.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4  sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400" bis_skin_checked="1">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-800">
                    Two Pointers
                  </h3>

                  {/* Rating */}
                  <div className='mt-4'>
                    <Rating stars={3} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Iterating two monotonic pointers across an array to search for a pair of indices satisfying some condition in linear time.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4  sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400" bis_skin_checked="1">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-800">
                    More Operations on Sorted Sets
                  </h3>

                  {/* Rating */}
                  <div className='mt-4'>
                    <Rating stars={1} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Using iterators with sets, finding the next element smaller or larger than a specified key in a set.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4  sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400" bis_skin_checked="1">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-800">
                    Greedy Algorithms with Sorting
                  </h3>

                  {/* Rating */}
                  <div className='mt-4'>
                    <Rating stars={0} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Solving greedy problems by sorting the input.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4  sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400" bis_skin_checked="1">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-800">
                    Binary Search
                  </h3>

                  {/* Rating */}
                  <div className='mt-4'>
                    <Rating stars={4} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Binary searching on arbitrary monotonic functions and built-in functions for binary search.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* topic 2 */}
      <section className="text-gray-500">
        <div className="container max-w-5xl px-4 py-12 mx-auto" bis_skin_checked="1">
          <div className="grid gap-4 mx-4 sm:grid-cols-12" bis_skin_checked="1">
            <div className="col-span-12 sm:col-span-3" bis_skin_checked="1">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400" bis_skin_checked="1">
                <h3 className="text-gray-800 text-3xl font-semibold before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                  Graphs
                </h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9" bis_skin_checked="1">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-400" bis_skin_checked="1">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4  sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400" bis_skin_checked="1">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-800">
                    Depth First Search (DFS)
                  </h3>

                  {/* Rating */}
                  <div className='mt-4'>
                    <Rating stars={4} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Recursively traversing a graph.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4  sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400" bis_skin_checked="1">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-800">
                    Flood Fill
                  </h3>

                  {/* Rating */}
                  <div className='mt-4'>
                    <Rating stars={4} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Recursively traversing a graph.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4  sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400" bis_skin_checked="1">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-800">
                    Introduction to Tree Algorithms
                  </h3>

                  {/* Rating */}
                  <div className='mt-4'>
                    <Rating stars={4} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Recursively traversing a graph.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bacalaureat