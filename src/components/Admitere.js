import React from 'react'
import Rating from './Rating'

function Admitere() {
  return (
    <div className='max-w-[1024px] mx-auto'>

      {/* Topic 1*/}
      <section className=" text-gray-700">
        <div className="container max-w-7xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                {/* Title */}
                <h3 className="text-3xl font-semibold">
                  Complete Search
                </h3>

                {/* Description */}
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                  Vestibulum diam nunc
                </span>
              </div>
            </div>

            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    Custom Comparators and Coordinate Compression
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating noColor={true} stars={1} haus={1} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Using a custom comparator to sort custom objects or values in a non-default order and coordinate compressing values from a large range to a smaller one.
                  </p>
                </div>

                {/* bg-violet-400 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    Two Pointers
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating haus={1} stars={4} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Iterating two monotonic pointers across an array to search for a pair of indices satisfying some condition in linear time.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    More Operations on Sorted Sets
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating haus={1} stars={2} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Using iterators with sets, finding the next element smaller or larger than a specified key in a set.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    Greedy Algorithms with Sorting
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating haus={1} stars={3} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Solving greedy problems by sorting the input.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    Binary Search
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating haus={1} stars={4} />
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

      {/* Topic 2 */}
      <section className=" text-gray-700">
        <div className="container max-w-7xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                {/* Title */}
                <h3 className="text-3xl font-semibold">
                  Graphs
                </h3>

                {/* Description */}
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                  Vestibulum diam nunc
                </span>
              </div>
            </div>

            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    Depth First Search (DFS)
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating haus={1} stars={4} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Recursively traversing a graph.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    Flood Fill
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating haus={1} stars={3} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Finding connected components in a graph represented by a grid.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    Introduction to Tree Algorithms
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating haus={1} stars={2} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Introducing a special type of graph: trees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topic 3 */}
      <section className=" text-gray-700">
        <div className="container max-w-7xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                {/* Title */}
                <h3 className="text-3xl font-semibold">
                  Prefix Sums
                </h3>

                {/* Description */}
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                  Vestibulum diam nunc
                </span>
              </div>
            </div>

            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    Introduction to Prefix Sums
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating haus={1} stars={3} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Computing range sum queries in constant time over a fixed 1D array.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white before:border before:border-gray-400">
                  {/* Title of the lecture */}
                  <h3 className="text-xl font-semibold tracking-wide">
                    More on Prefix Sums
                  </h3>

                  {/* Rating */}
                  <div className='mt-3'>
                    <Rating haus={1} stars={2} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-500">
                    Max subarray sum, prefix sums in two dimensions, and a more complicated example.
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

export default Admitere