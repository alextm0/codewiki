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
              <Link to={"/admitere"} className="font-quicksand mx-auto lg:mx-0 inline-flex font-bold px-8 py-3 mt-20 my-8 text-sm text-white transition bg-orange-500 hover:bg-orange-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="#">
                Incepe aici
                <BsArrowRight className='w-5 h-5 ml-2' />
              </Link>
            </div>

            <div data-aos="fade-up" data-aos-delay="150" className="bg-white shadow-xl p-6 text-center rounded-xl hover:shadow-2xl hover:shadow-orange-100">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
                {/* <svg className="w-6 h-6 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z" fill="#F5F5FC" />
                  <path d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z" fill="#F5F5FC" />
                  <path d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z" fill="#F5F5FC" />
                  <path d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z" fill="#F5F5FC" />
                  <path d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z" fill="#F5F5FC" />
                  <path d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.661 23.9999 37.7143 23.9999Z" fill="#F5F5FC" />
                  <path d="M13.7142 30.8571H10.2857C9.33889 30.8571 8.57138 31.6246 8.57138 32.5714C8.57138 33.5182 9.33889 34.2857 10.2857 34.2857H13.7142C14.661 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.661 30.8571 13.7142 30.8571Z" fill="#F5F5FC" />
                  <path d="M25.7143 30.8571H22.2857C21.3389 30.8571 20.5714 31.6246 20.5714 32.5714C20.5714 33.5182 21.3389 34.2857 22.2857 34.2857H25.7143C26.6611 34.2857 27.4286 33.5182 27.4286 32.5714C27.4286 31.6246 26.6611 30.8571 25.7143 30.8571Z" fill="#F5F5FC" />
                  <path d="M37.7143 30.8571H34.2857C33.3389 30.8571 32.5714 31.6246 32.5714 32.5714C32.5714 33.5182 33.3389 34.2857 34.2857 34.2857H37.7143C38.6611 34.2857 39.4286 33.5182 39.4286 32.5714C39.4285 31.6246 38.661 30.8571 37.7143 30.8571Z" fill="#F5F5FC" />
                  <path d="M13.7142 37.7142H10.2857C9.33889 37.7142 8.57138 38.4817 8.57138 39.4286C8.57138 40.3754 9.33889 41.1428 10.2857 41.1428H13.7142C14.661 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.661 37.7142 13.7142 37.7142Z" fill="#F5F5FC" />
                  <path d="M25.7143 37.7142H22.2857C21.3389 37.7142 20.5714 38.4817 20.5714 39.4285C20.5714 40.3754 21.3389 41.1429 22.2857 41.1429H25.7143C26.6611 41.1429 27.4286 40.3754 27.4286 39.4285C27.4286 38.4817 26.6611 37.7142 25.7143 37.7142Z" fill="#F5F5FC" />
                  <path d="M37.7143 37.7142H34.2857C33.3389 37.7142 32.5714 38.4817 32.5714 39.4285C32.5714 40.3754 33.3389 41.1429 34.2857 41.1429H37.7143C38.6611 41.1429 39.4286 40.3754 39.4286 39.4285C39.4286 38.4817 38.661 37.7142 37.7143 37.7142Z" fill="#F5F5FC" />
                </svg> */}
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
              <Link to={"/bacalaureat"} className="font-quicksand mx-auto lg:mx-0 inline-flex font-bold px-8 py-3 mt-20 my-8 text-sm text-white transition bg-orange-500 hover:bg-orange-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="#">
                Incepe aici
                <BsArrowRight className='w-5 h-5 ml-2' />
              </Link>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="bg-white shadow-xl p-6 text-center rounded-xl hover:shadow-2xl hover:shadow-orange-100">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
                {/* <svg className="w-6 h-6 text-white" viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z" fill="white" />
                </svg> */}
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
              <Link to={"/olimpiada"} className="font-quicksand mx-auto lg:mx-0 inline-flex font-bold px-8 py-3 mt-20 my-8 text-sm text-white transition bg-orange-500 hover:bg-orange-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="#">
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