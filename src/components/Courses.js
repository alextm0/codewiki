import React from 'react'

import AdmitereIcon from '../assets/admitere-icon.svg'
import BacalaureatIcon from '../assets/bacalaureat-icon.svg'
import OlimpiadaIcon from '../assets/olimpiada-icon.svg'

function Courses() {
  return (
    <div className='container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 '>
      <div data-aos="flip-up" className="max-w-xl mx-auto text-center mt-24">
        <h1 className="font-bold text-darken my-3 text-2xl">All-In-One <span className="text-orange-500">Cloud Software.</span></h1>
        <p className="leading-relaxed text-gray-500">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
        <div data-aos="fade-up" className="bg-white p-6 text-center rounded-xl shadow-xl hover:shadow-2xl hover:shadow-orange-100">
          <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <img src={AdmitereIcon} alt="" className='w-8 h-8'/>
            {/* <img src={AdmitereIcon} alt="" className='w-12 h-12' /> */}
          </div>
          <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Admitere</h1>
          <p className="px-4 text-gray-500">Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className="bg-white shadow-xl p-6 text-center rounded-xl hover:shadow-2xl hover:shadow-orange-100">
          <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <img src={BacalaureatIcon} alt="" className='ml-1 w-8 h-8 mt-[3px] text-white' />
          </div>
          <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Bacalaureat</h1>
          <p className="px-4 text-gray-500">Schedule and reserve classNamerooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="bg-white shadow-xl p-6 text-center rounded-xl hover:shadow-2xl hover:shadow-orange-100">
          <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <img src={OlimpiadaIcon} alt="" className='w-[36px] h-[36px] mt-[2px]' />
          </div>
          <h1 className="font-medium text-xl mb-2 lg:px-14 text-darken">Olimpiada</h1>
          <p className="px-4 text-gray-500">Schedule and reserve classNamerooms at one campus or multiple campuses. Keep detailed records of student attendance</p>

        </div>
      </div>
    </div>
  )
}

export default Courses