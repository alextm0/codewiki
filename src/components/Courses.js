import React from 'react'

function Content() {
  return (
    <section className="bg-white font-quicksand">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">
          explore our <br /> awesome <span className="text-purple-200">Courses</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {/* Olimpiada */}
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">
            <span className="inline-block p-3 text-purple-500 bg-blue-100 rounded-full  ">
              <i className="fa-solid fa-trophy fa-xl"></i>
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Olimpiada </h1>

            <p className="text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>

            <a href="#" className="flex items-center -mx-1 text-sm text-purple-300 font-medium hover:text-indigo-400 capitalize transition-colors duration-200 transform ">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>

          {/* Bacalaureat */}
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">
            <span className="inline-block p-3 text-purple-500 bg-blue-100 rounded-full  ">
              <i class="fa-solid fa-graduation-cap fa-xl"></i>
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Bacalaureat</h1>

            <p className="text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>

            <a href="#" className="flex items-center -mx-1 text-sm text-purple-300 font-medium hover:text-indigo-400 capitalize transition-colors duration-200 transform ">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>

          {/* Admitere */}
          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">
            <span className="inline-block p-3 text-purple-500 bg-blue-100 rounded-full  ">
              <i class="fa-solid fa-graduation-cap fa-xl"></i>
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Admitere </h1>

            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>

            <a href="#" className="flex items-center -mx-1 text-sm text-purple-300 font-medium hover:text-indigo-400 capitalize transition-colors duration-200 transform ">
              <span className="mx-1">read more</span>
              <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Content