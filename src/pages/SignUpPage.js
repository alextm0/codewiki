import React from 'react'

function SignUpPage() {
  return (
    <section className="flex justify-center items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8" bis_skin_checked="1">
        <div className="max-w-md text-center" bis_skin_checked="1">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
          <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
          <Link to={"/"} className="font-quicksand mx-auto lg:mx-0 inline-flex mt-0 font-bold px-10 py-3 my-8 text-sm text-gray-800 transition bg-gray-500 hover:bg-gray-500 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="#">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SignUpPage