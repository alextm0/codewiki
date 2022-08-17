import React from 'react'

function Bacalaureat() {
  return (
    <div className='mx-auto pt-10 pb-10'>
      <div className="text-center mb-5">
        {/* Title */}
        <h1 className="text-gray-900 font-quicksand font-bold text-4xl"> Bacalaureat </h1>

        <div class="min-h-screen flex flex-col">
          <header class="bg-red-50 p-2">Header</header>

          <div class="flex-1 flex flex-col sm:flex-row">
            <main class="flex-1 bg-indigo-100 p-2">Content here</main>

            <nav class="order-first sm:w-32 bg-purple-200 p-2">Navigation</nav>

            <aside class="sm:w-32 bg-yellow-100 p-2">Right Sidebar</aside>
          </div>

          <footer class="bg-gray-100 p-2">Footer</footer>
        </div>



      </div>
    </div>
  )
}

export default Bacalaureat