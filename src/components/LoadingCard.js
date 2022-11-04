import React from 'react'

function LoadingCard() {
  return (
    <div className="h-full overflow-hidden shadow-lg shadow-red-500 hover:shadow-2xl flex flex-col rounded-lg w-60 md:w-80 animate-pulse">
      <div className="h-48 rounded-t dark:bg-gray-700"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
        <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
      </div>
    </div>
  )
}

export default LoadingCard