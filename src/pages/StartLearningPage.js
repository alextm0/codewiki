import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageDivider from '../components/PageDivider'

import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import AdmitereIcon from '../assets/admitere-icon.svg'
import BacalaureatIcon from '../assets/bacalaureat-icon.svg'
import OlimpiadaIcon from '../assets/olimpiada-icon.svg'

function StartLearningPage() {
  return (
    <div className='bg-white font-poppins'>
      <div className='bg-gradient-to-br from-[#102a4a] to-[#342a84] mb-16'>
        <Navbar />
        <PageDivider />
      </div>

      <div className='mb-20'>
        <div className='container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 '>

          <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-32">
            <div data-aos="fade-up" className="bg-white p-6 text-center rounded-xl shadow-xl hover:shadow-2xl hover:shadow-orange-100">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
                <img src={AdmitereIcon} alt="" className='w-8 h-8'/>
                {/* <img src={AdmitereIcon} alt="" className='w-12 h-12'/> */}
              </div>
              <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Admitere</h1>
              <p className="px-4 text-gray-500 mb-10">
                Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts
              </p>
              {/* Features */}
              <div className='text-gray-600 flex justify-center items-center'>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium ">
                      Iti dezvolti gandirea critica
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Pentru interviurile de angajare</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Gandire analitica</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Concentrare intensa</p>
                  </li>
                </ul>
              </div>
              <Link to={"/codewiki/admitere"} className="font-quicksand mx-auto lg:mx-0 inline-flex font-bold px-8 py-3 mt-20 my-8 text-sm text-white transition bg-orange-500 hover:bg-orange-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="#">
                Incepe aici
                <BsArrowRight className='w-5 h-5 ml-2' />
              </Link>
            </div>

            <div data-aos="fade-up" data-aos-delay="150" className="bg-white shadow-xl p-6 text-center rounded-xl hover:shadow-2xl hover:shadow-orange-100">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
                <img src={BacalaureatIcon} alt="" className=' w-8 h-8 mt-[3px] text-white' />
              </div>
              <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                Bacalaureat
              </h1>
              <p className="px-4 text-gray-500 mb-10">
                Schedule and reserve classNamerooms at one campus or multiple campuses. Keep detailed records of student attendance
              </p>

              {/* Features */}
              <div className='text-gray-600 flex justify-center items-center'>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium ">
                      Iti dezvolti gandirea critica
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Pentru interviurile de angajare</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Gandire analitica</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Concentrare intensa</p>
                  </li>
                </ul>
              </div>
              <Link to={"/codewiki/bacalaureat"} className="font-quicksand mx-auto lg:mx-0 inline-flex font-bold px-8 py-3 mt-20 my-8 text-sm text-white transition bg-orange-500 hover:bg-orange-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="#">
                Incepe aici
                <BsArrowRight className='w-5 h-5 ml-2' />
              </Link>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="bg-white shadow-xl p-6 text-center rounded-xl hover:shadow-2xl hover:shadow-orange-100">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
                <img src={OlimpiadaIcon} alt="" className='w-10 mt-[2px]' />
              </div>
              <h1 className="font-medium text-xl mb-2 lg:px-14 text-darken">
                Olimpiada
              </h1>
              <p className="px-4 text-gray-500 mb-10">
                Schedule and reserve classNamerooms at one campus or multiple campuses. Keep detailed records of student attendance
              </p>
              {/* Features */}
              <div className='text-gray-600 flex justify-center items-center'>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium ">
                      Iti dezvolti gandirea critica
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Pentru interviurile de angajare</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Gandire analitica</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium">Concentrare intensa</p>
                  </li>
                </ul>
              </div>
              <Link to={"/codewiki/olimpiada"} className="font-quicksand mx-auto lg:mx-0 inline-flex font-bold px-8 py-3 mt-20 my-8 text-sm text-white transition bg-orange-500 hover:bg-orange-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="#">
                Incepe aici
                <BsArrowRight className='w-5 h-5 ml-2' />
              </Link>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default StartLearningPage