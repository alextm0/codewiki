import React, { useRef } from 'react'
import { MailIcon } from '@heroicons/react/outline'


const Contact = () => {

  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    /* 
    Do something here !
    */
  }

  return (
    <div className='bg-gradient-to-br from-[#102a4a] to-[#342a84]'>
      <svg className="wave-top" viewBox="0 0 1439 147" version="1.1">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g className="wave" fill="white">
              <path
                d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
              ></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <div className="relative mx-auto w-full max-w-7xl py-20">
        <div className="grid grid-cols-2">

          {/* CONTACT FORM CONTAINER */}
          <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 px-6">
            <form action="" className="mx-auto max-w-xl space-y-4" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div>
                {/* label */}
                <label htmlFor="name" className="sr-only"> Name </label>
                {/* input */}
                <input ref={nameRef} type="text" id="name" name="name"
                  placeholder="Nume"
                  className="bg-gray-900 pl-3 py-1 form-input w-full block shadow-sm rounded border-gray-700 text-base placeholder-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
              
              {/* Email Input */}
              <div>
                {/* label */}
                <label htmlFor="email" className="sr-only">Email</label>
                {/* input */}
                <input ref={emailRef} type="email" id="email" name="email"
                  placeholder="Adresa de email"
                  className="bg-gray-900 pl-3 py-1 form-input w-full block shadow-sm rounded border-gray-700 text-base placeholder-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400"
                />
              </div>
              {/* Message Input */}
              <div className="col-span-full">
                {/* label */}
                <label htmlFor="message" className="sr-only">Message</label>
                {/* input */}
                <textarea ref={messageRef} name="message" id="message" cols="30" rows="4"
                  placeholder="Cum te putem ajuta?"
                  className="bg-gray-900 pl-3 py-1 form-textarea resize-none w-full shadow-sm rounded border-gray-700 placeholder-gray-700 focus:border-green-400 focus:ring-green-400"
                ></textarea>
              </div>
              {/* ::Submit Button */}
              <div>
                <button type="submit" className="py-2 px-6 rounded bg-orange-500 text-base text-white font-semibold uppercase hover:bg-indigo-500">Send Message</button>
              </div>
            </form>
          </div>

          {/* :CONTACT INFOS CONTAINER */}
          <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6">
            <div className="mx-auto max-w-xl flex flex-col space-y-5">
              {/* ::Title Contact Us */}
              <h2 className="text-4xl font-quicksand font-semibold text-gray-200 uppercase">Contact</h2>
              {/* ::Text */}
              <p className="text-sm text-gray-500">
                Ne-ar face placere sa auzim de la tine! Daca ai intrebari, sugestii sau feedback pentru noi, nu ezita sa ne contactezi prin intermediul formularului de mai jos. Vom incerca sa iti raspundem cat mai curand posibil. Multumim pentru interesul acordat blogului nostru.
              </p>
              {/* ::Email contact */}
              <a href="#mail" className="inline-flex items-center text-base text-blue-400 font-semibold hover:text-orange-500">
                <MailIcon className="mr-2 w-5 text-gray-400" />
                codewiki@gmail.com
              </a>
              {/* ::Address */}
              {/* ::Socials */}
              <div className="flex items-center">
                {/* :Twitter */}
                <a href="#twitter" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white filter hover:brightness-125" style={{ backgroundColor: "#1DA1F2" }}>
                  {/* ::twitter svg */}
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                {/* :FACEBOOK */}
                <a href="#facebook" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125" style={{ backgroundColor: "#4267B2" }}>
                  {/* ::facebook svg */}
                  <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                  </svg>
                </a>
                {/* :Instagram */}
                <a href="#instagrap" className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125">
                  {/* ::instagram svg */}
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact