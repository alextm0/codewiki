import React from 'react'

{/* navy blue - 5363B7
    purple - 6F5CE0
    light yellow - F3EED9
*/}

function ResourcesTable({ header, resource }) {
  const ResourceRows = resource.map((resource) => {
    return (
      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th scope="row" class="py-4 pl-6 mt-[6px] font-medium flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white">
          {/* <Dropdown position="down" /> */}
          <a href={resource.link} className='inline-block text-gray-600 relative after:absolute after:bg-gray-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300'>
            {resource.source}
          </a>
        </th>
        <td class="py-4 px-6">
          <a href='#' className='font-medium text-[#2563eb]'> {resource.title} </a>
        </td>
        <td class="py-4 px-6 text-gray-600">
          {resource.description}
        </td>
      </tr>
    )
  })

  return (
    <div className='font-poppins'>
      <h1 className='font-bold text-gray-700 text-3xl mb-5'>
        { header }
      </h1>
      <div class="font-poppins font-medium overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 text-sm font-medium text-gray-600  bg-gray-200 border-b-[1px] border-gray-300">
                RESOURCES
              </th>
              <th scope="col" class="py-3 px-6 text-gray-600  bg-gray-200  border-b-[1px] border-gray-300">

              </th>
              <th scope="col" class="py-3 px-6 text-gray-600  bg-gray-200  border-b-[1px] border-gray-300">

              </th>
            </tr>
          </thead>
          <tbody>
            {ResourceRows}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default ResourcesTable