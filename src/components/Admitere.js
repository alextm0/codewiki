import React from 'react'

import Rating from './Rating'
import Category from './Category'

function Admitere() {
  return (
    <div className='max-w-[1024px] mx-auto'>
      <div className='max-w-[1024px] mx-auto'>
        <Category categoryName={"Complete Search"} categoryDescription={"Vestibulum diam nunc"} topics={[
          {
            name: "Custom Comparators and Coordinate Compression",
            description: "Using a custom comparator to sort custom objects or values in a non-default order and coordinate compressing values from a large range to a smaller one.",
            stars: 4
          },
          {
            name: "Two Pointers",
            description: "Iterating two monotonic pointers across an array to search for a pair of indices satisfying some condition in linear time.",
            stars: 3
          },
          {
            name: "More Operations on Sorted Sets",
            description: "Using iterators with sets, finding the next element smaller or larger than a specified key in a set.",
            stars: 2
          },
          {
            name: "Greedy Algorithms with Sorting",
            description: "Solving greedy problems by sorting the input",
            stars: 2
          }
        ]} />

        <Category categoryName={"Graphs"} categoryDescription={"Vestibulum diam nuac"} topics={[
          {
            name: "Depth First Search (DFS)",
            description: "Recursively traversing a graph.",
            stars: 1
          },
          {
            name: "Flood Fill",
            description: "Recursively traversing a graph.",
            stars: 3
          }
        ]} />
      </div>
    </div>
  )
}

export default Admitere